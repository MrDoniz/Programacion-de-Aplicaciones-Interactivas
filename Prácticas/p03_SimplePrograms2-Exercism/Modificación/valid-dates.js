/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 09 2022
 * @desc Valid dates
 *       Write a function that tells if the date defined by a day d, month m and year y is 
 *       valid or not. To write this function, it is convinient to use the function for leap 
 *       years of the exercise P95401: “Function for leap years”.  Precondition The 
 *       parameter y is between 1800 and 9999, both included. Observation You only need to 
 *       submit the required procedure; your main program will be ignored. 
 * @see {@link https://jutge.org/problems/P58459_en}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

 'use strict';

/**
 * @param {number} valor - Año
 * @returns {number} - True si es bisiesto, false en caso contrario
 * @description Calcula si un año es bisiesto
 */
 const bisiesto = function(valor) {
  if (valor % 4 === 0 && valor % 100 !== 0 || valor % 400 === 0)
    return true;
  else
    return false;
}

/**
 * @param {number} numeros - Vector con los números de día, mes y año
 * @returns {boolean} - Devuelve true si la fecha es válida, false en caso contrario
 * @description Función que comprueba si una fecha es válida o no
 */
const esValida = function(numeros) {
  let d = numeros[0];
  let m = numeros[1];
  let a = numeros[2];
  // Se comprueba si el año es bisiesto
  if (bisiesto(a)) {
    // Se comprueba si el mes es de febrero
    if (m == 2) {
      // Se comprueba si el día es mayor que 29
      if (d > 29)
        return false;
      else
        return true;
    }
  }
}

function main() {
  // Se introduce una serie de números
  const argumentos = process.argv.slice(1);
  let vector = argumentos.map(Number);
  // Se quita el primer valor
  vector.shift();
  // Se comprueba si el vector está vacío o si no tiene 3 números
  if (vector.length == 0 || vector.length != 3)
    console.log("");
  else
    if (esValida(vector))
      console.log("true");
    else
      console.log("false");
}

if (require.main === module) {
  main();
}