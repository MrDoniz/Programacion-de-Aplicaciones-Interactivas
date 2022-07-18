/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 11 2022
 * @desc Intervals (1)
 *       Write a program that, given two intervals, computes the interval
 *       corresponding to their intersection, or tells that it is empty. Input
 *       consists of four integer Numbers a1, b1, a2, b2 that represent the
 *       intervals [a1,b1] and [a2,b2]. Assume a1≤ b1 and a2≤ b2.Print “[]” if
 *       their intersection is empty, or “[x,y]” if this is their non-empty
 *       intersection.
 * @see {@link https://jutge.org/problems/P51126}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
 * @description - Calcula el intervalo de intersección de dos intervalos
 * @param {Number} a1 - Primer intervalo
 * @param {Number} b1 - Segundo intervalo
 * @param {Number} a2 - Tercer intervalo
 * @param {Number} b2 - Cuarto intervalo
 * @return {String} - Intervalo de intersección
**/
function intervalos(a1, b1, a2, b2) {
  let cadena = '';
  if (a1 <= a2 && b1 >= b2) {
    cadena = '[' + a2 + ',' + b2 + ']';
  } else if (a1 >= a2 && b1 <= b2) {
    cadena = '[' + a1 + ',' + b1 + ']';
  } else if (a1 <= a2 && b1 <= b2) {
    cadena = '[' + a2 + ',' + b1 + ']';
  } else if (a1 >= a2 && b1 >= b2) {
    cadena = '[' + a1 + ',' + b2 + ']';
  } else {
    cadena = '[]';
  }
  return cadena;
};
module.exports = intervalos;

/**
 * @description - Lee los números introducidos por el usuario
 * @return {Array} - Vector con los números introducidos por el usuario
**/
const procesarEntrada = function() {
  // eslint-disable-next-line max-len
  const argumentos = process.argv.slice(1);
  const vectorArgumentos = argumentos.map(Number);
  vectorArgumentos.shift();
  if (vectorArgumentos.length !== 5) {
    return vectorArgumentos;
  } else {
    console.log('No has introducido los números correctamente.');
  }
};

/**
 * @description Programa principal
**/
function main() {
  const vectorEntrada = procesarEntrada();
  if (vectorEntrada !== undefined) {
    // eslint-disable-next-line max-len
    console.log(intervalos(parseInt(vectorEntrada[0]), parseInt(vectorEntrada[1]), parseInt(vectorEntrada[2]), parseInt(vectorEntrada[3])));
  }
}

if (require.main === module) {
  main();
}
