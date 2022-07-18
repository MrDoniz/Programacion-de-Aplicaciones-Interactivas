/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 07 2022
 * @desc Reverse of sequences
 *       Write a program that reads sequences of integer numbers, and prints each one reversing 
 *       the order of its elements. Input consists of several sequences. Each sequence consists 
 *       of a natural number n, followed by n integer numbers. Print each sequence in reverse 
 *       order in a line.
 * @see {@link https://jutge.org/problems/P97969}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

 'use strict';

/**
 * @param {number} vector - Vector de números
 * @returns {number} - Vector invertido
 * @description Invertir un vector
 */
const inverso = function(vector) {
  let vectorInvertido = [];
  for (let i = vector.length - 1; i >= 0; i--)
    vectorInvertido.push(vector[i]);
  return vectorInvertido;
}

function main() {
  // n numeros por argumento en un vector
  const argumentos = process.argv.slice(1);
  let vector = argumentos.map(Number);
  // quitar el primer valor
  vector.shift();
  // Si el vector está vacío, no se puede invertir
  if (vector.length == 0)
    console.log("");
  else
    console.log(inverso(vector));
}

if (require.main === module) {
  main();
}