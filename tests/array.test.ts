import schemaToJoi from '../src';

describe('array', () => {
  it('string array', () => {
    const schema = schemaToJoi({
      path: './tests/fixtures/index.ts',
      tsconfig: './tsconfig.json',
      type: 'StringArray',
    });

    const stringTest = schema.validate('string');
    const numberTest = schema.validate(1);
    const numberArray = schema.validate([1, 2, 3]);
    const stringArray = schema.validate(['1', '2', '3']);

    expect(stringTest.error).toBeDefined();
    expect(numberTest.error).toBeDefined();
    expect(numberArray.error).toBeDefined();
    expect(stringArray.error).toBeUndefined();
  });

  it('number array', () => {
    const schema = schemaToJoi({
      path: './tests/fixtures/index.ts',
      tsconfig: './tsconfig.json',
      type: 'NumberArray',
    });

    const stringTest = schema.validate('string');
    const numberTest = schema.validate(1);
    const numberArray = schema.validate([1, 2, 3]);
    const stringArray = schema.validate(['1', '2', '3']);
    const mixedArray = schema.validate(['1', 1, '2']);

    expect(stringTest.error).toBeDefined();
    expect(numberTest.error).toBeDefined();
    expect(numberArray.error).toBeUndefined();
    expect(stringArray.error).toBeDefined();
    expect(mixedArray.error).toBeDefined();
  });

  it('number or string array', () => {
    const schema = schemaToJoi({
      path: './tests/fixtures/index.ts',
      tsconfig: './tsconfig.json',
      type: 'StringOrNumberArray',
    });

    const stringTest = schema.validate('string');
    const numberTest = schema.validate(1);
    const numberArray = schema.validate([1, 2, 3]);
    const stringArray = schema.validate(['1', '2', '3']);
    const mixedArray = schema.validate(['1', 1, '2']);
    const mixedBadArray = schema.validate(['1', 1, '2', false]);

    expect(stringTest.error).toBeDefined();
    expect(numberTest.error).toBeDefined();
    expect(numberArray.error).toBeUndefined();
    expect(stringArray.error).toBeUndefined();
    expect(mixedArray.error).toBeUndefined();
    expect(mixedBadArray.error).toBeDefined();
  });

  it('double array', () => {
    const schema = schemaToJoi({
      path: './tests/fixtures/index.ts',
      tsconfig: './tsconfig.json',
      type: 'DoubleArray',
    });

    const stringArray = schema.validate(['1', '2', '3']);
    const mixedArray = schema.validate(['1', 1, '2']);
    const mixedBadArray = schema.validate(['1', 1, '2', false]);
    const correctDoubleArray = schema.validate([['1', 2, '3'], [1, '2', '3']]);
    const badDoubleArray = schema.validate([['1', 2, true], [2]]);

    expect(stringArray.error).toBeDefined();
    expect(mixedArray.error).toBeDefined();
    expect(mixedBadArray.error).toBeDefined();
    expect(correctDoubleArray.error).toBeUndefined();
    expect(badDoubleArray.error).toBeDefined();
  });
});
