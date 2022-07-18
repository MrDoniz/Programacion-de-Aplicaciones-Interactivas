/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Feb 18 2022
 * @desc Counting a's (1)
 *       Write a program that reads a sequence of characters ended with a period and prints the 
 *       number of letters ‘a’ in the sequence.
 * @see {@link https://jutge.org/problems/P97969}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

let readlineSync = require('readline-sync');

function main() {
  let sequence = readlineSync.question('Introduce una secuencia de caracteres terminada por un punto: ');
  let aCount = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] == 'a') {
      aCount++;
    }
  }
  console.log(`El numero de letras \'a\' en la secuencia es ${aCount}.`);
}

if (require.main === module) {
  main();
}
