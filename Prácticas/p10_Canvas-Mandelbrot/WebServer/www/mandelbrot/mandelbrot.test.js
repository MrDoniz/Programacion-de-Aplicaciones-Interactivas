/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 26 2022
 * @desc Test que representan la clase Mandelbrot.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

import Mandelbrot from './mandelbrot-class.js';

describe('Prueba unitarias', () => {
  const mandelbrot = new Mandelbrot(1, 2, 3);
  test('Instancia', () => {
    expect(mandelbrot instanceof Mandelbrot)
        .toBe(true);
  });
});
