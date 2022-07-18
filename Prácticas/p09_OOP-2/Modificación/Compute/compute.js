/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Cliente de la clase que representa la clase Vector3D.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

 import * as fs from 'fs';
import {fileURLToPath} from 'url';
import process from 'process';

import {Compute} from './compute-class.js';

export default {Compute};

/**
 * @description Imprime la tabla de multiplicar del número pasado como parámetro.
 * @param {Number} numero 
 */
const printProductTable = function(numero) {
  const compute = new Compute();
  console.log(compute.TablaMultiplicar(numero));
};

/**
 * @description 
 * @param {String} fichero 
 */
const PrintAllTables = function(fichero) {
  const compute = new Compute();
  let tablas = '';
  for (let numero = 1; numero <= 9; numero++) {
     tablas += compute.TablaMultiplicar(numero);
  }
  fs.writeFileSync(fichero, tablas);
};


/**
 * @description Programa principal
 */
function main() {
  const compute = new Compute();
  console.log(compute.Factorial(2)); 
  console.log(compute.Suma(3)); 
  console.log(compute.EsPrimo(13)); 
  console.log(compute.SonPrimosRelativos(13, 17)); 
  printProductTable(7);
  PrintAllTables('ficheroTablas.txt');

}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
