const stringMethods = require('./stringMethods');
const calculatorMethods = require('./caculatorMethods');

describe('String Tests', () => {
  test('String Length', () => {
    expect(stringMethods.stringLength('hello')).toBe(5);
  });

  test('String no longer enough', () => {
    expect(stringMethods.stringLength('')).toBe('String no longer enough');
  });

  test('String to big', () => {
    expect(stringMethods.stringLength('string too longer')).toBe('String too big');
  });

  test('String Reverse', () => {
    expect(stringMethods.reverseString('string reverse')).toBe('esrever gnirts');
  });

  test('String Capitalize', () => {
    expect(stringMethods.capitalize('capitalize')).toBe('Capitalize');
  });
});

describe('Calculator Tests', () => {
  test('Sum test 1', () => {
    expect(calculatorMethods.calculator.sum(1, 2)).toBe(3);
  });

  test('Sum test 2', () => {
    expect(calculatorMethods.calculator.sum(2, 2)).toBe(4);
  });

  test('Sum test 3', () => {
    expect(calculatorMethods.calculator.sum(2, 3)).toBe(5);
  });

  test('Substract test 1', () => {
    expect(calculatorMethods.calculator.substract(2, 1)).toBe(1);
  });

  test('Substract test 2', () => {
    expect(calculatorMethods.calculator.substract(2, 2)).toBe(0);
  });

  test('Substract test 3', () => {
    expect(calculatorMethods.calculator.substract(5, 3)).toBe(2);
  });

  test('Multiply test 1', () => {
    expect(calculatorMethods.calculator.multiply(2, 1)).toBe(2);
  });

  test('Multiply test 2', () => {
    expect(calculatorMethods.calculator.multiply(2, 2)).toBe(4);
  });

  test('Multiply test 3', () => {
    expect(calculatorMethods.calculator.multiply(2, 3)).toBe(6);
  });

  test('Divide test 1', () => {
    expect(calculatorMethods.calculator.divide(2, 1)).toBe(2);
  });

  test('Divide test 2', () => {
    expect(calculatorMethods.calculator.divide(2, 2)).toBe(1);
  });

  test('Divide test 3', () => {
    expect(calculatorMethods.calculator.divide(9, 3)).toBe(3);
  });
});