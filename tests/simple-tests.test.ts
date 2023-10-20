import schemaToJoi from '../src';

describe('Simple types', () => {
  it('string', () => {
    const schema = schemaToJoi(
      './tests/fixtures/index.ts',
      './tsconfig.json',
      'String',
    );

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
    const schema = schemaToJoi(
      './tests/fixtures/index.ts',
      './tsconfig.json',
      'Number',
    );

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
    const schema = schemaToJoi(
      './tests/fixtures/index.ts',
      './tsconfig.json',
      'Boolean',
    );

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
    const schema = schemaToJoi(
      './tests/fixtures/index.ts',
      './tsconfig.json',
      'Null',
    );

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
