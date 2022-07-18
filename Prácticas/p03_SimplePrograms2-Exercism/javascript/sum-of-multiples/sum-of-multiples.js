/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 09 2022
 * @desc Sum Of Multiples
Sum Of Multiples 
 *       Given a number, find the sum of all the unique multiples of particular numbers up 
 *       to but not including that number. If we list all the natural numbers below 20 that 
 *       are multiples of 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18. The sum of these 
 *       multiples is 78.
 * @see {@link https://exercism.org/tracks/javascript/exercises/isbn-verifier}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

/**
 * @description Función que devuelve la suma de los múltiplos de un número
 * @param {number} factores - Número con los factores
 * @param {number} limite - Número con el límite
 * @returns {number} - La suma de los múltiplos
 */
 export const sum = (factores, limite) => {
  console.log(factores, limite);
  let suma = 0;
  for (let valor =0; valor < limite; valor++) {
    for (let factor of factores) {
      if (valor % factor === 0) {
        suma += valor;
        break;
      }
    }
  }
  return suma;
};
