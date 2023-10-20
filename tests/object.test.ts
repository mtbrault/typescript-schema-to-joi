import schemaToJoi from '../src';

describe('objects', () => {
  it('recursive object', () => {
    const schema = schemaToJoi({
      path: './tests/fixtures/index.ts',
      tsconfig: './tsconfig.json',
      type: 'ObjectTest',
    });

    const correctObject = {
      haha: 'oui',
      toto: {
        isHappy: false,
        isString: 'string',
        tata: {
          isRecursive: true,
        },
      },
      optional: 'test',
      test: [2, 'hello'],
    };

    const incorrect1 = {
      ...correctObject,
      haha: 'toto',
    };

    const incorrect2 = {
      ...correctObject,
      test: [true, 'hello', 'zizi'],
    };

    const incorrect3 = {
      ...correctObject,
      toto: {
        isHappy: false,
        isNumber: 1,
        tata: {
          isRecursive: true,
        },
      },
    };

    const correctTest = schema.validate(correctObject);
    const incorrectTest1 = schema.validate(incorrect1);
    const incorrectTest2 = schema.validate(incorrect2);
    const incorrectTest3 = schema.validate(incorrect3);

    expect(correctTest.error).toBeUndefined();
    expect(incorrectTest1.error).toBeDefined();
    expect(incorrectTest2.error).toBeDefined();
    expect(incorrectTest3.error).toBeDefined();
  });
});
