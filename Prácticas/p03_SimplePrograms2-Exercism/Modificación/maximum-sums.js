/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 09 2022
 * @desc Maximum sums
 *       Write a program that reads a sequence of numbers, and prints the maximum quantity 
 *       that can be obtained by adding numbers consecutively from the beginning, and the 
 *       maximum quantity that can be obtained by adding numbers consecutively from the end. 
 *       Input consists of several cases. Each case begins with a number n, followed by n 
 *       integer numbers. For every case, print two numbers: the maximum quantity that can 
 *       be obtained by adding zero or more consecutive numbers from the beginning, and the 
 *       maximum quantity that can be obtained by adding zero or more consecutive numbers 
 *       from the end.
 * @see {@link https://jutge.org/problems/P20262_en}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

 'use strict';

/**
 * @param {number} numeros - Vector con los números
 * @returns {number} - Devuelve la suma de los números
 * @description Función que devuelve la cantidad maxima de la suma desde el inicio
 */
function cantidadMaximaInicio(numeros) {
  let suma = 0;
  let maximo = 0;
  // bucle que recorre el vector con for of
  for (let numero of numeros) {
    suma += numero;
    if (suma > maximo)
      maximo = suma;
  }
  return maximo;
}

/**
 * @param {number} numeros - Vector con los números
 * @returns {number} - Devuelve la suma de los números
 * @description Función que devuelve la cantidad maxima realizando la suma empezando por el final
 */
function cantidadMaximaFinal(numeros) {
  let suma = 0;
  let maximo = 0;
  // bucle que recorre el vector con for of
  for (let numero of numeros.reverse()) {
    suma += numero;
    if (suma > maximo)
      maximo = suma;
  }
  return maximo;
}



function main() {
  // Se introduce una serie de números
  const argumentos = process.argv.slice(1);
  let vector = argumentos.map(Number);
  // Se quita el primer valor
  vector.shift();
  vector.shift();
  // Se comprueba si el vector está vacío o si no tiene 3 números
  if (vector.length === 0)
    console.log("");
  else
    console.log(cantidadMaximaInicio(vector), cantidadMaximaFinal(vector));
}
if (require.main === module) {
  main();
}