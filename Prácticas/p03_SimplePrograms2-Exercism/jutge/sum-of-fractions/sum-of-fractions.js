/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 07 2022
 * @desc Sum of fractions
 *       Write a program that reads triples of natural numbers a, b and k, and for each one 
 *       computes and prints the result of for all fractions with denominator smaller than or 
 *       equal to b. Input consists of several triples of natural numbers a, b and k, such that 
 *       1 ≤ a≤ b and k ≥ 1. For each triple, print in a line the result of the sum with four 
 *       digits after the decimal point.
 * @see {@link https://jutge.org/problems/P97969}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

 'use strict';

/**
 * @param {number} numeros - Vector con los tres números
 * @returns {number} - Suma de fracciones
 * @description Calcula la suma de fracciones de un número
 */
const sumaFracciones = function(numeros) {
  let number1 = numeros[0];
  let number2 = numeros[1];
  let number3 = numeros[2];
  let summation = 0;
  let denominator = 0;
  for (let i = 0; i < number2; ++i) {
    denominator = number1 + number3 * i;
    if (denominator <= number2) {
      summation += 1 / denominator;
    } else {
      break;
    }
  }
  return summation.toFixed(4);
}

function main() {
  // Introduce tres números por argumento y los almaceno en un vector
  const argumentos = process.argv.slice(1);
  const numeros = argumentos.map(Number);
  console.log()
  numeros.shift();
  // Si no se introducen tres números, no se puede calcular la suma de fracciones
  if (argumentos.length != 4)
    console.log("Error");
  else
    console.log(sumaFracciones(numeros));
}

if (require.main === module) {
  main();
}