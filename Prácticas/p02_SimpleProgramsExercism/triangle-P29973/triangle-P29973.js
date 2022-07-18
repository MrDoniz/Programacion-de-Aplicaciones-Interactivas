/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Feb 18 2022
 * @desc Triangle
 *       Write a program that, given a number n, prints a “triangle of size n”.
 * @see {@link https://jutge.org/problems/P29973}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

let readlineSync = require('readline-sync');

const triangulo = function(message) {
  let number = Number(message);
  for (let i = 1; i <= number; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line = line + '*';
    }
    console.log(line);
  }
};

const inputNumber = function(message) {
  let answer = readlineSync.question(message);
  let theNumber = Number(answer);
  if (!Number.isNaN(theNumber)) {
    return theNumber;
  }
  console.log("La entrada no era un número.");
};

function main() {
  let number = inputNumber('Introduzca un número entero: ');
  triangulo(number)
}

if (require.main === module) {
  main();
}
