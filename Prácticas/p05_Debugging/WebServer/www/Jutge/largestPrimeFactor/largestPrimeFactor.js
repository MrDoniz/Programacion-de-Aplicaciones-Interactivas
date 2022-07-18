/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 17 2022
 * @desc Largest prime factor
 *       Implement an efficient function that returns the largest prime factor
 *       of n. It holds n ≥ 2. Observation You only need to submit the required
 *       procedure; your main program will be ignored.
 * @see {@link https://jutge.org/problems/P15695_en}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
  * @description - Comprueba si un número es primo
  * @param {Number} numero - Numero a comprobar
  * @return {Boolean} - True si es primo, false si no lo es
**/
function esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

/**
  * @description - Calcula el valor del mayor factor primo de un número
  * @param {Number} valorEntrada - Valor introducido por el usuario
  * @return {Number} - Valor del mayor factor primo de un número
**/
function mayorFactorPrimo(valorEntrada = -1) {
  if (valorEntrada === -1 || Array.isArray(valorEntrada ||
    !Number.isNaN(valorEntrada)) || typeof valorEntrada !== 'number') {
    throw new Error('No se han introducido un número.');
  }
  let mayorFactor = 0;
  for (let i = 2; i < valorEntrada; i++) {
    if (esPrimo(i) && valorEntrada % i === 0) {
      mayorFactor = i;
    }
  }
  if (mayorFactor === 0) {
    return esPrimo(valorEntrada) ? valorEntrada :
     'El número no tiene factores primos';
  }
  return mayorFactor;
};
module.exports = mayorFactorPrimo;

/**
 * @description - Lee los números introducidos por el usuario
 * @return {Number} - Valor introducido por el usuario
**/
const procesarEntrada = function() {
  const argumentos = process.argv.slice(1);
  const valorArgumento = Number(argumentos[1]);
  if (!Number.isNaN(valorArgumento)) {
    return valorArgumento;
  } else {
    console.log('No has introducido los números correctamente.');
  }
};

/**
 * @description Programa principal
**/
function main() {
  const valorEntrada = procesarEntrada();
  if (valorEntrada !== undefined) {
    mayorFactorPrimo(valorEntrada);
  }
}

if (require.main === module) {
  main();
}
