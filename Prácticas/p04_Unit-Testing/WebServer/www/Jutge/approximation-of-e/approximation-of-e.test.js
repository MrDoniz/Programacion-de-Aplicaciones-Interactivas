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

const aproximacionOfE = require('./approximation-of-e');

test('Approximation of e 0', () => {
  expect(aproximacionOfE(0)).toBe('With 0 term(s) we get 0.0.');
});
test('Approximation of e 1', () => {
  expect(aproximacionOfE(1)).toBe('With 0 term(s) we get 1.0.');
});
test('Approximation of e 3', () => {
  expect(aproximacionOfE(3)).toBe('With 0 term(s) we get 2.5.');
});
test('Approximation of e 20', () => {
  expect(aproximacionOfE(20)).toBe('With 0 term(s) we get 2.7.');
});
