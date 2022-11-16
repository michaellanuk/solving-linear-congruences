import Calculator from '../calculator.js';

const calculator = new Calculator();

describe('hcf', () => {
  test('should correctly return highest common factor of two integers', () => {
    expect(calculator.hcf(12, 9)).toEqual(3);
    expect(calculator.hcf(12, 5)).toEqual(1);
    expect(calculator.hcf(12, 6)).toEqual(6);
    expect(calculator.hcf(12, 10)).toEqual(2);
    expect(calculator.hcf(12, 12)).toEqual(12);
  });
});

describe('coprime', () => {
  test('should correctly determine whether two integers are coprime', () => {
    expect(calculator.areCoprime(10, 7)).toBeTruthy();
    expect(calculator.areCoprime(3, 2)).toBeTruthy();
    expect(calculator.areCoprime(12, 5)).toBeTruthy();
    expect(calculator.areCoprime(88, 15)).toBeTruthy();
    expect(calculator.areCoprime(34, 3)).toBeTruthy();

    expect(calculator.areCoprime(21, 7)).toBeFalsy();
    expect(calculator.areCoprime(25, 5)).toBeFalsy();
    expect(calculator.areCoprime(100, 10)).toBeFalsy();
    expect(calculator.areCoprime(12, 10)).toBeFalsy();
    expect(calculator.areCoprime(7, 7)).toBeFalsy();
  });
});

describe('solutionsDoNotExist', () => {
  test('should return false when a and n are coprime and b does not divide hcf(a, n)', () => {
    expect(calculator.solutionsDoNotExist({ a: 5, b: 2, n: 10 })).toBeTruthy();
    expect(calculator.solutionsDoNotExist({ a: 2, b: 1, n: 6 })).toBeTruthy();
    expect(calculator.solutionsDoNotExist({ a: 3, b: 8, n: 9 })).toBeTruthy();

    expect(calculator.solutionsDoNotExist({ a: 4, b: 2, n: 10 })).toBeFalsy();
    expect(calculator.solutionsDoNotExist({ a: 2, b: 1, n: 5 })).toBeFalsy();
    expect(calculator.solutionsDoNotExist({ a: 3, b: 6, n: 9 })).toBeFalsy();
  });
});

describe('solve', () => {
  test('should solve for x', () => {
    expect(calculator.solve({ a: 3, b: 2, n: 5 })).toEqual(4);
  });
});
