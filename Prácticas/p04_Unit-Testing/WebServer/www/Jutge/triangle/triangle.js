/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 11 2022
 * @desc Triangle
 *       Write a program that, given a Number n, prints a “triangle of size n”.
 *       Input consists of a natural Number n.Print n lines, in such a way that
 *       the i-th line contains i asterisks.
 * @see {@link https://jutge.org/problems/P29973}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
 * @description - Imprime un triángulo de números
 * @param {Number} numero - Número
 * @return {String} - Cadena con el triángulo
 */
const triangulo = function(numero) {
  let cadena = '';
  for (let i = 1; i <= numero; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line = line + '*';
    }
    cadena = cadena + line + '\n';
  }
  return cadena;
};
module.exports = triangulo;

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
    console.log(triangulo(valorEntrada));
  }
}

if (require.main === module) {
  main();
}
