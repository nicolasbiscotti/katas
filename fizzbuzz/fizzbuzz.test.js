'use strict';

const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  
  it('should return "2" when the number 2 is passed', () => {
    expect(fizzbuzz(2)).toEqual("2");
  });
  
  it('should return "Fizz" when the number 3 is passed', () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  
  it('should return "Buzz" when the number 5 is passed', () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  
  it('should return "Fizz" when the number 6 is passed', () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });
  
  it('should return "Buzz" when the number 10 is passed', () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });
  
  it('should return "FizzBuzz" when the number 15 is passed', () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });
});
