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

import { expect } from 'chai';
import { Mandelbrot } from '../src/js/mandelbrot.js'

describe('mandelbrot', () => {
  const TEST1 = new Mandelbrot(1200, 800, 100);
  it('we expected and object', () => expect(TEST1).to.be.an('object'));
  it('TEST1 is an object of the class Mandelbrot', ()  => expect(TEST1 instanceof Mandelbrot).to.eql(true));
  //it('area and error for Mandelbrot', () => expect(TEST1.area(100)).to.be.closeTo(0.5));
});