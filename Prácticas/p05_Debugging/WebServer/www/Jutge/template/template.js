/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 20 2022
 * @desc Template
 * @see {@link }
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';


/**
 * @description - Lee los números introducidos por el usuario
 * @param {String} entradaCadena - Cadena de texto con los números.
 * @return {Array} - Vector con los números introducidos por el usuario
**/
const procesarEntrada = function(entrada = 'Error') {
  if (entrada === 'Error' ||
      entrada === Infinity ||
      entrada === null ||
      entrada === undefined ||
      entrada === NaN) {
    throw new Error('Error argumento.');
  }
  let vectorEntrada = entrada.split(' ');
  vectorEntrada = vectorEntrada.filter(Boolean);
  vectorEntrada.shift();
  return vectorEntrada.map(Number);
};

/**
 * @description - Lee los números introducidos por el usuario
 * @return {Array} - Vector con los números introducidos por el usuario
**/
const procesarArgumentos = function() {
  const entradaCadena = process.argv.slice(1);
  const vectorArgumentos = entradaCadena.map(Number);
  vectorArgumentos.shift();
  vectorArgumentos.shift();
  return vectorArgumentos;
};

/**
 * @description Programa principal
 * @param {String} cadenaEntrada - Cadena de texto con los números.
 * @return {String} - Valores calculados
**/
function main(cadenaEntrada) {
  let vectorEntrada;
  if (process.argv.slice(2).length === 0) {
    vectorEntrada = procesarEntrada(cadenaEntrada);
  } else {
    vectorEntrada = procesarArgumentos();
  }
  const salida = '';
  return salida;
}

module.exports = main;

if (require.main === module) {
  main();
}
