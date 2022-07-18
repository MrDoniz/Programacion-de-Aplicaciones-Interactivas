/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 12 2022
 * @desc Pruebas unitarias
 *
 */

const mayorFactorPrimo = require('./largestPrimeFactor.js');

test('Largest prime factor ', () => {
  expect(mayorFactorPrimo(2)).toEqual(2);
});
test('Largest prime factor  ', () => {
  expect(mayorFactorPrimo(12)).toEqual(3);
});
test('Largest prime factor ', () => {
  expect(mayorFactorPrimo(23)).toEqual(23);
});
test('Largest prime factor ', () => {
  expect(mayorFactorPrimo(49)).toEqual(7);
});
test('Largest prime factor ', () => {
  expect(mayorFactorPrimo(50)).toEqual(5);
});
test('Largest prime factor ', () => {
  expect(() => mayorFactorPrimo()).toThrow(
      new Error('No se han introducido un número.'),
  );
});
test('Largest prime factor ', () => {
  expect(() => mayorFactorPrimo([1, 2])).toThrow(
      new Error('No se han introducido un número.'),
  );
});

