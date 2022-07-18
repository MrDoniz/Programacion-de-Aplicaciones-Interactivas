/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 11 2022
 * @desc Add one second
 *       Write a program that adds one second to a clock time, given its hours,
 *       minutes and seconds. Input consists of three natural Numbers h, m and
 *       s that represent a clock time, that is, such that h<24, m<60 and s<60.
 *       Print the new clock time defined by h, m and s plus one second in the
 *       format “HH:MM:SS”.
 * @see {@link https://jutge.org/problems/P34279}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
 * @description - Cambia el formato de salida
 * @param {Number} horas - Horas
 * @param {Number} minutos - Minutos
 * @param {Number} segundos - Segundos
 * @return {String} - Cadena de salida
**/
function cambiarFormato(horas, minutos, segundos) {
  segundos = String(segundos).padStart(2, '0');
  minutos = String(minutos).padStart(2, '0');
  horas = String(horas).padStart(2, '0');
  return (`${horas}:${minutos}:${segundos}`);
}

/**
 * @description - Añade un segundo a la hora
 * @param {Number} horas - Horas
 * @param {Number} minutos - Minutos
 * @param {Number} segundos - Segundos
 * @return {String} - Cadena de salida
**/
function sumarUnSegundo(horas, minutos, segundos) {
  let suma = segundos + 1;
  if (suma === 60) {
    suma = 0;
    minutos = minutos + 1;
  }
  if (minutos === 60) {
    minutos = 0;
    horas = horas + 1;
  }
  if (horas === 24) {
    horas = 0;
  }
  return cambiarFormato(horas, minutos, suma);
};

module.exports = sumarUnSegundo;

/**
 * @description - Lee los números introducidos por el usuario
 * @return {Array} - Vector con los números introducidos por el usuario
**/
const procesarEntrada = function() {
  // eslint-disable-next-line max-len
  const argumentos = process.argv.slice(1);
  const vectorArgumentos = argumentos.map(Number);
  vectorArgumentos.shift();
  const horas = parseInt(vectorArgumentos[0]);
  const minutos = parseInt(vectorArgumentos[1]);
  const segundos = parseInt(vectorArgumentos[2]);
  if (!Number.isNaN(horas) && horas >= 0) {
    if (!Number.isNaN(minutos) && minutos >= 0 && minutos <= 60) {
      if (!Number.isNaN(segundos) && segundos >= 0 && segundos <= 60) {
        return vectorArgumentos;
      } else {
        console.log('El número de segundos debe ser menor que 60.');
      }
    } else {
      console.log('El número de minutos debe ser menor que 60.');
    }
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
    console.log(sumarUnSegundo(parseInt(vectorEntrada[0]),
        parseInt(vectorEntrada[1]), parseInt(vectorEntrada[2])));
  }
}

if (require.main === module) {
  main();
}
