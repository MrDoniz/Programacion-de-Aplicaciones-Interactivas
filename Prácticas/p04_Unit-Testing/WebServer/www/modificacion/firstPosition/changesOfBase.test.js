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

const cambiarBase = require('./changesOfBase.js');

test('First position', () => {
  expect(cambiarBase([1, 3, 5, 7, 9, 0, 2, 4, 6, 8])).toEqual(6);
});
test('First position ', () => {
  expect(cambiarBase([16, 8, 4, 2])).toEqual(1);
});
test('First position', () => {
  expect(cambiarBase([1])).toBe('El vector no contiene números pares');
});
test('First position', () => {
  expect(cambiarBase([])).toBe('El vector no contiene números pares');
});
test('First position', () => {
  expect(cambiarBase('a')).toBe('El vector no contiene números pares');
});
test('First position', () => {
  expect(cambiarBase([16, 8, 4, 2, 16, 82])).toEqual(1);
});
test('First position', () => {
  expect(cambiarBase([1, 3, 5, 7, 9, 7, 1, 9, 1, 3]))
      .toBe('El vector no contiene números pares');
});
