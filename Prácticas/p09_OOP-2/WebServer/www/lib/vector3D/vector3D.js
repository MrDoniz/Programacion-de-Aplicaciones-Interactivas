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

import {fileURLToPath} from 'url';
import process from 'process';

import {Vector3D} from './vector3D-class.js';

export default {Vector3D};


/**
 * @description Programa principal
 */
function main() {
  const vector1 = new Vector3D(0, 1, 0);
  const vector2 = new Vector3D(1, 0, 1);
  console.log('Vector 1 : ', vector1.imprimir(vector1));
  console.log('Vector 2 : ', vector2.imprimir(vector2));
  console.log('Suma : ', vector1.imprimir(vector1.sumar(vector1, vector2)));
  console.log('Producto escalar : ', vector1.productoEscalar(vector1, vector2));
  console.log('Módulo vector1 : ', vector1.modulo(vector1));
  console.log('Módulo vector2 : ', vector1.modulo(vector2));
  console.log('Ángulo : ', vector1.angulo(vector1, vector2) + 'º');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
