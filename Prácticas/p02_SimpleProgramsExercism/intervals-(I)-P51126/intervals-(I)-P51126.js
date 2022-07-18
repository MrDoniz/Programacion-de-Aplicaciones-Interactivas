/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Feb 18 2022
 * @desc Intervals (1)
 *       Write a program that, given two intervals, computes the interval corresponding to their 
 *       intersection, or tells that it is empty.
 * @see {@link https://jutge.org/problems/P51126}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

let readlineSync = require('readline-sync');

function main() {
  let array = readlineSync.question('Introduce dos intervalos separados por un espacio: ').split(' ');
  let a1 = parseInt(array[0]);
  let b1 = parseInt(array[1]);
  let a2 = parseInt(array[3]);
  let b2 = parseInt(array[4]);
  if (a1 <= a2 && b1 >= b2) {
    console.log('[' + a2 + ',' + b2 + ']');
  } else if (a1 >= a2 && b1 <= b2) {
    console.log('[' + a1 + ',' + b1 + ']');
  } else if (a1 <= a2 && b1 <= b2) {
    console.log('[' + a2 + ',' + b1 + ']');
  } else if (a1 >= a2 && b1 >= b2) {
    console.log('[' + a1 + ',' + b2 + ']');
  } else {
    console.log('[]');
  }
}

if (require.main === module) {
  main();
}