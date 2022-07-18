/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 20 2022
 * @desc Counting frequences
 *       Write a program that reads a sequence of natural numbers and that
 *       prints, for each one, how many times it appears. Input consists of a
 *       natural number n, followed by n natural numbers between 1000000000 and
 *       1000001000 (both included). For each number x that appears in the
 *       sequence, print how many times it appears, following the format of the
 *       example. The output must be sorted in increasing order by x.
 * @see {@link https://jutge.org/problems/P63414_en}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
 * @description - Calcula las frecuencias de los números introducidos
 * @param {Array} vectorEntrada - Vector con los números introducidos por el
 * usuario
 * @return {String} - Cadena que almacena los valores calculados.
**/
const contarFrecuencias = function(vectorEntrada) {
  const mapaFrecuencias = new Map();
  vectorEntrada.forEach(function(numero) {
    if (mapaFrecuencias.has(numero)) {
      mapaFrecuencias.set(numero, mapaFrecuencias.get(numero) + 1);
    } else {
      mapaFrecuencias.set(numero, 1);
    }
  });
  // invierto el mapa para que salga ordenado
  const mapaOrdenado = new Map([...mapaFrecuencias.entries()].sort());
  let salida = '';
  mapaOrdenado.forEach(function(frecuencia, numero) {
    salida += `${numero} : ${frecuencia}\n`;
  });
  return salida;
};

/**
 * @description - Lee los números introducidos por el usuario
 * @param {String} entradaCadena - Cadena de texto con los números.
 * @return {Array} - Vector con los números introducidos por el usuario
**/
const procesarEntrada = function(entradaCadena = 'Error') {
  if (entradaCadena === 'Error' || Array.isArray(entradaCadena) ||
      typeof entradaCadena === 'number' || entradaCadena === null) {
    throw new Error('No se han introducido los números correctos.');
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
  vectorNumeros.shift();
  return vectorNumeros;
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
  const salida = contarFrecuencias(vectorEntrada);
  console.log(salida);
  return salida;
}

module.exports = main;

if (require.main === module) {
  main();
}
