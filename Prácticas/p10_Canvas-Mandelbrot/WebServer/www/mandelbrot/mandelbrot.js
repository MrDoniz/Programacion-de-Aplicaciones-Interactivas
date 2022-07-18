/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 26 2022
 * @desc Cliente que representa la clase Mandelbrot.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

import {fileURLToPath} from 'url';
import process from 'process';

import {Mandelbrot} from './mandelbrot-class.js';

export default {Mandelbrot};

/**
* @description Programa principal
**/
function main() {
  const objeto = new Mandelbrot(4, 1);
  const conjunto = objeto.generarConjunto();
  conjunto.forEach((complejo) => {
    console.log(complejo.toString());
  });
  console.log('SEPARATE');
  conjunto.forEach((complejo) => {
    console.log(objeto.funcionDeRecurrencia(complejo).toString());
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
