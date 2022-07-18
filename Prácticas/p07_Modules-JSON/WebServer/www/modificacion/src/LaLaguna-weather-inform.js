/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Metereología
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

import * as fs from 'fs';
import {fileURLToPath} from 'url';
import process from 'process';

/**
 * @description - Devuelve a velocidad maximo del viento observada
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Contiene la velocidad maxima del viento.
 */
const maximoViento = function(datos) {
  let velocidad = 0;
  for (const estacionActual in datos) {
    if (parseFloat(datos[estacionActual].vmax) > velocidad) {
      velocidad = parseFloat(datos[estacionActual].vmax);
    }
  }
  return velocidad;
};

/**
 * @description - Devuelve la fecha y hora más antigua y más reciente de
 * la estacion.
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Contiene 2 fechas, la más antigua y la más reciente.
 */
const fechaHoraExtremas = function(datos) {
  let fechaInicio = '';
  let fechaFinal = '';
  for (const estacionActual in datos) {
    if (fechaInicio === '') {
      fechaInicio = datos[estacionActual].fint;
    }
    if (fechaFinal === '') {
      fechaFinal = datos[estacionActual].fint;
    }
    if (datos[estacionActual].fint < fechaInicio) {
      fechaInicio = datos[estacionActual].fint;
    }
    if (datos[estacionActual].fint > fechaFinal) {
      fechaFinal = datos[estacionActual].fint;
    }
  }
  const cadena = 'La fecha más antigua es: ' + fechaInicio +
  ' y la más reciente es: ' + fechaFinal;
  return cadena;
};

/**
 * @description - Procesa el fichero y devuelve un objeto con todo el contenido
 * de este.
 * @param {String} nombreFichero - Nombre del fichero
 * @return {Object} - Objeto que almacena el contenido del fichero.
 */
const leerJson = function(nombreFichero) {
  try {
    const json = fs.readFileSync(nombreFichero, 'utf8');
    const informacion = JSON.parse(json);
    return informacion;
  } catch (err) {
    throw new TypeError('El fichero no existe o no se puede leer.');
  }
};

/**
* @description Programa principal
**/
function main() {
  const nombreFichero = 'json/datos-la-laguna.json';
  const json = leerJson(nombreFichero);
  console.log('La fecha y hora extremas');
  console.log(fechaHoraExtremas(json) + '\n');
  console.log('El nombre de la estación con menor altitud');
  console.log(maximoViento(json) + '\n');
  console.log('Nombre de todas las estaciones de SC de Tenerife');
  //console.log(esacionesSCTenerife(json));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
