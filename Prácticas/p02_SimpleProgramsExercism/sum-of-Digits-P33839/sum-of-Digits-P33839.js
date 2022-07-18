/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Feb 18 2022
 * @desc Sum of digits
 *       Write a program that reads several numbers and prints the sum of the digits of each one.
 * @see {@link https://jutge.org/problems/P33839}
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
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    console.log(`La suma de los dígitos de ${numbers[i]} es ${sum}.`);
  }

}

if (require.main === module) {
  main();
}
