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

// Retorna el valor de la suma de los divisores del número introducido.
const sumaDivisores = function(numero) {
  let sum = 0;
  for (let i = 1; i <= numero; i++)
    if (numero % i == 0)
      sum += i;
  return sum;
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
    console.log("sum_divisors(" + numero + ") → "+ sumaDivisores(numero));
  }
}

if (require.main === module) {
  main();
}