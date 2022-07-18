/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Trabajar con datos estadísticos correspondientes a un partido de
 * baloncesto de la NBA
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
    expect(complejo1.add(complejo2).toString())
        .toBe('2 + 4i');
  });
  test('Resta', () => {
    expect(complejo1.sub(complejo2).toString())
        .toBe('0');
  });
  test('Multiplicación', () => {
    expect(complejo1.mul(complejo2).toString())
        .toBe('-3 + 4i');
  });
  test('División', () => {
    expect(complejo1.div(complejo2).toString())
        .toBe('1');
  });
  test('Valor absoluto', () => {
    expect(complejo1.abs())
        .toBe(2.24);
  });
  test('Conjugado', () => {
    expect(complejo1.conj().toString())
        .toBe('1 -2i');
  });
});

