/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Cliente de la clase que representa una fecha.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

import * as fs from 'fs';
import {fileURLToPath} from 'url';
import process from 'process';
const ARGUMENTOS = process.argv.slice(2);

import {Fechas} from './fechas-class.js';

const MESES = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
/*
/**
 * @description - Función que se encarga de realizar las pruebas unitarias.
 *
function pruebas() {
  const cumpleanos = new Fechas('August 19, 1975 23:15:30');
  console.log(cumpleanos.getFecha());

  console.log(cumpleanos.getDia());

  console.log(cumpleanos.getAnio());
  console.log(cumpleanos.getHoras());
  console.log(cumpleanos.getMinutos());
  console.log(cumpleanos.getSegundos());
  console.log(cumpleanos.getMes());
  console.log(cumpleanos.getTiempo());

  const ahora = new Fechas();
  console.log(ahora.getFecha());

  ahora.setFecha('August 19, 1975 23:15:30');
  ahora.setDia(10);
  ahora.setAnio(2020);
  ahora.setHoras(10);
  ahora.setMinutos(10);
  ahora.setSegundos(10);
  ahora.setMes('September');
  ahora.setTiempo('23:15:30');

  console.log(ahora.getFecha());
};
*/

/**
 * @description Procesa la fecha pasada como parámetro para que la clase pueda
 * trabajar con ella.
 * @param {String} fecha - Fecha a procesar.
 * @return {String} Devuelve la fecha como espera recibirla la clase.
 */
function procesarfecha(fecha) {
  const fechaProcesada = fecha.split('/');
  const dia = fechaProcesada[0];
  const mes = fechaProcesada[1];
  const anio = fechaProcesada[2];
  const hora = '00:00:00';
  const salida = `${MESES[mes - 1]} ${dia}, ${anio} ${hora}`;
  return salida;
};

/**
 * @description Calcula las N fechas posteriores a la fecha pasada como
 * parámetro.
 * @param {String} fecha
 * @param {Number} numero
 * @return {Array}
 */
const calcularFechasPosteriores = function(fecha, numero) {
  const fechaProcesada = procesarfecha(fecha);
  const fechasPosteriores = [];
  for (let i = 1; i <= numero; i++) {
    const fechas = new Fechas(fechaProcesada);
    fechas.sumarDias(i);
    fechasPosteriores.push(fechas);
  }
  return procesarSalida(fechasPosteriores);
};

/**
 * @description Procesa la salida de las fechas posteriores. Se devuelve una
 * cadena que unicamente contiene las fechas con el formato dd/mm/aa por línea.
 * @param {Array} fechasPosteriores - Array de objetos de tipo Fechas.
 * @return {String} - Cadena con las fechas en el formato dd/mm/aa por línea.
 */
const procesarSalida = function(fechasPosteriores) {
  let salida = '';
  for (let i = 0; i < fechasPosteriores.length; i++) {
    salida += fechasPosteriores[i].getDia() + '/' +
      fechasPosteriores[i].getMesNumero() + '/' +
      fechasPosteriores[i].getAnio() + '\n';
  }
  return salida;
};

/**
 * @description - Función que escribe en un fichero de texto.
 * @param {String} salida - Cadena con las fechas en el formato dd/mm/aa por
 * @param {String} nombreFichero - Nombre del fichero.
 */
function escribirFichero(salida, nombreFichero) {
  fs.writeFile(nombreFichero, salida, (err) => {
    if (err) {
      throw err;
    }
  });
}

export default {
  calcularFechasPosteriores,
  procesarSalida,
  escribirFichero,
};

/**
 * @description - Muestra por pantalla el uso.
 */
function usage() {
  console.log('Modo de uso: node fechas.js dd/mm/aa N fichero_salida.txt');
  console.log('Pruebe node fechas.js --help para más información');
}

/**
 * @description - Muestra por pantalla la ayuda.
 */
function help() {
  console.log('fechas.js -- Calcula las fechas a partir de una fecha dada y un numero de dias a sumar');
  console.log('Modo de uso: node fechas.js dd/mm/aa numero fichero_salida \n');
  console.log('fichero_entrada: Fecha de entrada en formato dd/mm/aa');
  console.log('numero: Número de días a sumar');
  console.log('fichero_salida: Fichero de texto que contendrá las fechas de salida');
}

/**
* @description Programa principal
**/
function main() {
  if (ARGUMENTOS.length === 0) {
    usage();
  } else if (ARGUMENTOS[0] === '--help' || ARGUMENTOS[0] === '-h') {
    help();
  } else {
    const salida =
      calcularFechasPosteriores(ARGUMENTOS[0], ARGUMENTOS[1]);
    escribirFichero(salida, ARGUMENTOS[2]);
    console.log(salida);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
