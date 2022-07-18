/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 21 2022
 * @desc Armstrong Numbers
 *       An Armstrong number is a number that is the sum of its own digits each
 *       raised to the power of the number of digits.Write some code to
 *       determine whether a number is an Armstrong number.
 * @see {@link https://exercism.org/tracks/javascript/exercises/armstrong-numbers}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

/**
 * @description Get the number of digits of a natural number
 * @param {Number} number - The natural number to get the number of digits.
 * @return {Number} - The number of digits of the given natural number.
 */
export const getNumberDigits = (number) => {
  if (number < 0) throw new Error("Number must be a greater than 0");
  return (Math.log(number) * Math.LOG10E + 1) | 0;
};
/**
 * @description Check if a number is an armstrong number
 * @param {Number} number - The number to check if it is an armstrong number.
 * @return {Number} - The number of digits of the given natural number.
 */
export const isArmstrongNumber = (number) => {
  const digitsCount = getNumberDigits(number);
  let currentNumber = number;
  let armstrongSum = 0;
  while (currentNumber !== 0) {
    armstrongSum += Math.pow(currentNumber % 10, digitsCount);
    currentNumber = Math.floor(currentNumber / 10);
  }
  return armstrongSum === number;
};