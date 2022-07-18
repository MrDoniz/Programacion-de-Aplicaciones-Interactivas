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

// Retorna el valor de la serie de armonicos.
const calculaArmonico = function(valor) {
  let sum = 0;
  for (let i = 1; i <= valor; i++) {
    sum += 1 / i;
  }
  return sum;
}

// Retorna el valor de la serie de armonicos.
const armonicos = function(valor1, valor2) {
  if (valor1 >= valor2) {
    let sum = calculaArmonico(valor1) - calculaArmonico(valor2);
    console.log(sum.toFixed(10));
  } else {
    console.log("The input is negative.");
  }
}

function main() {
  // Vector que almacena los números introducidos por el usuario en la consola.
  const argumentos = process.argv.slice(2);
  let valor1 = Number(argumentos[0]);
  let valor2 = Number(argumentos[1]);
  // Compruebo que los argumentos introducidos por el usuario son números.
  if (Number.isNaN(valor1) || Number.isNaN(valor2))
    console.log("The input is not a number.");
  else
    armonicos(valor1, valor2);
}

if (require.main === module) {
  main();
}