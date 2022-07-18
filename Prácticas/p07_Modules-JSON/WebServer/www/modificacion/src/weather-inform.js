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
 * @description - Devuelve una cadena que contiene el mayor periodo de tiempo
 * sin lluvia consecutivo
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Contiene las fechas y el número de dias
 */
const periodoSinLluvia = function(datos) {
  let dias = 0;
  let fechaInicio;
  let fechaFinal;
  for (const estacionActual in datos) {
    if (parseInt(datos[estacionActual].prec) === 0) {
      dias++;
      if (dias === 1) {
        fechaInicio = datos[estacionActual].fecha;
      }
    } else {
      if (dias > 0) {
        fechaFinal = datos[estacionActual].fecha;
      }
      dias = 0;
    }
  }
  const cadena = dias + ' días.' + ' Comenzó el: ' + fechaInicio +
  ' y finalizó el: ' + fechaFinal;
  return cadena;
};

/**
 * @description - Devuelve una cadena que contiene el dia con mayor
 * precipitacion
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Contiene la fecha y cantidad de precipitacion.
 */
const precipitacion = function(datos) {
  let cadena = '';
  let cantidad = -Infinity;
  for (const estacionActual in datos) {
    if (parseFloat(datos[estacionActual].prec) > cantidad) {
      cantidad = parseFloat(datos[estacionActual].prec);
      cadena = 'Fecha: ' + datos[estacionActual].fecha + ' ' +
      'Cantidad: ' + datos[estacionActual].prec + ' mm';
    }
  }
  return cadena;
};

/**
 * @description - Devuelve una cadena que contiene la fecha y hora del dia con
 * temperatura segun el tipo que sea..
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @param {String} tipo - Tipo de temperatura que se quiere saber.
 * @return {String} - Contiene la fecha y hora del dia con temperatura.
 */
const temperatura = function(datos, tipo) {
  let cadena = '';
  let temperaturaMenos = -Infinity;
  let temperaturaMas = Infinity;
  if (tipo === 'baja') {
    for (const estacionActual in datos) {
      if (parseInt(datos[estacionActual].tmin) < temperaturaMas) {
        temperaturaMas = parseInt(datos[estacionActual].tmin);
        cadena = datos[estacionActual].fecha + ' ' +
        datos[estacionActual].horaracha + ' ' + temperaturaMas + ' grados';
      }
    }
  } else if (tipo === 'alta') {
    for (const estacionActual in datos) {
      if (parseInt(datos[estacionActual].tmax) > temperaturaMenos) {
        temperaturaMenos = parseInt(datos[estacionActual].tmax);
        cadena = datos[estacionActual].fecha + ' ' +
        datos[estacionActual].horaracha + ' ' + temperaturaMenos + ' grados';
      }
    }
  }
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
  const nombreFichero = 'json/sc-weather-data-2021-2022.json';
  const json = leerJson(nombreFichero);
  console.log('Fecha y hora del dia con temeperaruta mas baja');
  console.log(temperatura(json, 'baja') + '\n');
  console.log('Fecha y hora del dia con temeperaruta mas alta');
  console.log(temperatura(json, 'alta') + '\n');
  console.log('Dia con mayor precipitación');
  console.log(precipitacion(json) + '\n');
  console.log('El periodo mas largo sin lluvia');
  console.log(periodoSinLluvia(json) + '\n');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
