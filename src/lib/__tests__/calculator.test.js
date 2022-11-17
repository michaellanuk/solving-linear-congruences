import Calculator from '../calculator.js';

const calculator = new Calculator();

describe('hcf', () => {
  test('should correctly return highest common factor of two integers', () => {
    expect(calculator.hcf({ x: 12, y: 9 })).toEqual(3);
    expect(calculator.hcf({ x: 12, y: 5 })).toEqual(1);
    expect(calculator.hcf({ x: 12, y: 6 })).toEqual(6);
    expect(calculator.hcf({ x: 12, y: 10 })).toEqual(2);
    expect(calculator.hcf({ x: 12, y: 12 })).toEqual(12);
  });
});

describe('coprime', () => {
  const coprimeIntegers = [
    { a: 10, n: 7 },
    { a: 3, n: 2 },
    { a: 12, n: 5 },
    { a: 88, n: 15 },
    { a: 34, n: 3 },
  ];

  test.each(coprimeIntegers)('should return true when hcf(a, n) === 1', (coprimes) => {
    expect(calculator.areCoprime({ ...coprimes })).toBeTruthy();
  });

  const nonCoprimeIntegers = [
    { a: 21, n: 7 },
    { a: 25, n: 5 },
    { a: 100, n: 10 },
    { a: 12, n: 10 },
    { a: 7, n: 7 },
  ];

  test.each(nonCoprimeIntegers)('should return false when hcf(a, n) > 1', (coprimes) => {
    expect(calculator.areCoprime({ ...coprimes })).toBeFalsy();
  });
});

describe('solutionsDoNotExist', () => {
  const inputsWithSolutions = [
    { a: 5, b: 2, n: 10 },
    { a: 2, b: 1, n: 6 },
    { a: 3, b: 8, n: 9 },
  ];

  test.each(inputsWithSolutions)('should return true when a and n are not coprime and b does not divide hcf(a, n)', (input) => {
    expect(calculator.solutionsDoNotExist({ ...input })).toBeTruthy();
  });

  const inputsWithoutSolutions = [
    { a: 4, b: 2, n: 10 },
    { a: 2, b: 1, n: 5 },
    { a: 3, b: 6, n: 9 },
  ];

  test.each(inputsWithoutSolutions)('should return false when a and n are coprime', (input) => {
    expect(calculator.solutionsDoNotExist({ ...input })).toBeFalsy();
  });

  const nonCoprimeWithSolutions = [
    { a: 2, b: 6, n: 10 },
    { a: 12, b: 9, n: 15 },
    { a: 12, b: 8, n: 16 },
  ];

  test.each(nonCoprimeWithSolutions)('should return false when a and n are not coprime but b does divide hcf(a, n)', (input) => {
    expect(calculator.solutionsDoNotExist({ ...input })).toBeFalsy();
  });
});

describe('solve', () => {
  test('should solve for x', () => {
    expect(calculator.solve({ a: 3, b: 2, n: 5 })).toEqual([4]);
    expect(calculator.solve({ a: 5, b: 10, n: 20 })).toEqual([2, 6, 10, 14, 18]);
  });
});
