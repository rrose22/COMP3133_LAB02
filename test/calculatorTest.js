const chai = require('chai').expect
const calculator = require('../calculator.js');

const expect = chai.expect;

describe('Calculator Tests', () => {
  it('should add two numbers - PASS', () => {
    expect(calculator.add(2, 3)).to.equal(5);
  });
  it('should add two numbers - FAIL', () => {
    expect(calculator.add(3, 3)).to.equal(5);
  });
  it('should multiply two numbers - PASS', () => {
    expect(calculator.mul(2, 3)).to.equal(6);
  });
  it('should multiply two numbers - FAIL', () => {
    expect(calculator.mul(3, 3)).to.equal(6);
  });
  it('should divide two numbers - PASS', () => {
    expect(calculator.div(6, 2)).to.equal(3);
  });
  it('should divide two numbers - FAIL', () => {
    expect(calculator.div(12, 2)).to.equal(3);
  });
  it('should subtract two numbers - PASS', () => {
    expect(calculator.sub(5, 2)).to.equal(3);
  });
  it('should subtract two numbers - FAIL', () => {
    expect(calculator.sub(21, 2)).to.equal(3);
  });
});
