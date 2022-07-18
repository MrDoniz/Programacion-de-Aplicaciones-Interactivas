/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 20 2022
 * @desc Valid dates
 *       Write a function that tells if the date defined by a day d, month m
 *       and year y is valid or not. To write this function, it is convinient
 *       to use the function for leap years of the exercise P95401: “Function
 *       for leap years”. Precondition The parameter y is between 1800 and
 *       9999, both included. Observation You only need to submit the required
 *       procedure; your main program will be ignored.
 * @see {@link https://jutge.org/problems/P58459_en}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
 * @description Calcula si un año es bisiesto
 * @param {number} anio - Año
 * @return {number} - True si es bisiesto, false en caso contrario
 */
const bisiesto = function(anio) {
  if (anio % 4 === 0 && anio % 100 !== 0 || anio % 400 === 0) {
    return true;
  }
  return false;
};

/**
 * @description Función que comprueba si una fecha es válida o no
 * @param {Number} dia - Día introducido por el usuario
 * @param {Number} mes - Mes introducido por el usuario
 * @param {Number} anio - Año introducido por el usuario
 * @return {boolean} - Devuelve true si la fecha es válida, false en caso
 *  contrario
 */
const fechaValida = function(dia, mes, anio) {
  if (bisiesto(anio)) {
    if (mes == 2) {
      if (dia > 29) {
        return false;
      } else {
        return true;
      }
    }
  }
  return false;
};

/**
 * @description - Comprueba que los argumentos introducidos por el usuario
 * @param {Array} numeros - Vector con los números introducidos por el
 * usuario
 * @return {String} - Devuelve true si la fecha es válida, false en caso
**/
const comprueboEntrada = function(numeros = -1) {
  if (numeros === undefined || numeros === null || numeros === NaN ||
    Number.isNaN(numeros)) {
    throw new Error('No se han introducido los números correctos.');
  } else if (numeros.length !== 3 || numeros === -1) {
    throw new Error('No se han introducido los números correctos.');
  } else if (!Number.isInteger(numeros[0]) || !Number.isInteger(numeros[1]) ||
             !Number.isInteger(numeros[2])) {
    throw new Error('Los números introducidos no son válidos.');
  }
  return String(fechaValida(numeros[0], numeros[1], numeros[2]));
};

module.exports = comprueboEntrada;

/**
 * @description - Lee los números introducidos por el usuario
 * @return {Array} - Vector con los números introducidos por el usuario
**/
const procesarEntrada = function() {
  // eslint-disable-next-line max-len
  const argumentos = process.argv.slice(1);
  const vectorArgumentos = argumentos.map(Number);
  vectorArgumentos.shift();
  return vectorArgumentos;
};

/**
 * @description Programa principal
**/
function main() {
  const vectorEntrada = procesarEntrada();
  if (vectorEntrada !== undefined) {
    comprueboEntrada(vectorEntrada);
    console.log(fechaValida(vectorEntrada[0], vectorEntrada[1],
        vectorEntrada[2]));
  }
}

if (require.main === module) {
  main();
}
