/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Feb 18 2022
 * @desc Elementos
 *       El agua (A) vence a la piedra (P) que a su vez vence al viento (V) que vence al agua. Di 
 *       quien gana el enfrentamiento, o si se produce un empate.
 * @see {@link https://jutge.org/problems/P51352}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

let readlineSync = require('readline-sync');

const elementos = function(firstLetter, secondLetter) {
  let firstLetterNumber = 0;
  let secondLetterNumber = 0;
  if (firstLetter === 'A') {
    firstLetterNumber = 1;
  }
  if (firstLetter === 'P') {
    firstLetterNumber = 2;
  }
  if (firstLetter === 'V') {
    firstLetterNumber = 3;
  }
  if (secondLetter === 'A') {
    secondLetterNumber = 1;
  }
  if (secondLetter === 'P') {
    secondLetterNumber = 2;
  }
  if (secondLetter === 'V') {
    secondLetterNumber = 3;
  }
  if (firstLetterNumber > secondLetterNumber) {
    console.log('1');
  }
  if (firstLetterNumber < secondLetterNumber) {
    console.log('2');
  }
  if (firstLetterNumber === secondLetterNumber) {
    console.log('-');
  }
}

const inputCharacter = function() {
  let answer = readlineSync.question('Introduce dos letras (A, P o V) separados por un espacio: ');
  let answerArray = answer.split(' ');
  let firstLetter = answerArray[0];
  let secondLetter = answerArray[1];
  if (firstLetter === 'A' || firstLetter === 'P' || firstLetter === 'V') {
    if (secondLetter === 'A' || secondLetter === 'P' || secondLetter === 'V') {
      return answerArray;
    } else
      console.log("La segunda letra debe ser A, P o V.");
  } else
    console.log("La primera letra debe ser A, P o V.");
};

function main() {
  let answerArray = inputCharacter();
  let firstLetter = answerArray[0];
  let secondLetter = answerArray[1];
  elementos(firstLetter, secondLetter);

}

if (require.main === module) {
  main();
}
