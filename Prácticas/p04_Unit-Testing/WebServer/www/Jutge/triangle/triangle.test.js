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

const triangulo = require('./triangle.js');

test('The sequence of Collatz 4', () => {
  expect(triangulo(3)).toBe('*\n**\n***\n****\n');
});
test('The sequence of Collatz 6', () => {
  expect(triangulo(6)).toBe('*\n**\n***\n****\n*****\n******\n');
});
