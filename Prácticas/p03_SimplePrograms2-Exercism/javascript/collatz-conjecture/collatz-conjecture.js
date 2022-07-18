//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * @param {number} n - the number to check
 * @param {number} [count=0] - the number of steps taken
 * @returns {number} the number of steps taken
 * @description The Collatz Conjecture is a conjecture in mathematics that concerns a sequence defined as:
 */
export const steps = (n, count = 0) => {
  if (n <= 0) throw "Only positive numbers are allowed";
  if (n === 1) return count;
  return steps(n % 2 === 0 ? n / 2 : n * 3 + 1, count + 1);
};
