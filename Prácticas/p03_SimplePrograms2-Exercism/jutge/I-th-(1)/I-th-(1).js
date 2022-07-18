/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 07 2022
 * @desc I-th (1)
 *       Write a program that, given an integer number i and a sequence of natural numbers 
 *       x1, …, xn, prints xi. Input begins with a number i, followed by the sequence x1, …, 
 *       xn ended with −1. It is known that 1 ≤ i ≤ n. Print the content of the position i 
 *       as it is shown in the examples.
 * @see {@link https://jutge.org/problems/P61634}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

 'use strict';

/**
 * @param {number} number - Número de términos de la serie
 * @returns {number} - El valor de la posición
 * @description Calcula la posición de un número
 */
const posicion = function(numeros) {
  let posicion = numeros[0];
  for (let i = 1; i <= numeros.length; i++)
    if (posicion == numeros[i])
      return i;
}

function main() {
  const argumentos = process.argv.slice(1);
  const numeros = argumentos.map(Number);
  numeros.shift();
  // si el ultimo numero no es -1, error
  if (numeros[numeros.length - 1] != -1)
    console.log("Error");
  else
    console.log("At the position", numeros[0], "there is a(n)", posicion(numeros) + ".");
}

if (require.main === module) {
  main();
}