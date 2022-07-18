/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 22 2022
 * @desc Test de la clase Complejo.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

import Complejo from './complejo-class.js';

describe('Prueba unitarias', () => {
  const complejo1 = new Complejo(1, 2);
  const complejo2 = new Complejo(1, 2);
  test('Instancia', () => {
    expect(complejo1 instanceof Complejo)
        .toBe(true);
  });
  test('Suma', () => {
    expect(complejo1.suma(complejo2).toString())
        .toBe('2 + 3i');
  });
  const complejo3 = new Complejo(4, 4);
  test('Resta', () => {
    expect(complejo3.resta(complejo2).toString())
        .toBe('3 + 3i');
  });
  test('Multiplicación', () => {
    expect(complejo1.multiplicacion(complejo2).toString())
        .toBe('-1 + 3i');
  });
  test('División', () => {
    expect(complejo1.division(complejo2).toString())
        .toBe('1.5 + 0.5i');
  });
  test('Valor absoluto', () => {
    expect(complejo1.absoluto())
        .toBe(2.24);
  });
  test('Conjugado', () => {
    expect(complejo1.conjugado().toString())
        .toBe('1 -2i');
  });
});

