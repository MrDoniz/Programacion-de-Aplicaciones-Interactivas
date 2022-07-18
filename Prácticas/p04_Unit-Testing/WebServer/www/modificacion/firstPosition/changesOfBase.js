/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 16 2022
 * @desc Changes of base
 *       Use recursion in order to write a program that prints every given
 *       number in binary, octal and hexadecimal notation. Input consists of
 *       several natural numbers. For every given number, print its binary,
 *       octal and hexadecimal notation. Follow the format of the example.
 * @see {@link https://jutge.org/problems/P56549_en}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
  * @description - Calcular la notacion binaria, octal y hexadecimal.
  * @param {Number} valorEntrada - Vector de números
  * @return {Strig} - 
**/
function cambiarBase(vector) {
  for (const numero of vector) {
    if (numero % 2 === 0) {
      return (vector.indexOf(numero) + 1);
    }
  }
  return ('El vector no contiene números pares');
};
module.exports = cambiarBase;

/**
 * @description - Lee los números introducidos por el usuario
 * @return {Number} - Valor introducido por el usuario
**/
const procesarEntrada = function() {
  const argumentos = process.argv.slice(1);
  const valorArgumento = Number(argumentos[1]);
  if (!Number.isNaN(valorArgumento)) {
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
    cambiarBase(valorEntrada);
  }
}

if (require.main === module) {
  main();
}
