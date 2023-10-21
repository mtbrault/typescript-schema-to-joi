import { createGenerator } from 'ts-json-schema-generator';
import joi from 'joi';
import fs from 'fs';

const jsonToJoi = (def: any, definitions: any): joi.AnySchema => {
  if (typeof def.const !== 'undefined') {
    return joi.valid(def.const);
  }

  if (def.$ref) {
    const ref = def.$ref.replace('#/definitions/', '');
    return jsonToJoi(definitions[ref], definitions);
  }

  if (def.enum) {
    return joi.valid(...def.enum);
  }

  if (def.anyOf) {
    return joi
      .alternatives()
      .try(...def.anyOf.map((anyOf: any) => jsonToJoi(anyOf, definitions)));
  }

  if (Array.isArray(def.type)) {
    return joi
      .alternatives()
      .try(...def.type.map((type: any) => jsonToJoi({ type }, definitions)));
  }

  const buildObjectKeys = () => Object.keys(def.properties).reduce((acc: any, key: string) => {
    const keySchema = jsonToJoi(def.properties[key], definitions);
    return {
      ...acc,
      [key]: def.required?.includes(key) ? keySchema.required() : keySchema,
    };
  }, {});

  switch (def.type) {
    case 'string':
      return joi.string();
    case 'number':
      return joi.number().strict();
    case 'boolean':
      return joi.boolean();
    case 'null':
      return joi.valid(null);
    case 'array':
      return joi.array().items(jsonToJoi(def.items, definitions));
    case 'object':
      return joi.object().keys(buildObjectKeys());
    default:
      return joi.forbidden();
  }
};

type Config = {
  path: string;
  tsconfig: string;
  type: string;
};

export default (
  config: Config,
  writeJsonFile = false,
  writePath?: string,
): joi.AnySchema => {
  const jsonSchema = createGenerator(config).createSchema(config.type);
  if (writeJsonFile) {
    fs.writeFileSync(
      writePath
        || `${config.path.substring(0, config.path.lastIndexOf('/') + 1)}/${
          config.type
        }.json`,
      JSON.stringify(jsonSchema, null, 2),
    );
  }
  return jsonToJoi(
    jsonSchema?.definitions?.[config.type],
    jsonSchema?.definitions,
  );
};
