const myFunctions = require('./index');

test('length of \"Hello!\" is equal to 6', () => {
  expect(myFunctions.stringLength('Hello!')).toStrictEqual(6);
});

test('length of \"\" throws error', () => {
  expect(() => myFunctions.stringLength('')).toThrow();
});

test('reverse string of \"Oklahoma\" is equal to \"amohalkO\"', () => {
  expect(myFunctions.reverseString('Oklahoma')).toStrictEqual('amohalkO');
});



describe('Calculator.add', () => {
  test('adds \'5\' + 6 throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.add('5', 6)).toThrow();
  });

  test('adds 5 + \'6\' throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.add(5, '6')).toThrow();
  });

  test('adds 5 + 6 is equal to 11', () => {
    const calculator = new myFunctions.Calculator();
    expect(calculator.add(5, 6)).toStrictEqual(11);
  });
});

describe('Calculator.substract', () => {
  test('substract \'8\' - 4 throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.substract('8', 4)).toThrow();
  });

  test('substract 8 - \'4\' throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.substract(8, '4')).toThrow();
  });

  test('substract 8 - 4 is equal to 4', () => {
    const calculator = new myFunctions.Calculator();
    expect(calculator.substract(8, 4)).toStrictEqual(4);
  });
});

describe('Calculator.multiply', () => {
  test('multiply \'8\' * 4 throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.multiply('8', 4)).toThrow();
  });

  test('multiply 8 * \'4\' throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.multiply(8, '4')).toThrow();
  });

  test('multiply 8 * 4 is equal to 32', () => {
    const calculator = new myFunctions.Calculator();
    expect(calculator.multiply(8, 4)).toStrictEqual(32);
  });
});

describe('Calculator.divide', () => {
  test('divide \'8\' / 4 throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.divide('8', 4)).toThrow();
  });

  test('divide 8 * \'4\' throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.divide(8, '4')).toThrow();
  });

  test('divide 8 * 4 is equal to 32', () => {
    const calculator = new myFunctions.Calculator();
    expect(calculator.divide(8, 4)).toStrictEqual(2);
  });
});

describe('Capitalize test', () => {
  test('Capitalize (1500)  throw error', () => {
    expect(() => myFunctions.capitalize(1500)).toThrow();
})
  test('Capitalize (\'always\' is equal to \'Always\'', () => {
    expect(myFunctions.capitalize('always')).toStrictEqual('Always');
  });
});