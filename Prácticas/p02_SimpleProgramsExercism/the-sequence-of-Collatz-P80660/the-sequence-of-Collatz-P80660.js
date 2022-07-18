/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Feb 18 2022
 * @desc The sequence of Collatz
 *       Let n be any strictly positive natural number. Consider the following process. If n is an 
 *       even number, we divide it by two. Otherwise, we multiply it by 3 and add 1 to it. When we 
 *       reach 1, we stop. For instance, starting with 3, we obtain the sequence
 *       3,  10,  5,  16,  8,  4,  2,  1 .
 *       Since 1937 it is conjectured that this process ends for any initial n, although nobody has 
 *       been able to prove it. In this problem, we do not ask you for a proof. You only have to 
 *       write a program that prints the number of steps that it takes to reach 1 for every given n.
 * @see {@link https://jutge.org/problems/P48107}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

let readlineSync = require('readline-sync');

function main() {
  let numbers = [];
  let number = readlineSync.question('Introduce un numero: ');
  while (number != '') {
    numbers.push(number);
    number = readlineSync.question('Introduce un numero: ');
  }

  for (let i = 0; i < numbers.length; i++) {
    let number = parseInt(numbers[i]);
    let steps = 0;
    while (number != 1) {
      if (number % 2 === 0) {
        number = number / 2;
      } else {
        number = (number * 3) + 1;
      }
      steps++;
    }
    console.log(`${numbers[i]} tiene ${steps} pasos.`);
  }
}

if (require.main === module) {
  main();
}
