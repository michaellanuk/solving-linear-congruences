class Calculator {
  constructor() {}

  /**
   * Returns the highest common factor of two integers
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  hcf = (x, y) => {
    if (y === 0) return x;
    return this.hcf(y, x % y);
  }

  /**
   * Returns whether two integers are coprime
   * @param {number} a
   * @param {number} n
   * @returns {Boolean}
   */
  areCoprime = (a, n) => this.hcf(a, n) === 1;

  /**
   * Returns whether a solution set exists for a given linear congruence
   * @param { { a: number, b: number, n: number } } params
   * @returns {Boolean}
   */
  solutionsDoNotExist = ({ a, b, n }) =>
    (!this.areCoprime(a, n) && b % this.hcf(a, n) !== 0)
    || (b === 0 && n === 0)
    || n == 1;

  /**
   * Solves the linear congruence
   * @param { { a: number, b: number, n: number } } params
   * @returns {Number[] | null}
   */
  solve = ({ a, b, n }) => {
    if (b >= n) {
      // get least residue to prevent infinite loop
      b %= n;
    }

    if (this.solutionsDoNotExist({ a, b, n }) || [a, b, n].some((v) => v < 0)) {
      return null;
    }

    if (b === 0) {
      return [b];
    }

    let x = 1;
    const solutions = [];
    while (x < n) {
      if ((a * x) % n === b) {
        solutions.push(x);
      }

      x++;
    }

    return solutions;
  }
}

export default Calculator;
