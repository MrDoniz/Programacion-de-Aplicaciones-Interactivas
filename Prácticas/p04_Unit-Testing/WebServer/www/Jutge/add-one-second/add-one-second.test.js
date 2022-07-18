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

const sumarUnSegundo = require('./add-one-second.js');

test('Add one second 11 33 15', () => {
  expect(sumarUnSegundo(11, 33, 15)).toEqual('11:33:16');
});
test('Add one second 19 45 59', () => {
  expect(sumarUnSegundo(19, 45, 59)).toEqual('19:46:00');
});
test('Add one second 12 59 59', () => {
  expect(sumarUnSegundo(12, 59, 59)).toEqual('13:00:00');
});
test('Add one second 3 5 9', () => {
  expect(sumarUnSegundo(3, 5, 9)).toEqual('03:05:10');
});
test('Add one second 0 1 2', () => {
  expect(sumarUnSegundo(0, 1, 2)).toEqual('00:01:03');
});
