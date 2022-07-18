/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 22 2022
 * @desc Cliente que representa la clase Clock.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

import {fileURLToPath} from 'url';
import process from 'process';

import {Clock} from './clock-class.js';

export default {Clock};

/**
* @description Programa principal
**/
function main() {
  const reloj1 = new Clock(11, 30);
  const reloj2 = new Clock(11, 30);
  console.log('Resto 25 minutos:', reloj1.resta(25).toString());
  console.log('reloj1', reloj1.compara(reloj2), 'reloj2');
  const reloj3 = new Clock(12, 30);
  console.log('reloj1', reloj1.compara(reloj3), 'reloj3');
  const reloj4 = new Clock(9, 0);
  console.log('reloj1', reloj1.compara(reloj4), 'reloj4');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
