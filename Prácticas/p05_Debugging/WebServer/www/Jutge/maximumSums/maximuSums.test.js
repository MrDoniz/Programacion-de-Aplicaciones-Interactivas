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

const main = require('./maximuSums.js');

test('Maximum sums', () => {
  expect(main('4   0 1 2 3')).toBe('6 6');
});

test('Maximum sums', () => {
  expect(main('6   1 1 -9 2 0 1')).toBe('2 3');
});

test('Maximum sums', () => {
  expect(main('5   -5 -3 6 -1 -1')).toBe('0 4');
});

test('Maximum sums', () => {
  expect(() => main())
      .toThrow('No se han introducido los números correctos.');
});

test('Maximum sums', () => {
  expect(() => main(2))
      .toThrow('No se han introducido los números correctos.');
});

test('Maximum sums', () => {
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
