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

const sumaDeDigitos = require('./sum-of-Digits.js');

test('Statistical measures 29', () => {
  expect(sumaDeDigitos(29)).toBe('The sum of the digits of 29 is 11.');
});
test('Statistical measures 7', () => {
  expect(sumaDeDigitos(7)).toBe('The sum of the digits of 7 is 7.');
});
test('Statistical measures 0', () => {
  expect(sumaDeDigitos(0)).toBe('The sum of the digits of 0 is 0.');
});
test('Statistical measures 1020', () => {
  expect(sumaDeDigitos(1020)).toBe('The sum of the digits of 1020 is 3.');
});
