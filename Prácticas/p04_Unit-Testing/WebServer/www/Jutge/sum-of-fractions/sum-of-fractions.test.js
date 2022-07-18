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

const sumaFracciones = require('./sum-of-fractions.js');

test('Sum of fractions 1 3 1', () => {
  expect(sumaFracciones(1, 3, 1)).toEqual(1.8333);
});
test('Sum of fractions 5 5 2', () => {
  expect(sumaFracciones(5, 5, 2)).toEqual(0.2000);
});
test('Sum of fractions 5 6 2', () => {
  expect(sumaFracciones(5, 6, 2)).toEqual(0.2000);
});
test('Sum of fractions 5 7 2', () => {
  expect(sumaFracciones(5, 7, 2)).toEqual(0.3429);
});
