/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 07 2022
 * @desc Approximation of e
 *       Write a program that, for every given natural number n, prints the approximation of e 
 *       that we get by adding the n first terms of the series above. Input consists of several 
 *       natural numbers n between 0 and 20. For every given n, print with 10 digits after the 
 *       decimal point the approximation of e that we get by adding the n first terms of the 
 *       series above.
 * @see {@link https://jutge.org/problems/P97969}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

 'use strict';

/**
 * 
 * @param {*} number 
 * @returns {number} - Factorial de un número
 * @description Calcula el factorial de un número
 */
 const factorial = function(number) {
  let aux = 1;
  for (let i = 1; i <= number; ++i)
    aux *= i;
  return aux;
}

/**
 * @param {number} number - Número de términos de la serie
 * @returns {number} - Aproximación de e
 * @description Calcula la aproximación de e de un número
 */
const aproximacion = function(n) {
  const x = 1;
  let e = 0;
  for (let i = 0; i <= n - 1; ++i)
    e += Math.floor(Math.pow(x,i) / factorial(i));
  return e.toFixed(10);
}

function main() {
  const argumentos = process.argv.slice(1);
  let valor = Number(argumentos[1]);
  if (Number.isNaN(valor) || valor < 0 || valor > 20) 
    console.log("");
  else
    console.log("With", valor, "term(s) we get", aproximacion(valor) + ".");
}

if (require.main === module) {
  main();
}