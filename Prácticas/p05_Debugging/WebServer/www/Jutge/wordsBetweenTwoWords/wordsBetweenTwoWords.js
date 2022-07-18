/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 20 2022
 * @desc Words between two words
 *       Write a program that, given a sequence of words, prints the number of
 *       words between the word “beginning” and the word “end”. If the word
 *       “beginning”, the word “end” or both words are missing, or if they
 *       appear in inverse order, tell so. Input consists of several words. The
 *       words “beginning” and “end” appear, at most, once. Print the number of
 *       words between the word “beginning” and the word “end”, if these appear
 *       in this order. Otherwise, print “wrong sequence”.
 * @see {@link https://jutge.org/problems/P12061}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
 * @description Cuenta las palabras que hay en la cadena de texto entre la
 * palabra "beginning" y la palabra "end". Si falta la palabra “beginning”,
 * la palabra “end” o ambas palabras, o si aparecen en orden inverso,
 * indíquelo.
 * @param {String} cadenaEntrada - Cadena de texto con las palabras.
 * @return {Number} - Devuelve el contador de palabras
 * @return {String} - Devuelve un mensaje de error de que no se han introducido
 * las palabras "beginning" y "end"
 */
const contarPalabras = function(cadenaEntrada) {
  const vectorEntrada = cadenaEntrada.split(' ');
  const posicionInicio = vectorEntrada.indexOf('beginning');
  const posicionFin = vectorEntrada.indexOf('end');
  if (posicionInicio === -1 || posicionFin === -1) {
    return 'wrong sequence';
  }
  const contador = posicionFin - posicionInicio - 1;
  return contador;
};

/**
 * @description - Procesa la cadena pasada por parámetro y comprueba que
 * está bien formada.
 * @param {String} entradaCadena - Cadena de texto con las palabras.
 * @return {String} - Cadena de texto con las palabras.
**/
const procesarEntrada = function(entradaCadena = 'Error') {
  if (entradaCadena === 'Error' || Array.isArray(entradaCadena) ||
      typeof entradaCadena === 'number' || entradaCadena === null) {
    throw new Error('No se han introducido los números correctos.');
  }
  console.log(entradaCadena);
  return entradaCadena;
};

/**
 * @description - Procesa la cadena introducida por el usuario.
 * @return {String} - Cadena de texto con las palabras.
**/
const procesarArgumentos = function() {
  const argumentos = process.argv.slice(1);
  const cadenaArgumento = String(argumentos[1]);
  return cadenaArgumento;
};

/**
 * @description Programa principal
 * @param {String} cadenaEntrada - Cadena de texto con las palabras.
 * @return {String} - Valores calculados.
**/
function main(cadenaEntrada) {
  let vectorEntrada;
  if (process.argv.slice(2).length === 0) {
    vectorEntrada = procesarEntrada(cadenaEntrada);
  } else {
    vectorEntrada = procesarArgumentos();
  }
  const salida = contarPalabras(vectorEntrada);
  console.log(salida);
  return salida;
}

module.exports = main;

if (require.main === module) {
  main();
}
