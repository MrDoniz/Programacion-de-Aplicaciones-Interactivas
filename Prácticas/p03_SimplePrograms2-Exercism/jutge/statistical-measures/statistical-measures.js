/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 07 2022
 * @desc Statistical measures
 *       Write a program that reads non-empty sequences of real numbers and, for each sequence, 
 *       prints its minimum, its maximum and its average. Input consists of a natural number n, 
 *       followed by n sequences. Each sequence begins with the number of elements m > 0, 
 *       followed by m real numbers. For every sequence, print in a line and with four digits 
 *       after the decimal point its minimum, its maximum and its average.
 * @see {@link https://jutge.org/problems/P17179_en9}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

 'use strict';

/**
 * @param {number} vector - Vector de números
 * @returns {number} - Minimo de un vector
 * @description Calcula el minimo de un vector
 */
const minimo = function(vector) {
  let minimo = vector[0];
  for (let i = 1; i < vector.length; i++)
    if (vector[i] < minimo)
      minimo = vector[i];
  return minimo.toFixed(4);
}

/**
 * @param {number} vector - Vector de números
 * @returns {number} - Maximo de un vector
 * @description Calcula el maximo de un vector
 */
function maximo(vector) {
  let maximo = vector[0];
  for (let i = 1; i < vector.length; i++)
    if (vector[i] > maximo)
      maximo = vector[i];
  return maximo.toFixed(4);
}

/**
 * @param {number} vector - Vector de números
 * @returns {number} - Promedio de un vector
 * @description Calcula el promedio de un vector
 */
function promedio(vector) {
  let suma = 0;
  for (let i = 0; i < vector.length; i++)
    suma += vector[i];
  return (suma / vector.length).toFixed(4);
}

function main() {
  // n numeros por argumento en un vector
  const argumentos = process.argv.slice(1);
  let vector = argumentos.map(Number);
  // quitar el primer valor
  vector.shift();
  vector.shift();
  // Si el vector está vacío, no se puede invertir
  if (vector.length == 0)
    console.log("");
  else
    console.log(minimo(vector), maximo(vector), promedio(vector));
}

if (require.main === module) {
  main();
}