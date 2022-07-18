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

const exportar = require('../src/country-stats');

test('Pais mas poblado del mundo', () => {
  expect(exportar.paisMasPobladoDelMundo())
      .toBe('The least populated country is: China with1409517397habitants.');
});

test('Pais menos poblado del mundo', () => {
  expect(exportar.paisMenosPobladoDelMundo())
      .toBe('The least populated country is: Pitcairn with50habitants.');
});

test('El país con mayor densidad de población en América', () => {
  expect(exportar.paisConMayorDensidadDePoblacionEnAmerica())
      .toBe('The most populated country in America is : United States with324459463habitants.');
});

test('Los 3 países con mayor esperanza de vida en cada uno de los continentes', () => {
  expect(exportar.tresPaisesConMayorEsperanzaDeVidaDeCadaUnoDeLosContinentes())
      .toBe('The most populated country inAsiais : China with1409517397habitants.The most populated country inEuropeis : Russian Federation with143989754habitants.The most populated country inAfricais : Nigeria with190886311habitants.The most populated country inOceaniais :  with35530081habitants.The most populated country inNorth Americais : United States with324459463habitants.The most populated country inAntarcticais :  with35530081habitants.The most populated country inSouth Americais : Brazil with209288278habitants.');
});

test('La media de la altura promedio de los varones en cada uno de los continentes', () => {
  expect(exportar.mediaDeLaAlturaDeLosHombresPorContinente())
      .toBe('The average height of the Asia is: 167.13The average height of the Europe is: 176.11The average height of the Africa is: 170.00The average height of the Oceania is: 175.50The average height of the North America is: 172.25The average height of the Antarctica is: NaNThe average height of the South America is: 168.88');
});

test('El país con mayor densidad de población en América', () => {
  expect(exportar.porcentajesDeLasCincoReligionesMasExtendidas())
      .toBe('The percentage of Islam is: 19.28The percentage of Christianity is: 59.04The percentage of Buddhism is: 2.81The percentage of Unaffiliated Religions is: 2.81The percentage of Hinduism is: 1.20The percentage of Judaism is: 0.40The percentage of Folk Religions is: 0.80');
});

test('El país con mayor densidad de población en América', () => {
  expect(exportar.paisesConTemperaturaMasBajaPorContinente())
      .toBe('The country with the lowest temperature in Asia is: Mongolia with -0.7 degrees.The country with the lowest temperature in Europe is: Norway with 1.5 degrees.The country with the lowest temperature in Africa is: Lesotho with 11.85 degrees.The country with the lowest temperature in Oceania is: New Zealand with 10.55 degrees.The country with the lowest temperature in North America is: Canada with -5.35 degrees.The country with the lowest temperature in Antarctica is: Afghanistan with 12.6 degrees.The country with the lowest temperature in South America is: Chile with 8.45 degrees.');
});
