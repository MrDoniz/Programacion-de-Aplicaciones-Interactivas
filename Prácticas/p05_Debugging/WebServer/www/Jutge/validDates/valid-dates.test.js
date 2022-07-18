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

const comprueboEntrada = require('./valid-dates.js');

test('Valid dates', () => {
  expect(comprueboEntrada([19, 2, 2000])).toBe('true');
});

test('Valid dates', () => {
  expect(comprueboEntrada([29, 2, 3000])).toBe('false');
});

test('Valid dates', () => {
  expect(comprueboEntrada([-3, 14, 2000])).toBe('false');
});

test('Valid dates', () => {
  expect(comprueboEntrada([1, -10, 1984])).toBe('false');
});

test('Valid dates', () => {
  expect(() => comprueboEntrada([1, 2]))
      .toThrow('No se han introducido los números correctos.');
});

test('Valid dates', () => {
  expect(() => comprueboEntrada())
      .toThrow('No se han introducido los números correctos.');
});

test('Valid dates', () => {
  expect(() => comprueboEntrada(2))
      .toThrow('No se han introducido los números correctos.');
});

test('Valid dates', () => {
  expect(() => comprueboEntrada('a'))
      .toThrow('No se han introducido los números correctos.');
});

describe('Error argumentos', () => {
  test('No hay argumento', () => {
    expect(() => comprueboEntrada())
        .toThrow('No se han introducido los números correctos.');
  });
  test('null', () => {
    expect(() => comprueboEntrada(null))
        .toThrow('No se han introducido los números correctos.');
  });
  test('undefined', () => {
    expect(() => comprueboEntrada(undefined))
        .toThrow('No se han introducido los números correctos.');
  });
});
