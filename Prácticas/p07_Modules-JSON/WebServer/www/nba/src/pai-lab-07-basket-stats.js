/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Trabajar con datos estadísticos correspondientes a un partido de
 * baloncesto de la NBA
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

import * as fs from 'fs';
import {fileURLToPath} from 'url';
import process from 'process';

/**
 * @description - Extrae del objeto JSON la lista de jugadores que hayan tenido
 * más pérdidas de balón que asistencias.
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Cadena que contiene la lista de jugadores que hayan
 * tenido más pérdidas de balón (turnovers) que asistencias (assists).
 */
const jugadoresMasPerdidasBalonQueAsistencias = function(datos) {
  const EQUIPO1 = 'Pacers';
  const EQUIPO2 = 'Hawks';
  let perdidas = 0;
  let asistencias = 0;
  let salida = '* ' + EQUIPO1 + 'players with more turnovers than assists:\n';
  for (let i = 0; i < datos.players.length; i++) {
    if (datos.players[i].teamName === EQUIPO1) {
      perdidas = datos.players[i].turnovers;
      asistencias = datos.players[i].assists;
      if (perdidas > asistencias) {
        salida += '    * ' + datos.players[i].firstName + ' ' +
        datos.players[i].lastName + 'has an assist to turnover ratio of ' +
        asistencias + ':' + perdidas + '\n';
      }
    }
  }
  salida += '* ' + EQUIPO2 + 'players with more turnovers than assists:\n';
  for (let i = 0; i < datos.players.length; i++) {
    if (datos.players[i].teamName === EQUIPO2) {
      perdidas = datos.players[i].turnovers;
      asistencias = datos.players[i].assists;
      if (perdidas > asistencias) {
        salida += '    * ' + datos.players[i].firstName + ' ' +
        datos.players[i].lastName + 'has an assist to turnover ratio of ' +
        asistencias + ':' + perdidas + '\n';
      }
    }
  }
  return salida;
};

/**
 * @description - Extrae del objeto JSON el nombre del equipo que intentó más
 * tiros libres que el otro así como el número de tiros libres realizados por
 * cada equipo.
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Cadena que contiene el equipo que dispuso de más tiros
 * libres Hawks attempted the most free throws... Pacers: 9 Hawks: 20
 */
const equipoMasTiros = function(datos) {
  const EQUIPO1 = 'Pacers';
  const EQUIPO2 = 'Hawks';
  let tiros1 = 0;
  let tiros2 = 0;
  for (let i = 0; i < datos.players.length; i++) {
    if (datos.players[i].teamName === EQUIPO1) {
      tiros1 += datos.players[i].freeThrowsAttempted;
    } else {
      tiros2 += datos.players[i].freeThrowsAttempted;
    }
  }
  if (tiros1 > tiros2) {
    return (EQUIPO1 + ' attempted the most free throws... ' + EQUIPO1 + ': ' +
    tiros1 + ' ' + EQUIPO2 + ': ' + tiros2);
  } else {
    return (EQUIPO2 + ' attempted the most free throws... ' + EQUIPO1 + ': ' +
    tiros1 + ' ' + EQUIPO2 + ': ' + tiros2);
  }
};

/**
 * @description - Extrae del objeto JSON el número total de de jugadores con al
 * menos una asistencia
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Cadena que contiene el número total de de jugadores con
 * al menos una asistencia
 */
const jugadoresMenosAsistencia = function(datos) {
  let jugadores = 0;
  for (let i = 0; i < datos.players.length; i++) {
    if (datos.players[i].assists > 0) {
      jugadores++;
    }
  }
  return ('There were ' + jugadores + ' players with at least one assist');
};

/**
 * @description - Extrae del objeto JSON el nombre del escolta (jugador que
 * contenga "G" en positionShort) que haya intentado al menos un triple y que
 * tenga el mayor porcentaje de triples en el juego. El porcentaje de triples
 * es el número de triples logrados dividido por el número de los intentados.
 * porcentaje de tiros triples
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Cadena que contiene el Escolta (Guard, G), con el mejor
 * porcentaje de tiros triples
 */
const escoltaMejorPorcentajeTiresLibres = function(datos) {
  let escolta = '';
  let porcentaje = 0;
  let porcentajeMax = 0;
  const G = 'G';
  for (let i = 0; i < datos.players.length; i++) {
    if (datos.players[i].positionShort === G) {
      porcentaje = (datos.players[i].freeThrowsMade /
        datos.players[i].freeThrowsAttempted) * 100;
      if (porcentaje > porcentajeMax) {
        porcentajeMax = porcentaje;
        escolta = datos.players[i].firstName + ' ' + datos.players[i].lastName;
      }
    }
  }
  return ('* Best free thrower: ' + escolta + ' ' +
  porcentajeMax.toFixed(2) + '%');
};

/**
 * @description - Extrae del objeto JSON el nombre del jugador con mayor número
 * de rebotes, y la cantidad realizada.
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Cadena que contiene el nombre del jugador con mayor
 * número de rebotes, y la cantidad realizada.
 */
const maximoReboteador = function(datos) {
  let max = 0;
  let jugador = '';
  let rebotes = 0;
  for (let i = 0; i < datos.players.length; i++) {
    rebotes = datos.players[i].reboundsDefensive +
              datos.players[i].reboundsOffensive;
    if (rebotes > max) {
      max = rebotes;
      jugador = datos.players[i].firstName + ' ' + datos.players[i].lastName;
    }
  }
  return ('* Most rebounds: ' + jugador + ' ' + max);
};

/**
 * @description - Extrae del objeto JSON el resultado final del partido.
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Cadena que contiene el resultado final del partido.
 */
const resultadoFinalPartido = function(datos) {
  const EQUIPO1 = 'Pacers';
  const EQUIPO2 = 'Hawks';
  let sumaPuntos1 = 0;
  let sumaPuntos2 = 0;
  for (let i = 0; i < datos.players.length; i++) {
    if (datos.players[i].teamName === EQUIPO1) {
      sumaPuntos1 += datos.players[i].freeThrowsMade;
      sumaPuntos1 += (datos.players[i].fieldGoalsMade -
        datos.players[i].threePointersMade) * 2;
      sumaPuntos1 += datos.players[i].threePointersMade*3;
    }
    if (datos.players[i].teamName === EQUIPO2) {
      sumaPuntos2 += datos.players[i].freeThrowsMade;
      sumaPuntos2 += (datos.players[i].fieldGoalsMade -
        datos.players[i].threePointersMade) * 2;
      sumaPuntos2 += datos.players[i].threePointersMade*3;
    }
  }

  return (EQUIPO1 + ' ' + sumaPuntos1 + '\n' + EQUIPO2 + ' ' + sumaPuntos2);
};

/**
 * @description - Extrae del objeto JSON la relación de atributos asociadas con
 * cada jugador.
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Cadena que contiene la relación de atributos asociadas
 * con cada jugador
 */
const atributosJugador = function(datos) {
  try {
    let atributos = '';
    for (let i = 0; i < datos.players.length; i++) {
      atributos += datos.players[i].firstName + ' ' +
          datos.players[i].lastName +
        '\n';
      atributos += '\t' + 'Team: ' + datos.players[i].teamName + '\n';
      atributos += '\t' + 'Position: ' + datos.players[i].position + '\n';
      atributos += '\t' + 'Field goals made: ' +
        datos.players[i].fieldGoalsMade + '\n';
      atributos += '\t' + 'Three pointers made: ' +
        datos.players[i].threePointersMade + '\n';
      atributos += '\t' + 'Free throws made: ' +
        datos.players[i].freeThrowsMade + '\n';
      atributos += '\t' + 'Rebounds offensive: ' +
        datos.players[i].reboundsOffensive + '\n';
      atributos += '\t' + 'Rebounds defensive: ' +
        datos.players[i].reboundsDefensive + '\n';
    }
    return atributos;
  } catch (err) {
    throw new TypeError('Argumento no válido.');
  }
};

/**
 * @description - Extrae del objeto JSON el identificador del partido.
 * @param {Object} datos - Objeto que almacena el contenido de entrada.
 * @return {String} - Cadena que contiene el identificador del partido.
 */
const indetificadorPartido = function(datos) {
  try {
    return ('Game ID: ' + datos.id);
  } catch (err) {
    throw new TypeError('Argumento no válido.');
  }
};

/**
 * @description - Procesa el fichero y devuelve un objeto con todo el contenido
 * de este.
 * @param {String} nombreFichero - Nombre del fichero
 * @return {Object} - Objeto que almacena el contenido del fichero.
 */
const procesarFichero = function(nombreFichero) {
  try {
    let json = fs.readFileSync(nombreFichero, 'utf8');
    json = json.replace(/([{,])(\s*)([A-Za-z0-9_\-]+?)\s*:/g, '$1"$3":');
    const informacion = JSON.parse(json);
    return informacion;
  } catch (err) {
    throw new TypeError('El fichero no existe o no se puede leer.');
  }
};

export default {
  procesarFichero,
  indetificadorPartido,
  atributosJugador,
  resultadoFinalPartido,
  maximoReboteador,
  escoltaMejorPorcentajeTiresLibres,
  jugadoresMenosAsistencia,
  equipoMasTiros,
  jugadoresMasPerdidasBalonQueAsistencias,
};

/**
* @description Programa principal
**/
function main() {
  const NOMBRE_FICHERO = 'json/20160502_Hawks-Pacers-game-data.json';
  const json = procesarFichero(NOMBRE_FICHERO);
  console.log(indetificadorPartido(json));
  console.log(atributosJugador(json));
  console.log(resultadoFinalPartido(json));
  console.log(maximoReboteador(json));
  console.log(escoltaMejorPorcentajeTiresLibres(json));
  console.log(jugadoresMenosAsistencia(json));
  console.log(equipoMasTiros(json));
  console.log(jugadoresMasPerdidasBalonQueAsistencias(json));
}

