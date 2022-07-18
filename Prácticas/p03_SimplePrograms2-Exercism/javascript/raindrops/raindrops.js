//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 * @param {*} number - the number to check
 * @returns {String}
 * @description A number is a prime number if it is greater than 1 and it is only evenly divisible by itself and 1.
 */
export const convert = (number) => {
  const pling = number % 3 === 0 ? "Pling" : "";
  const plang = number % 5 === 0 ? "Plang" : "";
  const plong = number % 7 === 0 ? "Plong" : "";
  return pling + plang + plong || `${number}`;
};
