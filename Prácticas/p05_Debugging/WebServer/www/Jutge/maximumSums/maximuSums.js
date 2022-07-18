/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 20 2022
 * @desc Maximum sums
 *       Write a program that reads a sequence of numbers, and prints the
 *       maximum quantity that can be obtained by adding numbers consecutively
 *       from the beginning, and the maximum quantity that can be obtained by
 *       adding numbers consecutively from the end. Input consists of several
 *       cases. Each case begins with a number n, followed by n integer
 *       numbers. For every case, print two numbers: the maximum quantity that
 *       can be obtained by adding zero or more consecutive numbers from the
 *       beginning, and the maximum quantity that can be obtained by adding
 *       zero or more consecutive numbers from the end.
 * @see {@link https://jutge.org/problems/P20262_en}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
 * @description Función que devuelve la cantidad maxima de la suma desde el
 * inicio
 * @param {Array} numeros - Vector con los números
 * @return {Number} - Devuelve la suma de los números
 */
function cantidadMaximaInicio(numeros) {
  let suma = 0;
  let maximo = 0;
  for (const numero of numeros) {
    suma += numero;
    if (suma > maximo) {
      maximo = suma;
    }
  }
  return maximo;
}

/**
 * @description Función que devuelve la cantidad maxima realizando la suma
 * empezando por el final
 * @param {Array} numeros - Vector con los números
 * @return {number} - Devuelve la suma de los números
 */
function cantidadMaximaFinal(numeros) {
  let suma = 0;
  let maximo = 0;
  for (const numero of numeros.reverse()) {
    suma += numero;
    if (suma > maximo) {
      maximo = suma;
    }
  }
  return maximo;
}

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
  let salida = '';
  salida += cantidadMaximaInicio(vectorEntrada) + ' ';
  salida += cantidadMaximaFinal(vectorEntrada);
  console.log(salida);
  return salida;
}

module.exports = main;

if (require.main === module) {
  main();
}
