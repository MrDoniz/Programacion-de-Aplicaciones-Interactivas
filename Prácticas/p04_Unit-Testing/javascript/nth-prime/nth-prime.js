/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 11 2022
 * @desc Isbn Verifier 
 *       Given a number n, determine what the nth prime is. By listing the
 *       first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that th
 *       6th prime is 13. If your language provides methods in the standard
 *       library to deal with prime numbers, pretend they don't exist and
 *       implement them yourself.
 * @see {@link https://exercism.org/tracks/javascript/exercises/nth-prime}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */


/**
 * @description Given a number, determine what the nth prime is.
 * @param {Number} number - Number to be tested
 * @returns True if a number is prime, false if not.
 */
 function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
/**
 * @description Given a number, determine what the nth prime is.
 * @param {Number} number - Number to be tested
 * @returns {Number} - The nth prime
 */
export const prime = (number) => {
  if ((number === 0)) {
    throw new Error('there is no zeroth prime');
  }
  let iterator = 0;
  let numbers = 2;
  while (true) {
    if (isPrime(numbers)) {
      iterator++;
    }
    if (iterator === number) {
      return numbers;
    }
    numbers++;
  }
};
