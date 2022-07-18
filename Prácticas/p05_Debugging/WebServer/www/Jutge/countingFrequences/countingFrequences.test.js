/* eslint-disable max-len */
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 20 2022
 * @desc Pruebas unitarias
 *
 */

const main = require('./countingFrequences.js');

test('Counting frequences', () => {
  expect(main('7 1000000001 1000000011 1000000011 1000000004 1000000004 1000000200 1000000004'))
      .toBe('1000000001 : 1\n1000000004 : 3\n1000000011 : 2\n1000000200 : 1\n');
});


test('Counting frequences', () => {
  expect(main('9 1000000001 1000000011 1000000011 1000000004 1000000004 1000000200 1000000004'))
      .toBe('1000000001 : 1\n1000000004 : 3\n1000000011 : 2\n1000000200 : 1\n');
});

test('No hay argumento', () => {
  expect(() => main('3.2 1000000001 1000000011 1000000011 1000000004 1000000004 1000000200 1000000004'))
      .toThrow('No se han introducido los números correctos.');
});

test('No hay argumento', () => {
  expect(() => main('1 1000000001 1000000011 1000000011 1000000004 1000000004 1000000200 1000001001'))
      .toThrow('No se han introducido los números correctos.');
});

describe('Error argumentos', () => {
  test('No hay argumento', () => {
    expect(() => main())
        .toThrow('No se han introducido los números correctos.');
  });
  test('null', () => {
    expect(() => main(null))
        .toThrow('No se han introducido los números correctos.');
  });
  test('undefined', () => {
    expect(() => main(undefined))
        .toThrow('No se han introducido los números correctos.');
  });
});
