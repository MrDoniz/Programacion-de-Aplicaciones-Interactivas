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

import {Board} from './board.js';
import {Polygon} from './board.js';
import {Triangle} from './board.js';

/**
 * @description Ejecuta las funciones del canvas
 * @param {Number} anchura - Anchura del canvas
 * @param {Number} altura - Altura del canvas
 */
const execute = function(anchura, altura) {
  const test = new Board(anchura, altura);
  test.deploy();
  

  const prueba = new Polygon();
  console.log(prueba instanceof Board);
  console.log(prueba instanceof Polygon);
  console.log(prueba.getAlto());
  const vector = [1000, 1000, 1000];
  const triangulo = new Triangle(vector);
  console.log(triangulo.getArea());
  triangulo.pintar();
};

window.execute = execute;
