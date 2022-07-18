/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Feb 18 2022
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

 'use strict';

// Retorna true si la letra es una vocal.
// Retorna false si la letra no es una vocal.
const comprueboVocal = (letra) => {
  const a = "a";
  const e = "e";
  const i = "i";
  const o = "o";
  const u = "u";
  switch (letra.toLowerCase()) {
    case a:
    case e:
    case i:
    case o:
    case u:
      return true;
    default:
      return false;
  }
}

// Retorna true si la letra es mayúscula.
// Retorna false si la letra no es mayúscula.
const comprueboMayucula = (letra) => {
  if (letra == letra.toUpperCase()) {
    return true;
  }
  return false;
}

function main() {
  const argumentos = process.argv.slice(2);
  let letra = String(argumentos[0]);
  // Compruebo que sea un caracter y no un numero
  if (letra.length == 1 && isNaN(letra)) {
    if (comprueboMayucula(letra))
      console.log("uppercase");
    else
      console.log("lowercase");

    if (comprueboVocal(letra))
      console.log("vowel");
    else
      console.log("consonant");
  } else {
    console.log("invalid");
  }
}
if (require.main === module) {
  main();
}