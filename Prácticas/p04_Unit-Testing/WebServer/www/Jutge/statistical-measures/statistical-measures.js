/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 12 2022
 * @desc Statistical measures
 *       Write a program that reads non-empty sequences of real Numbers and,
 *       for each sequence, prints its minimum, its maximum and its average.
 *       Input consists of a natural Number n, followed by n sequences. Each
 *       sequence begins with the Number of elements m > 0, followed by m real
 *       Numbers.For every sequence, print in a line and with four digits after
 *       the decimal point its minimum, its maximum and its average.
 * @see {@link https://jutge.org/problems/P171799}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

module.exports = medidasStadisticas;

/**
 * @param {Number} vector - Vector de números
 * @return {Number} - Minimo de un vector
 * @description Calcula el minimo de un vector
 */
const minimo = function(vector) {
  let minimo = vector[0];
  for (let i = 1; i < vector.length; i++) {
    if (vector[i] < minimo) {
      minimo = vector[i];
    }
  }
  return minimo;
};

/**
 * @param {Number} vector - Vector de números
 * @return {Number} - Maximo de un vector
 * @description Calcula el maximo de un vector
 */
function maximo(vector) {
  let maximo = vector[0];
  for (let i = 1; i < vector.length; i++) {
    if (vector[i] > maximo) {
      maximo = vector[i];
    }
  }
  return maximo;
};

/**
 * @param {Number} vector - Vector de números
 * @return {Number} - Promedio de un vector
 * @description Calcula el promedio de un vector
 */
function promedio(vector) {
  let suma = 0;
  for (let i = 0; i < vector.length; i++) {
    suma += vector[i];
  }
  return (suma / vector.length);
};

/** @description - Calcula las medidas estadísticas de un vector
  * @param {Number} vector - Vector de números
  * @return {Number} - Minimo de un vector
  * @return {Number} - Maximo de un vector
  * @return {Number} - Promedio de un vector
**/
function medidasStadisticas(vector) {
  const valor1 = minimo(vector);
  const valor2 = maximo(vector);
  const valor3 = promedio(vector);
  return {valor1, valor2, valor3};
};

/**
 * @description - Lee los números introducidos por el usuario
 * @return {Array} - Vector con los números introducidos por el usuario
**/
const procesarEntrada = function() {
  const argumentos = process.argv.slice(1);
  const vectorArgumentos = argumentos.map(Number);
  vectorArgumentos.shift();
  vectorArgumentos.shift();
  return vectorArgumentos;
};

/**
 * @description Programa principal
**/
function main() {
  let valor1; let valor2; let valor3;
  const vectorEntrada = procesarEntrada();
  if (vectorEntrada !== undefined) {
    valor1, valor2, valor3 = medidasStadisticas(vectorEntrada);
    console.log(valor1, valor2, valor3);
  }
}

if (require.main === module) {
  main();
}
