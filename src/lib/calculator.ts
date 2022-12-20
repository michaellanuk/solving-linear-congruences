class Calculator {
  constructor() {}

  /**
   * Returns the highest common factor of two integers
   */
  hcf = ({ x, y }: { x: number; y: number; }): number => {
    if (y === 0) return x;
    return this.hcf({x: y, y: x % y });
  }

  /**
   * Returns whether two integers are coprime
   */
  areCoprime = ({ a, n }: { a: number; n: number; }): boolean => this.hcf({ x: a, y: n }) === 1;

  /**
   * Returns whether a solution set exists for a given linear congruence
   */
  solutionsDoNotExist = ({ a, b, n }: { a: number; b: number; n: number; }): boolean =>
    (!this.areCoprime({ a, n }) && b % this.hcf({ x: a, y: n }) !== 0)
    || (b === 0 && n === 0)
    || n == 1;

  /**
   * Solves the linear congruence
   */
  solve = ({ a, b, n }: { a: number; b: number; n: number; }): Array<number> | null => {
    if (b < 0) {
      // JavaScript's % operator provides negative values for negative numbers for b
      b = ((b % n) + n) % n;
    }

    if (b >= n) {
      // get least residue to prevent infinite loop
      b %= n;
    }

    if (this.solutionsDoNotExist({ a, b, n }) || [a, n].some((v) => v < 0)) {
      return null;
    }

    if (b === 0) {
      return [b];
    }

    let x = 1;
    const solutions: Array<number> = [];
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
