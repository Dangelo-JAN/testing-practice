class Calculator {
  sum = (num1, num2) => num1 + num2;

  substract = (num1, num2) => num1 - num2;

  multiply = (num1, num2) => num1 * num2;

  divide = (num1, num2) => num1 / num2;
}

const calculator = new Calculator();

module.exports = { calculator };