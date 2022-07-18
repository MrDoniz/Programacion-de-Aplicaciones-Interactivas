/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 21 2022
 * @desc Strain
 *       Implement the keep and discard operation on collections. Given a
 *       collection and a predicate on the collection's elements, keep returns
 *       a new collection containing those elements where the predicate is
 *       true, while discard returns a new collection containing those elements
 *       where the predicate is false.
 * @see {@link https://exercism.org/tracks/javascript/exercises/strain}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */


/**
 * @description Function that checks if a number is a prime number
 * @param {Number} number - Number to be checked
 * @param {Function} predicate - Function to be applied to each element
 * @returns {Array} Array of prime factors
 */
export const keep = (collection, predicate) => {
  var result = [];
  collection.forEach((e) => {
    if(predicate(e)) {
      result.push(e);
    }
  });
  return result;
};

/**
 * @description Function that checks if a number is a prime number
 * @param {Number} number - Number to be checked
 * @returns {Array} Array of prime factors
 */
export const discard = (collection, predicate) => {
  var result = [];
  collection.forEach((e) => {
    if(!predicate(e)) {
      result.push(e);
    }
  });
  return result;
};