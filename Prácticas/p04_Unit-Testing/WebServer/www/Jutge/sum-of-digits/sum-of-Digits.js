/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 12 2022
 * @desc Sum of digits
 *       Write a program that reads several Numbers and prints the sum of the
 *       digits of each one.Input consists of a sequence of natural Numbers.For
 *       every Number, print the sum of its digits following the format of the
 *       example.
 * @see {@link https://jutge.org/problems/P33839}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';


/**
 * @description Suma de los dígitos de un número
 * @param {Number} numero - Número de términos de la serie
 * @return {Number} - Número sumado de los dígitos
 */
const sumaDeDigitos = function(numero) {
  let suma = 0;
  while (numero > 0) {
    suma += numero % 10;
    numero = Math.floor(numero / 10);
  }
  return suma;
};
module.exports = sumaDeDigitos;


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
    console.log('The sum of the digits of', valorEntrada, 'is',
        sumaDeDigitos(valorEntrada) + '.');
  }
}

if (require.main === module) {
  main();
}
