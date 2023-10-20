import schemaToJoi from '../src';

describe('Simple types', () => {
  it('string', () => {
    const schema = schemaToJoi({
      path: './tests/fixtures/index.ts',
      tsconfig: './tsconfig.json',
      type: 'String',
    });

    const nullTest = schema.validate(null);
    const stringTest = schema.validate('string');
    const numberTest = schema.validate(1);
    const booleanTest = schema.validate(true);

    expect(nullTest.error).toBeDefined();
    expect(stringTest.error).toBeUndefined();
    expect(numberTest.error).toBeDefined();
    expect(booleanTest.error).toBeDefined();
  });

  it('number', () => {
    const schema = schemaToJoi({
      path: './tests/fixtures/index.ts',
      tsconfig: './tsconfig.json',
      type: 'Number',
    });

    const nullTest = schema.validate(null);
    const stringTest = schema.validate('string');
    const numberTest = schema.validate(1);
    const booleanTest = schema.validate(true);

    expect(nullTest.error).toBeDefined();
    expect(stringTest.error).toBeDefined();
    expect(numberTest.error).toBeUndefined();
    expect(booleanTest.error).toBeDefined();
  });

  it('boolean', () => {
    const schema = schemaToJoi({
      path: './tests/fixtures/index.ts',
      tsconfig: './tsconfig.json',
      type: 'Boolean',
    });

    const nullTest = schema.validate(null);
    const stringTest = schema.validate('string');
    const numberTest = schema.validate(1);
    const booleanTest = schema.validate(true);

    expect(nullTest.error).toBeDefined();
    expect(stringTest.error).toBeDefined();
    expect(numberTest.error).toBeDefined();
    expect(booleanTest.error).toBeUndefined();
  });

  it('null', () => {
    const schema = schemaToJoi({
      path: './tests/fixtures/index.ts',
      tsconfig: './tsconfig.json',
      type: 'Null',
    });

    const nullTest = schema.validate(null);
    const stringTest = schema.validate('string');
    const numberTest = schema.validate(1);
    const booleanTest = schema.validate(true);

    expect(nullTest.error).toBeUndefined();
    expect(stringTest.error).toBeDefined();
    expect(numberTest.error).toBeDefined();
    expect(booleanTest.error).toBeDefined();
  });
});
