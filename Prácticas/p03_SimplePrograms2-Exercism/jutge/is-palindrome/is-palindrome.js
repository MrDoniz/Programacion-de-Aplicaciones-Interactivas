/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 07 2022
 * @desc Is it a palindrome?
 *       Write a function that tells if s is a palindrome or not. Remember that a word is a 
 *       palindrome if it reads the same from left to right than from right to left. In this 
 *       exercise, s can be rather large; this is why it is passed by reference. In order to 
 *       compare the efficiency of your solution against the efficiency of the solution of the 
 *       Judge, start checking s from its ends.
 * @see {@link https://jutge.org/problems/P97969}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

 'use strict';

/** 
 * @param {string} palabra - Palabra a invertir
 * @returns {string} - Palabra invertida
 * @description Retorna una cadena invertida
*/
const inverso = function(cadena) {
  let cadenaInvertida = "";
  for (let i = cadena.length - 1; i >= 0; i--)
    cadenaInvertida += cadena[i];
  return cadenaInvertida;
}

 /**
  * @param {string} palabra - Palabra a comprobar
  * @returns {boolean} - True si la palabra es palíndromo
  * @description Retorna true si la palabra es palíndromo
  */
 const palindromo = function(palabra) {
  let palabraInvertida = inverso(palabra);
  return palabra == palabraInvertida;
}

function main() {
  const argumentos = process.argv.slice(1);
  const palabra = argumentos[1];
  if (argumentos.length == 1)
    console.log("");
  else
    if (palindromo(palabra))
      console.log("Es palindromo");
    else
      console.log("No es palindromo");
}

if (require.main === module) {
  main();
}