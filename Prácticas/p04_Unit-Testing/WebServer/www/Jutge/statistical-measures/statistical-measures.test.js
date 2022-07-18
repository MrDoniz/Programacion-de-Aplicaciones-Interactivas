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

const medidasStadisticas = require('./statistical-measures');

test('Statistical measures 2', () => {
  expect(medidasStadisticas(2)).toBe('');
});
test('Statistical measures 4 4.2 8.7 10 6.3', () => {
  expect(medidasStadisticas(4, 4.2, 8.7, 10, 6.3))
      .toBe('4.2000 10.0000 7.3000');
});
test('Statistical measures 3 -10 0 8', () => {
  expect(medidasStadisticas(3, -10, 0, 8)).toBe('-10.0000 8.0000 -0.6667');
});
