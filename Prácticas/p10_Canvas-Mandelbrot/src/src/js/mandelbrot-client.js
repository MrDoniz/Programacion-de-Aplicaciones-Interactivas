/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Cliente de la clase Mandelbrot
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

import {Mandelbrot} from './mandelbrot.js';

/**
 * @description Ejecuta las funciones del canvas
 * @param {Number} anchura - Anchura del canvas
 * @param {Number} altura - Altura del canvas
 * @param {Number} iteracion - Número de iteraciones
 */
const execute = function(anchura, altura, iteracion) {
  const test = new Mandelbrot(anchura, altura, iteracion);
  test.deploy();
  let [area, error] = test.area(100);
};

window.execute = execute;
