/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 11 2022
 * @desc Perfect Numbers
 *       Determine if a number is perfect, abundant, or deficient based on
 *       Nicomachus' (60 - 120 CE) classification scheme for positive integers.
 *       The Greek mathematician Nicomachus devised a classification scheme for
 *       positive integers, identifying each as belonging uniquely to the
 *       categories of perfect, abundant, or deficient based on their aliquot
 *       sum. The aliquot sum is defined as the sum of the factors of a number
 *       not including the number itself. For example, the aliquot sum of 15 is
 *       (1 + 3 + 5) = 9
 * @see {@link https://exercism.org/tracks/javascript/exercises/perfect-numbers}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

/**
 * @description Given a number, determine if it is perfect, abundant, or
 * @param {Number} num - Number to be tested
 * @returns {String} - String with the classification of the number
 */

export const classify = (num) => {
  let aliquotSum = 0;
  for (let i = 1; i < num; i++) 
    if (num % i === 0) 
      aliquotSum += i;
  if (num <= 0) 
    throw new Error('Classification is only possible for natural numbers.');
  if (aliquotSum == num)
    return 'perfect';
  if (aliquotSum < num) 
    return 'deficient';
  if (aliquotSum > num)
    return 'abundant';
};
