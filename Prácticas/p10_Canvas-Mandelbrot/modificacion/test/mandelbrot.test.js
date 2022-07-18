/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Test de la clase Mandelbrot
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

import {expect} from 'chai';
import {Board} from '../src/js/board.js';

describe('mandelbrot', () => {
  const TEST1 = new Board(1200, 800, 100);
  it('we expected and object', () => expect(TEST1).to.be.an('object'));
});

