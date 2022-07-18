/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 20 2022
 * @desc Pruebas unitarias
 *
 */

import exportar from '../src/pai-lab-07-basket-stats';

const PARTIDO_HAWKS_VS_PACERS = 'json/20160502_Hawks-Pacers-game-data.json';
const json = exportar.procesarFichero(PARTIDO_HAWKS_VS_PACERS);

describe('El partido', () => {
  test('El identificador del partido', () => {
    expect(exportar.indetificadorPartido(json))
        .toBe('Game ID: 0021500750');
  });
});

describe('El resultado', () => {
  test('El resultado final del partido', () => {
    expect(exportar.resultadoFinalPartido(json))
        .toBe('Pacers 96\nHawks 102');
  });
});

describe('Máximo reboteador', () => {
  test('El nombre del jugador con mayor * número de rebotes, y la cantidad realizada', () => {
    expect(exportar.maximoReboteador(json))
        .toBe('* Most rebounds: Lavoy Allen 14');
  });
});

describe('Escolta con mejor porcentaje de tiros libres', () => {
  test('l Escolta (Guard, G), con el mejor porcentaje de tiros triples', () => {
    expect(exportar.escoltaMejorPorcentajeTiresLibres(json))
        .toBe('* Best free thrower: Jeff Teague 85.71%');
  });
});

describe('Jugadores con al menos una asistencia', () => {
  test('El número total de de jugadores con al menos una asistencia', () => {
    expect(exportar.jugadoresMenosAsistencia(json))
        .toBe('There were 14 players with at least one assist');
  });
});

describe('Equipo que realizó más tiros libres', () => {
  test('El equipo que dispuso de más tiros', () => {
    expect(exportar.equipoMasTiros(json))
        .toBe('Hawks attempted the most free throws... Pacers: 9 Hawks: 20');
  });
});

describe('Jugadores con más pérdidas de balón que asistencias', () => {
  test('La lista de jugadores que hayan tenido más pérdidas de balón (turnovers) que asistencias (assists).', () => {
    expect(exportar.jugadoresMasPerdidasBalonQueAsistencias(json))
        .toBe('* Pacersplayers with more turnovers than assists:\n    * Myles Turnerhas an assist to turnover ratio of 0:1\n    * Jordan Hillhas an assist to turnover ratio of 3:5\n    * Monta Ellishas an assist to turnover ratio of 1:4\n    * Lavoy Allenhas an assist to turnover ratio of 2:3\n    * Solomon Hillhas an assist to turnover ratio of 0:1\n    * C.J. Mileshas an assist to turnover ratio of 1:3\n* Hawksplayers with more turnovers than assists:\n    * Paul Millsaphas an assist to turnover ratio of 0:2\n    * Kyle Korverhas an assist to turnover ratio of 1:2\n');
  });
});


describe('Error de formato', () => {
  test('Procesar fichero', () => {
    expect(() => exportar.procesarFichero())
        .toThrow('El fichero no existe o no se puede leer.');
  });
  test('El fichero no existe o no se puede leer.', () => {
    expect(() => exportar.indetificadorPartido())
        .toThrow('Argumento no válido.');
  });
  test('Los atributos de los jugadores', () => {
    expect(() => exportar.atributosJugador())
        .toThrow('Argumento no válido.');
  });
});

