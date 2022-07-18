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

const main = require('./wordsBetweenTwoWords.js');

test('Words between two words', () => {
  expect(main(
      'hi how are you beginning we are inside yes we are inside end bye'))
      .toBe(7);
});

test('Words between two words', () => {
  expect(main('hello beginning bye')).toBe('wrong sequence');
});

test('Words between two words', () => {
  expect(main('beginning we end')).toBe(1);
});

test('Words between two words', () => {
  expect(() => main())
      .toThrow('No se han introducido los números correctos.');
});

test('Words between two words', () => {
  expect(() => main(2))
      .toThrow('No se han introducido los números correctos.');
});

test('Words between two words', () => {
  expect(() => main([1, 2]))
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
