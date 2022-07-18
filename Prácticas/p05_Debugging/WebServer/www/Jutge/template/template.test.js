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

const main = require('./template.js');

test('Maximum sums', () => {
  expect(main('4   0 1 2 3')).toBe('6 6');
});


describe('Error argumento', () => {
  test('No hay argumento', () => {
    expect(() => main())
        .toThrow('Error argumento.');
  });
  test('null', () => {
    expect(() => main(null))
        .toThrow('Error argumento.');
  });
  test('undefined', () => {
    expect(() => main(undefined))
        .toThrow('Error argumento.');
  });
  test('Infinity', () => {
    expect(() => main(Infinity))
        .toThrow('Error argumento.');
  });

  test('NaN', () => {
    expect(() => main(NaN))
        .toThrow('Error argumento.');
  });
});
