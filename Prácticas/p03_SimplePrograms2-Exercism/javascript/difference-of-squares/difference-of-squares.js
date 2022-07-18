//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class Squares {
  /**
   * @param {number} num - the number to check
   * @description The Difference of Squares is the sum of the squares of the first ten natural numbers and the square of the sum.
   */
  constructor(num) {
    this.num = num;
  }
  /**
   * @description The sum of the squares of the first ten natural numbers is,
   */
  get sumOfSquares() {
    return (this.num * (this.num + 1) * (2 * this.num + 1))/6;
  }
  /**
   * @description The square of the sum of the first ten natural numbers is,
   */
  get squareOfSum() {
    return Math.pow((this.num * (this.num + 1)) / 2, 2);
  }
  /**
   * @description The difference of the sum of the squares of the first ten natural numbers and the square of the sum is,
   */
  get difference() {
    return Math.abs(this.squareOfSum - this.sumOfSquares);
  }
}
