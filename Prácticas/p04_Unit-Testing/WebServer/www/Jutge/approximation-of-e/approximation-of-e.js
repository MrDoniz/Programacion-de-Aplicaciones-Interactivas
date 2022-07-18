/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 12 2022
 * @desc Approximation of e
 *       Write a program that, for every given natural Number n, prints the
 *       approximation of e that we get by adding the n first terms of the
 *       series above. Input consists of several natural Numbers n between 0
 *       and 20. For every given n, print with 10 digits after the decimal
 *       point the approximation of e that we get by adding the n first terms
 *       of the series above. Because of overflow reasons, do all the
 *       computations for this exercise using real Numbers.
 * @see {@link https://jutge.org/problems/P97969}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
 * @description Calcula el factorial de un número
 * @param {Number} numero - Número
 * @return {Number} - Factorial de un número
**/
const factorial = function(numero) {
  let valor = 1;
  for (let i = 1; i <= numero; ++i) {
    valor *= i;
  }
  return valor;
};

/**
 * @description Calcula la aproximación de e de un número
 * @param {Number} numero - Número de términos de la serie
 * @return {Number} - Aproximación de e
 */
const aproximacionOfE = function(numero) {
  const valor = 1;
  let aproximacion = 0;
  for (let i = 0; i <= numero - 1; ++i) {
    aproximacion += Math.floor(Math.pow(valor, i) / factorial(i));
  }
  return aproximacion.toFixed(1);
};
module.exports = aproximacionOfE;

/**
 * @description - Lee los números introducidos por el usuario
 * @return {Number} - Valor introducido por el usuario
**/
const procesarEntrada = function() {
  const argumentos = process.argv.slice(1);
  const valorArgumento = Number(argumentos[1]);
  if (Number.isNaN(valorArgumento) || valorArgumento < 0 || valorArgumento >
  20) {
    return valorArgumento;
  } else {
    console.log('No has introducido los números correctamente.');
  }
};

/**
 * @description Programa principal
**/
function main() {
  const valorEntrada = procesarEntrada();
  if (valorEntrada !== undefined) {
    console.log('With', valorEntrada, 'term(s) we get',
        aproximacionOfE(valorEntrada) + '.');
  }
}

if (require.main === module) {
  main();
}
