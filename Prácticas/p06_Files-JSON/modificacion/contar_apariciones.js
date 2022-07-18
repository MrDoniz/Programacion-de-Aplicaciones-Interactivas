/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 30 2022
 * @desc Counting frequences
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
* @description - Cuenta el número de veces que aparece la palabra Buscada en el
* texto.
* @param {String} palabraBuscada - Palabra a buscar
* @param {Array} nombreFichero - Nombre del fichero a buscar
* @return {Array} - Cadena que contiene el número de veces que aparece la
* palabra y en que líneas aparece.
**/
const contarFrecuencias = function(palabraBuscada, nombreFichero) {
  const fs = require('fs');
  const lineas = fs.readFileSync(nombreFichero, 'utf8').split('\n');
  let contadorTotal = 0;
  const lineasContadas = [];
  for (let i = 0; i < lineas.length; i++) {
    if (lineas[i].includes(palabraBuscada)) {
      contadorTotal++;
      lineasContadas.push(i + 1);
    }
  }
  return [palabraBuscada, contadorTotal, lineasContadas];
};

/**
* @description - Comprueba si el argumento introducido es una palabra y un
* fichero
* @return {String} - nombre del fichero recibido
**/
const procesarArgumentos = function() {
  const entradaCadena = process.argv.slice(1);
  const palabraBuscada = entradaCadena[1];
  const nombreFichero = entradaCadena[2];
  const fs = require('fs');
  try {
    fs.accessSync(nombreFichero, fs.constants.R_OK);
  } catch (err) {
    throw new Error('No se ha podido abrir el fichero de entrada.');
  }
  return [palabraBuscada, nombreFichero];
};

/**
* @description Programa principal
* @param {String} cadenaEntrada - Cadena de texto con el nombre del fichero.
* @return {String} - Las 10 palabras mas frecuentes del fichero.
**/
function main(cadenaEntrada) {
  let argumentos;
  if (process.argv.slice(2).length === 0) {
    argumentos = procesarEntrada(cadenaEntrada);
  } else {
    argumentos = procesarArgumentos();
  }
  console.log();
  const salida = contarFrecuencias(argumentos[0], argumentos[1]);
  console.log(salida);
  return salida;
}

module.exports = main;

if (require.main === module) {
  main();
}
