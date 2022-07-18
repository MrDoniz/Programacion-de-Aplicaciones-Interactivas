/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Clase que representa la clase Set.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

import {fileURLToPath} from 'url';
import process from 'process';

import {Complejo} from './complejo-class.js';

export default {Complejo};

/**
* @description Programa principal
**/
function main() {
  //recibe 4 numeros
  const num1 = parseInt(process.argv[2]);
  const num2 = parseInt(process.argv[3]);
  const num3 = parseInt(process.argv[4]);
  const num4 = parseInt(process.argv[5]);
  const complejo1 = new Complejo(num1, num2);
  const complejo2 = new Complejo(num3, num4);
  console.log('Suma', complejo1.add(complejo2).toString());
  console.log('Resta', complejo1.sub(complejo2).toString());
  console.log('Multiplicación', complejo1.mul(complejo2).toString());
  console.log('División', complejo1.div(complejo2).toString());
  console.log('Valor absoluto', complejo1.abs());
  console.log('Conjugado', complejo1.conj().toString());
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
