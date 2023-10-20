import schemaToJoi from '../src';

describe('Specific values', () => {
  it('string value', () => {
    const schema = schemaToJoi(
      './tests/fixtures/index.ts',
      './tsconfig.json',
      'StringValue',
    );

    const nullTest = schema.validate(null);
    const stringTest = schema.validate('string');
    const numberTest = schema.validate(1);
    const booleanTest = schema.validate(true);
    const helloWorld = schema.validate('Hello World !');

    expect(nullTest.error).toBeDefined();
    expect(stringTest.error).toBeDefined();
    expect(numberTest.error).toBeDefined();
    expect(booleanTest.error).toBeDefined();
    expect(helloWorld.error).toBeUndefined();
  });

  it('number value', () => {
    const schema = schemaToJoi(
      './tests/fixtures/index.ts',
      './tsconfig.json',
      'NumberValue',
    );

    const nullTest = schema.validate(null);
    const stringTest = schema.validate('string');
    const numberTest = schema.validate(1);
    const booleanTest = schema.validate(true);
    const correct = schema.validate(42);

    expect(nullTest.error).toBeDefined();
    expect(stringTest.error).toBeDefined();
    expect(numberTest.error).toBeDefined();
    expect(booleanTest.error).toBeDefined();
    expect(correct.error).toBeUndefined();
  });

  it('boolean value', () => {
    const schema = schemaToJoi(
      './tests/fixtures/index.ts',
      './tsconfig.json',
      'BooleanValue',
    );

    const nullTest = schema.validate(null);
    const stringTest = schema.validate('string');
    const numberTest = schema.validate(1);
    const booleanTest = schema.validate(true);
    const correct = schema.validate(false);

    expect(nullTest.error).toBeDefined();
    expect(stringTest.error).toBeDefined();
    expect(numberTest.error).toBeDefined();
    expect(booleanTest.error).toBeDefined();
    expect(correct.error).toBeUndefined();
  });
});
