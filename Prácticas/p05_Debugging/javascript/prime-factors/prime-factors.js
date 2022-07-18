/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 21 2022
 * @desc Prime Factors
 *       Compute the prime factors of a given natural number.A prime number is
 *       only evenly divisible by itself and 1.Note that 1 is not a prime
 *       number.Our successful divisors in that computation represent the list
 *       of prime factors of 60: 2, 2, 3, and 5.
 * @see {@link https://exercism.org/tracks/javascript/exercises/prime-factors}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

/**
 * Function that computes the prime factors of a given natural number.
 * @param {Number} number - The natural number to compute the prime factors.
 * @returns {Array} - The list of prime factors of the given natural number.
 */
 export const primeFactors = (number) => {
  let primeFactors = [];
  let remainder = number;
  for (let i = 2; i <= remainder; i++) {
    while((remainder % i) === 0) {
      primeFactors.push(i);
      remainder /= i;
    }
  }
  return primeFactors;
};
