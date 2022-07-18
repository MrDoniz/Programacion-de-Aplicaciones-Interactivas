/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 07 2022
 * @desc Leap years
 *       Write a program that tells if a year is or is not a leap year. A leap year has 366 
 *       days. After the Gregorian reform, the leap years are those multiple of four that do 
 *       not end with two zeros, and also the years ending with two zeros such that, after 
 *       removing these two zeros, are divisible by four. Thus, 1800 and 1900, although being 
 *       multiples of four, were not leap years; by contrast, 2000 was a leap year. Input 
 *       consists of a natural number between 1800 and 9999. If the year is a leap year, print 
 *       “YES”; otherwise print “NO”.
 * @see {@link https://jutge.org/problems/P61634}
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

function main() {
  const argumentos = process.argv.slice(1);
  let valor = Number(argumentos[1]);
  if (Number.isNaN(valor) || valor < 1800 || valor > 9999) 
    console.log("");
  else
    console.log(bisiesto(valor) ? "YES" : "NO");
}

if (require.main === module) {
  main();
}