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

const codigoCifrado = require('./codeCipher.js');

test('Code cipher', () => {
  expect(codigoCifrado(2077)).toBe('+**++**');
});
test('Code cipher', () => {
  expect(codigoCifrado(-2077)).toBe(':+**++**');
});
test('Code cipher', () => {
  expect(codigoCifrado(0)).toBe('-');
});
test('Code cipher', () => {
  expect(codigoCifrado(31)).toBe('++-+');
});
test('Code cipher', () => {
  expect(codigoCifrado(257)).toBe('*++--+');
});
test('Code cipher', () => {
  expect(codigoCifrado(5766)).toBe('-*+-**+*');
});
test('Code cipher', () => {
  expect(() => codigoCifrado())
      .toThrow('Argumento no válido.');
});
test('Code cipher', () => {
  expect(() => codigoCifrado([1, 2]))
      .toThrow('Argumento no válido.');
});

describe('Error de formato', () => {
  test('Object', () => {
    expect(() => codigoCifrado({})).toThrow('Argumento no válido.');
  });
  test('Undefined', () => {
    expect(() => codigoCifrado(undefined)).toThrow('Argumento no válido.');
  });
  test('Nulls', () => {
    expect(() => codigoCifrado(null)).toThrow('Argumento no válido.');
  });
});
