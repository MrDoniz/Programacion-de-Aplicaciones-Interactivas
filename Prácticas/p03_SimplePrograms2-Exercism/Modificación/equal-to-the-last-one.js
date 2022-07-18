/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 09 2022
 * @desc Equal to the last one 
 *       Write a program that reads a non-empty sequence of integer numbers, and tells how 
 *       many of them are equal to the last one.Input consists of a natural number n> 0, 
 *       followed by n integer numbers.Print the number of elements that are equal to the 
 *       last one, this one excluded.
 * @see {@link https://jutge.org/problems/P14130_en}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

 'use strict';

/**
 * @param {number} numeros - Vector con numeros
 * @returns {number} - El número de veces que está repetido el último número
 * @description Función que devuelve el número de veces que está repetido el último número
 */
function igualAlUltimo(numeros) {
  let contador = -1;
  let ultimo = numeros[numeros.length - 1];
  // bucle que recorre el vector con for of
  for (let numero of numeros) {
    if (numero === ultimo)
      contador++;
  }
  if (contador === -1)
    return 0;
  else
    return contador;
}

function main() {
  // Se introduce una serie de números
  const argumentos = process.argv.slice(1);
  let vector = argumentos.map(Number);
  // Se quita el primer valor
  vector.shift();
  vector.shift();
  // Se comprueba si el vector está vacío
  if (vector.length === 0)
    console.log("");
  else
    console.log(igualAlUltimo(vector));
}

if (require.main === module) {
  main();
}