/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 11 2022
 * @desc Sum Of Multiples
 *       Given a number, find the sum of all the unique multiples of particula
 *       numbers up to but not including that number. If we list all the
 *       natural numbers below 20 that are multiples of 3 or 5, we get 3, 5, 6,
 *       9, 10, 12, 15, and 18. The sum of these multiples is 78.
 * @see {@link https://exercism.org/tracks/javascript/exercises/sum-of-multiples}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

/**
 * @description  Given a number, find the sum of all the unique multiples of
 *  particula
 * @param {Array[Number]} valorPosible - Array of numbers to be used as divisors
 * @param {Number} valorMaximo - Number to be used as limit
 * @returns {Number} - Sum of all the unique multiples of particula numbers up to but not including that number
 */
 export const sum = (valorPosible, valorMaximo) => {
  let sumaMultiplos = 0;
  for (let i = 0; i < valorMaximo; i++) {
    for (let value of valorPosible) {
      if (i % value === 0) {
        sumaMultiplos += i;
        break;
      }
    }
  }
  return sumaMultiplos;
};
