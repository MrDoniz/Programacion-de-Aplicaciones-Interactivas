//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class Triangle {
  /**
   * 
   * @param  {...any} sides - the sides of the triangle
   * @description The constructor for the Triangle class.
   */
  constructor(...sides) {
    this.sides = sides
    const [a, b, c] = this.sides
    this.conditions = [
      this.sides.every(side => side > 0),
      a + b > c,
      a + c > b,
      b + c > a
    ]
  }
  /**
   * @description Equilateral means that all three sides are equal.
   * @return {boolean} - true if the triangle is scalene, false otherwise
   */
  get isEquilateral() {
    if(!this.conditions.includes(false)){
      if(this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2]){
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  /**
   * @description Isosceles means that two sides are equal.
   * @returns {boolean} - true if the triangle is isosceles, false otherwise
   */
  get isIsosceles() {
    if(!this.conditions.includes(false)){
      if(this.sides[0] == this.sides[1] || this.sides[1] == this.sides[2] || this.sides[0] == this.sides[2]){
        return true
      } else {
        return false
    }
  } else {
    return false
  }
  }
  /**
   * @description Scalene means that all three sides are different.
   * @returns {boolean} - true if the triangle is scalene, false otherwise
   */
  get isScalene() {
    if(!this.conditions.includes(false)){
      if(this.sides[0] !== this.sides[1] && this.sides[1] !== this.sides[2] && this.sides[0] !== this.sides[2]){
        return true
      } else {
        return false
    }
  } else {
    return false
  }
  }
}
