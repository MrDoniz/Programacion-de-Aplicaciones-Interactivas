/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Feb 18 2022
 * @desc How many seconds are they?
 *       Write a program that converts to seconds a given amount of years, days, hours, minutes
 *       and seconds.
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

let readlineSync = require('readline-sync');

const segundos = function (number1, number2, number3, number4, number5) {
  console.log(number1 * 365 * 24 * 60 * 60 + number2 * 24 * 60 * 60 + number3 * 60 * 60 + number4 * 60 + number5);
}
const inputNumberMayorIgual0 = function (message) {
  let answer = readlineSync.question(message);
  let theNumber = Number(answer);
  if (!Number.isNaN(theNumber)) {
    if (theNumber >= 0) {
      return theNumber;
    } else
      console.log("El número debe ser mayor que 0.");
  } else
    console.log("La entrada no es un número.");
};

const inputNumbers = function () {
  let answer = readlineSync.question('Introduce el año, día, hora, minutos y segundos separados por un espacio: ').split(' ');
  let years = parseInt(answer[0]);
  let days = parseInt(answer[1]);
  let hours = parseInt(answer[2]);
  let minutes = parseInt(answer[3]);
  let seconds = parseInt(answer[4]);
  if (!Number.isNaN(years) && years >= 0 &&
    !Number.isNaN(days) && days >= 0 &&
    !Number.isNaN(hours) && hours >= 0 && hours <= 24 &&
    !Number.isNaN(minutes) && minutes >= 0 && minutes <= 60 &&
    !Number.isNaN(seconds) && seconds >= 0 && seconds <= 60)
    return answer;
  else
    console.log("No has introducido los números correctamente.");
};

function main() {
  let answerArray = inputNumbers();
  if (answerArray !== undefined)
    segundos(parseInt(answerArray[0]), parseInt(answerArray[1]), parseInt(answerArray[2]),
      parseInt(answerArray[3]), parseInt(answerArray[4]));
}

if (require.main === module) {
  main();
}
