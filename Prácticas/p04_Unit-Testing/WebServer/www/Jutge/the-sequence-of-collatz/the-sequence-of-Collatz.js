/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 11 2022
 * @desc The sequence of Collatz
 *       Let n be any strictly positive natural Number. Consider the following
 *       process. If n is an even Number, we divide it by two. Otherwise, we
 *       multiply it by 3 and add 1 to it. When we reach 1, we stop. For
 *       instance, starting with 3, we obtain the sequence Since 1937 it is
 *       conjectured that this process ends for any initial n, although nobody
 *       has been able to prove it. In this problem, we do not ask you for a
 *       proof. You only have to write a program that prints the Number of
 *       steps that it takes to reach 1 for every given n. Input consists of
 *       several natural Numbers n ≥ 1. For every n, print how many steps are
 *       needed to reach 1. Suppose that this Number is well defined, that is,
 *       that the conjecture of the statement is true.
 * @see {@link https://jutge.org/problems/P80660}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
 * @description Calcula la secuencia de Collatz de un número
 * @param {Number} numero - Número
 * @return {Number} - Número de pasos
 */
const secuenciaCollatz = function(numero) {
  let valor = 0;
  while (numero != 1) {
    if (numero % 2 === 0) {
      numero = numero / 2;
    } else {
      numero = (numero * 3) + 1;
    }
    valor++;
  }
  return valor;
};
module.exports = secuenciaCollatz;

/**
 * @description - Lee los números introducidos por el usuario
 * @return {Number} - Valor introducido por el usuario
**/
const procesarEntrada = function() {
  const argumentos = process.argv.slice(1);
  const valorArgumento = Number(argumentos[1]);
  if (!Number.isNaN(valorArgumento) || valorArgumento > 0) {
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
    console.log(secuenciaCollatz(valorEntrada));
  }
}

if (require.main === module) {
  main();
}
