/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 12 2022
 * @desc Is it a palindrome?
 *       Write a function that tells if s is a palindrome or not. Remember that
 *       a word is a palindrome if it reads the same from left to right than
 *       from right to left. In this exercise, s can be rather large; this is
 *       why it is passed by reference.In order to compare the efficiency of
 *       your solution against the efficiency of the solution of the Judge,
 *       start checking s from its ends.
 * @see {@link https://jutge.org/problems/P50497_en}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
 * @description Retorna una cadena invertida
 * @param {String} cadena - Palabra a invertir
 * @return {String} - Palabra invertida
**/
const inverso = function(cadena) {
  let cadenaInvertida = '';
  for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
  }
  return cadenaInvertida;
};

/**
 * @description Retorna true si la palabra es palíndromo
 * @param {String} palabra - Palabra a comprobar
 * @return {Boolean} - True si la palabra es palíndromo
**/
const palindromo = function(palabra) {
  const palabraInvertida = inverso(palabra);
  return palabra == palabraInvertida;
};
module.exports = palindromo;

/**
 * @description - Lee los números introducidos por el usuario
 * @return {String} - Cadena introducida por el usuario
**/
const procesarEntrada = function() {
  const argumentos = process.argv.slice(1);
  const cadenaArgumento = String(argumentos[1]);
  return cadenaArgumento;
};

/**
 * @description Programa principal
**/
function main() {
  const cadenaEntrada = procesarEntrada();
  if (cadenaEntrada !== undefined) {
    console.log(palindromo(cadenaEntrada) ? 'Es palindromo' :
    'No es palindromo');
  }
}

if (require.main === module) {
  main();
}
