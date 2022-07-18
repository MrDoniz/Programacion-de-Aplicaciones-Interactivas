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
 * @description - Devuelve los nombres de todas las estaciones de la provincia
 * de SC de Tenerife
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Cadena que contiene todos los nombres de las estaciones
 */
const esacionesSCTenerife = function(datos) {
  let cadena = '';
  for (const estacionActual in datos) {
    if (datos[estacionActual].provincia === 'STA. CRUZ DE TENERIFE') {
      cadena += datos[estacionActual].nombre + '\n';
    }
  }
  return cadena;
};

/**
 * @description - Devuelve la estación con menor altitud.
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - El nombre de la estación con menor altitud de las del
 * inventario.
 */
const estacionMenorAltitud = function(datos) {
  let menor = Infinity;
  let estacion = '';
  for (const estacionActual in datos) {
    if (parseInt(datos[estacionActual].altitud) < menor) {
      menor = parseInt(datos[estacionActual].altitud);
      estacion = datos[estacionActual].nombre;
    }
  }
  return estacion;
};

// 
/**
 * @description - Devuelve la estación con mayor altitud.
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - El nombre de la estación con mayor altitud de las del
 * inventario.
 */
const estacionMayorAltitud = function(datos) {
  let mayor = -Infinity;
  let estacion = '';
  for (const estacionActual in datos) {
    if (parseInt(datos[estacionActual].altitud) > mayor) {
      mayor = parseInt(datos[estacionActual].altitud);
      estacion = datos[estacionActual].nombre;
    }
  }
  return estacion;
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
  const nombreFichero = 'json/datos-aemet.json';
  const json = leerJson(nombreFichero);
  console.log('El nombre de la estación con mayor altitud');
  console.log(estacionMayorAltitud(json) + '\n');
  console.log('El nombre de la estación con menor altitud');
  console.log(estacionMenorAltitud(json) + '\n');
  console.log('Nombre de todas las estaciones de SC de Tenerife');
  console.log(esacionesSCTenerife(json));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
