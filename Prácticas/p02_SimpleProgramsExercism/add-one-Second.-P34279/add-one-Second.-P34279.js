/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Feb 18 2022
 * @desc Add one second
 *       Write a program that adds one second to a clock time, given its hours, minutes and seconds.
 * @see {@link https://jutge.org/problems/P34279}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 * @see {@link https://es.stackoverflow.com/questions/95882/c%C3%B3mo-formatear-un-numero-con-ceros-a-la-izquierda-en-javascript}
 *
 */

'use strict';

let readlineSync = require('readline-sync');

const zeroFill = function( number, width = 2 ) {
  width -= number.toString().length;
  if (width > 0)
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join('0') + number;
  return number + "";
}

const mostrar = function(h, m, s) {
  console.log(String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0"));
}

// devuelve 00:01:03
const addOneSecond1 = function(h, m, s) {
  let suma = s + 1;
  if (suma == 60) {
    suma = 0;
    m = m + 1;
  }
  if (m == 60) {
    m = 0;
    h = h + 1;
  }
  if (h == 24) {
    h = 0;
  }
  mostrar(h, m, suma);
}

const addOneSecond2 = function(h, m, s) {
  let seconds = h * 3600 + m * 60 + s + 1;
  let hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  mostrar(hhours, minutes, seconds);
}

const inputNumbers = function() {
  let answer = readlineSync.question('Introduce el año, día, hora, minutos y segundos separados por un espacio: ').split(' ');
  let hours   = parseInt(answer[0]);
  let minutes = parseInt(answer[1]);
  let seconds = parseInt(answer[2]);
  if (!Number.isNaN(hours) && hours >= 0)
    if (!Number.isNaN(minutes) && minutes >= 0 && minutes <= 60)
      if (!Number.isNaN(seconds) && seconds >= 0 && seconds <= 60)
        return answer;
      else
        console.log("El número de segundos debe ser menor que 60.");
    else
      console.log("El número de minutos debe ser menor que 60.");
  else
    console.log("No has introducido los números correctamente.");
};

function main() {
  let answerArray = inputNumbers();
    if (answerArray !== undefined) {
      addOneSecond1(parseInt(answerArray[0]), parseInt(answerArray[1]), parseInt(answerArray[2]));
      // addOneSecond2(h, m, s);
    }
}

if (require.main === module) {
  main();
}
