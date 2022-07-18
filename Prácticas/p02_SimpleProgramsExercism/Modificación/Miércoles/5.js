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

// Retorna true si el número es primo. 
// False en caso contrario.
const esPrimo = function(numero) {
  let i = 2;
  let primo = true;
  while (i < numero && primo) {
    if (numero % i === 0) {
      primo = false;
    }
    i++;
  }
  if (primo)
    return true;
  return false;
}

function main() {
  const argumentos = process.argv.slice(2);
  let numero = Number(argumentos[0]);
  if (Number.isNaN(numero)) {
    console.log("The input is not a number.");
  }
  else if (numero < 0) {
    console.log("The input is negative.");
  } else {
    if(esPrimo(numero))
      console.log(numero + " is prime");
    else
      console.log(numero + " is not prime");
  }
}

if (require.main === module) {
  main();
}