import schemaToJoi from '../src';

describe('Mixed values', () => {
  it('string or number', () => {
    const schema = schemaToJoi(
      './tests/fixtures/index.ts',
      './tsconfig.json',
      'StringOrNumber',
    );

    const nullTest = schema.validate(null);
    const stringTest = schema.validate('string');
    const numberTest = schema.validate(1);
    const booleanTest = schema.validate(true);

    expect(nullTest.error).toBeDefined();
    expect(stringTest.error).toBeUndefined();
    expect(numberTest.error).toBeUndefined();
    expect(booleanTest.error).toBeDefined();
  });

  it('string conditions', () => {
    const schema = schemaToJoi(
      './tests/fixtures/index.ts',
      './tsconfig.json',
      'StringCondition',
    );

    const nullTest = schema.validate(null);
    const stringTest = schema.validate('string');
    const numberTest = schema.validate(1);
    const booleanTest = schema.validate(true);
    const correct1 = schema.validate('hello');
    const correct2 = schema.validate('world');

    expect(nullTest.error).toBeDefined();
    expect(stringTest.error).toBeDefined();
    expect(numberTest.error).toBeDefined();
    expect(booleanTest.error).toBeDefined();
    expect(correct1.error).toBeUndefined();
    expect(correct2.error).toBeUndefined();
  });

  it('test enum', () => {
    const schema = schemaToJoi(
      './tests/fixtures/index.ts',
      './tsconfig.json',
      'TestEnum',
    );

    const nullTest = schema.validate(null);
    const stringTest = schema.validate('2');
    const numberTest = schema.validate(1);
    const booleanTest = schema.validate(true);
    const correct1 = schema.validate('hello');
    const correct2 = schema.validate('world');
    const correctNumber = schema.validate(2);

    expect(nullTest.error).toBeDefined();
    expect(stringTest.error).toBeDefined();
    expect(numberTest.error).toBeDefined();
    expect(booleanTest.error).toBeDefined();
    expect(correct1.error).toBeUndefined();
    expect(correct2.error).toBeUndefined();
    expect(correctNumber.error).toBeUndefined();
  });

  it('string or number or false', () => {
    const schema = schemaToJoi(
      './tests/fixtures/index.ts',
      './tsconfig.json',
      'StringOrNumberOrFalse',
    );

    const nullTest = schema.validate(null);
    const stringTest = schema.validate('2');
    const numberTest = schema.validate(1);
    const booleanTest = schema.validate(true);
    const falseTest = schema.validate(false);
    const correct1 = schema.validate('hello');
    const correct2 = schema.validate('world');
    const correctNumber = schema.validate(2);

    expect(nullTest.error).toBeDefined();
    expect(stringTest.error).toBeUndefined();
    expect(numberTest.error).toBeUndefined();
    expect(booleanTest.error).toBeDefined();
    expect(falseTest.error).toBeUndefined();
    expect(correct1.error).toBeUndefined();
    expect(correct2.error).toBeUndefined();
    expect(correctNumber.error).toBeUndefined();
  });
});
