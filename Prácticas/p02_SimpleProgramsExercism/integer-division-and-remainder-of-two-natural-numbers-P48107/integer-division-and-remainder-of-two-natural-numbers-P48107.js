/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Feb 18 2022
 * @desc Integer division and remainder of two natural numbers
 *       Write a program that reads two natural numbers a and b, with b > 0, and prints the integer
 *       division d and the remainder r of a divided by b. Remember that, by definition, d i r must
 *       be the only integer numbers such that 0 ≤ r < b and d · b + r = a.
 * @see {@link https://jutge.org/problems/P48107}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

let readlineSync = require('readline-sync');

// Dividir devuelve el cociente y el resto de la división entera de a por b.
const dividir = function(dividendo, divisor) {
  let cociente = Math.floor(dividendo / divisor);
  let resto = dividendo % divisor;
  console.log(cociente, resto);
};

const inputNumbers = function() {
  let answer = readlineSync.question('Introduce el dividendo y el divisor separados por un espacio: ').split(' ');
  let dividendo = parseInt(answer[0]);
  let divisor = parseInt(answer[1]);
  if (!Number.isNaN(dividendo) && !Number.isNaN(divisor) ) {
    if (divisor > 0) {
      return answer;
    } else
      console.log("El dividendo debe ser mayor que 0.");
  } else
    console.log("No has introducido dos números.");

};

function main() {
  let answerArray = inputNumbers();
  if (answerArray !== undefined)
    dividir(answerArray[0], answerArray[1])
}

if (require.main === module) {
  main();
}
