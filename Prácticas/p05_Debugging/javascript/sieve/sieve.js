/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 20 2022
 * @desc Counting frequences
 *       Use the Sieve of Eratosthenes to find all the primes from 2 up to a
 *       given number. The Sieve of Eratosthenes is a simple, ancient algorithm
 *       for finding all prime numbers up to any given limit. It does so by
 *       iteratively marking as composite (i.e. not prime) the multiples of
 *       each prime, starting with the multiples of 2. It does not use any
 *       division or remainder operation.
 * @see {@link https://exercism.org/tracks/javascript/exercises/sieve}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */


/**
 * @description - Lee los números introducidos por el usuario
 * @return {Array} - Vector con los números introducidos por el usuario
**/
export const primes = (n) => {
  let result = [];
  for (let i = 2; i < n+1; i++) result[i] = true;

  for (let i = 2; i*i <= n; i++) {
    if (result[i] === true) {
      for (let y = i*2; y <= n; y += i) {
        result[y] = false;
      }
    }
  }
  return result.reduce((r, x, i) => {
    if (x) r.push(i);
    return r;
  }, []);
};