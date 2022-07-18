/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 12 2022
 * @desc Sum of fractions
 *       Write a program that reads triples of natural Numbers a, b and k, and
 *       for each one computes and prints the result of for all fractions with
 *       denominator smaller than or equal to b. Input consists of several
 *       triples of natural Numbers a, b and k, such that 1 ≤ a≤ b and k ≥ 1.
 *       For each triple, print in a line the result of the sum with four
 *       digits after the decimal point.
 * @see {@link https://jutge.org/problems/P76024_en}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
 * @description Calcula la suma de fracciones de un número
 * @param {Number} numero1 - Primer número
 * @param {Number} numero2 - Segundo número
 * @param {Number} numero3 - Tercer número
 * @return {Number} - Suma de fracciones
 */
const sumaFracciones = function(numero1, numero2, numero3) {
  let sumador = 0;
  let denominador = 0;
  for (let i = 0; i < numero2; ++i) {
    denominador = numero1 + numero3 * i;
    if (denominador <= numero2) {
      sumador += 1 / denominador;
    } else {
      break;
    }
  }
  return sumador.toFixed(4);
};
module.exports = sumaFracciones;

/**
 * @description - Lee los números introducidos por el usuario
 * @return {Array} - Vector con los números introducidos por el usuario
**/
const procesarEntrada = function() {
  const argumentos = process.argv.slice(1);
  const vectorArgumentos = argumentos.map(Number);
  vectorArgumentos.shift();
  if (vectorArgumentos.length === 3) {
    return vectorArgumentos;
  } else {
    console.log('No has introducido los números correctamente.');
  }
};

/**
 * @description Programa principal
**/
function main() {
  const vectorEntrada = procesarEntrada();
  if (vectorEntrada !== undefined) {
    console.log(sumaFracciones(vectorEntrada[1], vectorEntrada[2],
        vectorEntrada[3]));
  }
}

if (require.main === module) {
  main();
}
