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
* @description - Calcula las frecuencias de los números introducidos
* @param {Array} vectorEntrada - Vector con las palabras del texto
* @return {Array} - Vector que almacena las 10 palabras mas largas
**/
const contarFrecuencias = function(vectorEntrada) {
  const frecuencias = [];
  for (let i = 0; i < 10; i++) {
    let palabraMasLarga = '';
    for (let j = 0; j < vectorEntrada.length; j++) {
      if (palabraMasLarga.length < vectorEntrada[j].length) {
        palabraMasLarga = vectorEntrada[j];
      }
    }
    frecuencias.push(palabraMasLarga);
    vectorEntrada.splice(vectorEntrada.indexOf(palabraMasLarga), 1);
  }
  return frecuencias;
};

/**
 * @description - Procesa el texto y devuelve un vector con todas las palabras
 * de este.
 * @param {String} nombreFichero - Nombre del fichero
 * @return {Array} - Vector que almacena todas las palabras.
 */
const procesarTexto = function(nombreFichero) {
  const saltoLinea = /\n/g;
  const caracteresEspeciales = /[.,\/#!¡$%?¿\^&\*;:{}=\-_`~()]/g;
  const fs = require('fs');
  const textoProcesador = fs.readFileSync(nombreFichero, 'utf8')
      .replace(saltoLinea, ' ');
  const textoProcesador2 = textoProcesador
      .replace(caracteresEspeciales, ' ');
  const palabras = textoProcesador2.split(' ');
  return palabras;
};

/**
* @description - Lee los números introducidos por el usuario
* @param {String} entradaCadena - Cadena de texto con los números.
* @return {Array} - Vector con los números introducidos por el usuario
**/
const procesarEntrada = function(entradaCadena = 'Error') {
  if (entradaCadena === 'Error' || Array.isArray(entradaCadena) ||
      typeof entradaCadena === 'number' || entradaCadena === null) {
    throw new Error('No se ha introducido un numero de fichero correcto');
  }
  let vectorEntrada = entradaCadena.split(' ');
  vectorEntrada = vectorEntrada.filter(Boolean);
  const vectorNumeros = vectorEntrada.map(Number);
  // Comprobar que el primer valor sea entero
  if (Number.isInteger(vectorNumeros[0]) === false) {
    throw new Error('No se han introducido los números correctos.');
  }
  // Comprobar que el resto de valores sean entre 1000000000 y 1000001000
  for (let i = 1; i < vectorNumeros.length; i++) {
    if (Number.isInteger(vectorNumeros[i]) === false ||
        vectorNumeros[i] <= 1000000000 || vectorNumeros[i] >= 1000001000) {
      throw new Error('No se han introducido los números correctos.');
    }
  }
  const fs = require('fs');
  try {
    fs.accessSync(entradaCadena, fs.constants.R_OK);
  } catch (err) {
    throw new Error('No se ha podido abrir el fichero de entrada.');
  }
  vectorNumeros.shift();
  return vectorNumeros;
};

/**
* @description - Recibe una cadena de texto y comprueba que es un nombre de
* fichero válido.
* @return {String} - nombre del fichero recibido
**/
const procesarArgumentos = function() {
  const entradaCadena = process.argv.slice(1);
  const nombreFichero = entradaCadena[1];
  const fs = require('fs');
  try {
    fs.accessSync(nombreFichero, fs.constants.R_OK);
  } catch (err) {
    throw new Error('No se ha podido abrir el fichero de entrada.');
  }
  return nombreFichero;
};

/**
* @description Programa principal
* @param {String} cadenaEntrada - Cadena de texto con el nombre del fichero.
* @return {String} - Las 10 palabras mas largas del fichero.
**/
function main(cadenaEntrada) {
  let nombreFichero;
  if (process.argv.slice(2).length === 0) {
    nombreFichero = procesarEntrada(cadenaEntrada);
  } else {
    nombreFichero = procesarArgumentos();
  }
  const textoProcesador = procesarTexto(nombreFichero);
  const salida = contarFrecuencias(textoProcesador);
  for (const palabra of salida) {
    console.log(palabra);
  }
  return salida;
}

module.exports = main;

if (require.main === module) {
  main();
}
