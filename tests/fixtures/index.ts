export type String = string;
export type Number = number;
export type Boolean = boolean;
export type Null = null;

export type StringValue = 'Hello World !';
export type NumberValue = 42;
export type BooleanValue = false;

export type StringOrNumber = string | number;
export type StringCondition = 'hello' | 'world';
export type StringOrNumberOrFalse = string | number | false;
export enum TestEnum {
  Hello = 'hello',
  World = 'world',
  Two = 2,
}

export type StringArray = string[];
export type NumberArray = number[];
export type StringOrNumberArray = (string | number)[];
export type DoubleArray = StringOrNumberArray[];

export type ObjectTest = {
  haha: 'oui' | 'non';
  toto: {
    isHappy: boolean;
    isString: string;
    isNumber?: number;
    tata: {
      isRecursive: true;
    }
  };
  optional?: string;
  test: TestEnum[];
};
