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

const intervalos = require('./intervals-(I)');

test('Intervals (1) 20 30   10 40', () => {
  expect(intervalos(20, 30, 10, 40)).toStrictEqual([20, 30]);
});
test('Intervals (1) 10 20   10 20', () => {
  expect(intervalos(10, 20, 10, 20)).toStrictEqual([10, 20]);
});
test('Intervals (1) 20 30   10 20', () => {
  expect(intervalos(20, 30, 10, 20)).toStrictEqual([20, 20]);
});
test('Intervals (1) 10 20   30 40', () => {
  expect(intervalos(10, 20, 30, 40)).toStrictEqual([]);
});
