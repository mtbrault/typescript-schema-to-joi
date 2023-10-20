import { createGenerator } from 'ts-json-schema-generator';
import joi from 'joi';

const jsonToJoi = (def: any) => {
  console.log(def);

  if (typeof def.const !== 'undefined') {
    return joi.valid(def.const);
  }

  if (def.enum) {
    return joi.valid(...def.enum);
  }

  if (def.anyOf) {
    return joi
      .alternatives()
      .try(...def.anyOf.map((anyOf: any) => jsonToJoi(anyOf)));
  }

  if (Array.isArray(def.type)) {
    return joi
      .alternatives()
      .try(...def.type.map((type: any) => jsonToJoi({ type })));
  }

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
      return joi.array().items(jsonToJoi(def.items));
    default:
      return joi.not();
  }
};

export default (pathToFile: string, tsConfigPath: string, type: string) => {
  const config = {
    path: pathToFile,
    tsconfig: tsConfigPath,
    type,
  };
  const jsonSchema = createGenerator(config).createSchema(type);
  return jsonToJoi(jsonSchema?.definitions?.[type]);
};
