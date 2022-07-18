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

const palindromo = require('./is-palindrome');

test('Is it a palindrome? hola', () => {
  expect(palindromo(0)).toBe('No es palindromo');
});
test('Is it a palindrome? holaloh', () => {
  expect(palindromo(1)).toBe('Es palindromo');
});
test('Is it a palindrome? luz', () => {
  expect(palindromo(3)).toBe('Es palindromo');
});
test('Is it a palindrome? anita', () => {
  expect(palindromo(20)).toBe('Es palindromo');
});
