import fs from 'fs';
import schemaToJoi from '../src';

describe('write file', () => {
  const filePath = './tests/fixtures/StringValue.json';

  afterEach(() => {
    fs.unlinkSync(filePath);
  });

  it('check', () => {
    schemaToJoi({
      path: './tests/fixtures/index.ts',
      tsconfig: './tsconfig.json',
      type: 'StringValue',
    }, true);

    expect(fs.existsSync(filePath)).toBe(true);
  });
});
