/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Cliente de la clase que representa un número racional.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

import * as fs from 'fs';
import {fileURLToPath} from 'url';
import process from 'process';
const ARGUMENTOS = process.argv.slice(2);

import {Racional} from './racionales-class.js';

/**
 * @description Lee el fichero de entrada y devuelve un array de pares de
 * números racionales que contiene la información del fichero.
 * @param {String} fichero - Ruta del fichero de entrada.
 * @return {Array} - Array de pares de números racionales.
 */
const leerFichero = function(fichero) {
  const contenido = fs.readFileSync(fichero, 'utf-8');
  const lineas = contenido.split('\n');
  const pares = [];
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i];
    const numeros = linea.split(' ');
    const num1 = numeros[0].split('/');
    const num2 = numeros[1].split('/');
    const num1Racional = new Racional(Number(num1[0]), Number(num1[1]));
    const num2Racional = new Racional(Number(num2[0]), Number(num2[1]));
    pares.push([num1Racional, num2Racional]);
  }
  return pares;
};

/**
 * @description Lee la cadena de entrada y devuelve un array de pares de
 * números racionales que contiene la información del fichero.
 * @param {String} cadena - Cadena con los números racionales.
 * @return {Array} - Array de pares de números racionales.
 */
const leerCadena = function(cadena) {
  const pares = [];
  const numeros = cadena.split(' ');
  const num1 = numeros[0].split('/');
  const num2 = numeros[1].split('/');
  const num1Racional = new Racional(Number(num1[0]), Number(num1[1]));
  const num2Racional = new Racional(Number(num2[0]), Number(num2[1]));
  pares.push([num1Racional, num2Racional]);
  return pares;
};

const operacion = function(num1, num2, operacion) {
  switch (operacion) {
    case '+':
      return num1.toString() + '+' + num2.toString() +
      '=' + num1.sumar(num2).toString() + '\n';
    case '-':
      return num1.toString() + '-' + num2.toString() +
      '=' + num1.restar(num2).toString() + '\n';
    case '*':
      return num1.toString() + '*' + num2.toString() +
      '=' + num1.multiplicar(num2).toString() + '\n';
    case '/':
      return num1.toString() + '/' + num2.toString() +
      '=' + num1.dividir(num2).toString() + '\n';
    case 'comparar':
      return num1.toString() + num1.comparar(num2) + num2.toString() + '\n';
  }
};

/**
 * @description Realiza las operaciones correspondientes a cada par de números
 * racionales. Devuelve un array de cadenas de texto con el resultado de cada
 * operación.
 * @param {Array} paresNumerosRacionales - Array de pares de números racionales.
 * @return {Array} - Array de cadenas de texto con el resultado de cada
 * operación.
 */
function realizarOperaciones(paresNumerosRacionales) {
  if (typeof paresNumerosRacionales === 'string') {
    paresNumerosRacionales = leerCadena(paresNumerosRacionales);
  }
  let salida = '';
  for (let i = 0; i < paresNumerosRacionales.length; i++) {
    const num1 = paresNumerosRacionales[i][0];
    const num2 = paresNumerosRacionales[i][1];
    salida += operacion(num1, num2, '+');
    salida += operacion(num1, num2, '-');
    salida += operacion(num1, num2, '*');
    salida += operacion(num1, num2, '/');
    salida += operacion(num1, num2, 'comparar');
  }
  return salida;
}

/**
 * @description Escribe el resultado de las operaciones en el fichero de
 * salida.
 * @param {String} salida - Cadena de texto con el resultado de las
 * operaciones.
 * @param {String} nombreFichero - Ruta del fichero de salida.
 */
function escribirFichero(salida, nombreFichero) {
  fs.writeFile(nombreFichero, salida, (err) => {
    if (err) {
      throw err;
    }
  });
}

export default {
  realizarOperaciones,
  operacion,
};

/**
 * @description - Muestra por pantalla el uso.
 */
function usage() {
  console.log('Modo de uso: node racionales.js fichero_entrada fichero_salida');
  console.log('Pruebe node racionales.js --help para más información');
}

/**
 * @description - Muestra por pantalla la ayuda.
 */
function help() {
  console.log('racionales.js -- Números Racionales');
  console.log('Modo de uso: node racionales.js fichero_entrada fichero_salida \n');
  console.log('fichero_entrada: Fichero de texto conteniendo líneas con un par de números racionales: `a/b c/d` separados por un espacio');
  console.log('fichero_salida:  Fichero de texto que contendrá líneas con las operaciones realizadas: `a/b + c/d = n/m`');
}

/**
* @description Programa principal
**/
function main() {
  if (ARGUMENTOS.length === 0) {
    usage();
  } else if (ARGUMENTOS[0] === '--help' || ARGUMENTOS[0] === '-h') {
    help();
  } else {
    const paresNumerosRacionales = leerFichero(ARGUMENTOS[0]);
    const salida = realizarOperaciones(paresNumerosRacionales);
    escribirFichero(salida, ARGUMENTOS[1]);
    console.log(salida);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
