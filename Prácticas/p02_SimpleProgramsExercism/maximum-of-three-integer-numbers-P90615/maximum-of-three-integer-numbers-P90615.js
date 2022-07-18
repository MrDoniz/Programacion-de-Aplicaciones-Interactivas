/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Feb 18 2022
 * @desc Maximum of three integer numbers
 *       Write a program that reads three numbers and prints their maximum. This exercise is 
 *       slightly harder than P52847: “Maximum of three different integer numbers”.
 * @see {@link https://jutge.org/problems/P90615}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

let readlineSync = require('readline-sync');

const mayor = function(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    console.log(`El número mayor es ${number1}`);
  } else if (number2 > number1 && number2 > number3) {
    console.log(`El número mayor es ${number2}`);
  } else if (number3 > number1 && number3 > number2) {
    console.log(`El número mayor es ${number3}`);
  } else {
    console.log('Los números son iguales');
  }
};

const inputNumbers = function() {
  let answer = readlineSync.question('Introduce 3 números separados por un espacio: ').split(' ');
  let num1 = parseInt(answer[0]);
  let num2 = parseInt(answer[1]);
  let num3 = parseInt(answer[2]);
  if (!Number.isNaN(num1) && !Number.isNaN(num2) && !Number.isNaN(num3))
    return answer;
  else
    console.log("No has introducido tres números.");
};

function main() {
  let answerArray = inputNumbers();
  if (answerArray !== undefined)
    mayor(answerArray[0], answerArray[1], answerArray[2]);
}

if (require.main === module) {
  main();
}
