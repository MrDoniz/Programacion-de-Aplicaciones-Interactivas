/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 29 2022
 * @desc Main function
 *
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 */

'use strict';

const STATS_MODULE = require('../json/country-data.json');
/**
 * @description El país más poblado del mundo
 * @return {string} El país más poblado del mundo
 **/
const paisMasPobladoDelMundo = function() {
  let countryName = STATS_MODULE[0].country;
  let population_ = STATS_MODULE[0].population;
  for (const country in STATS_MODULE) {
    if ((parseInt(STATS_MODULE[country].population) > population_) &&
    (STATS_MODULE[country].population != null)) {
      countryName = STATS_MODULE[country].country;
      population_ = STATS_MODULE[country].population;
    }
  }
  const salida = 'The least populated country is: '+
  countryName + ' with' + population_ + 'habitants.';
  console.log(salida);
  return salida;
};

/**
 * @description El país menos poblado del mundo
 * @return {string} El país menos poblado del mundo
 **/
function paisMenosPobladoDelMundo() {
  let countryName = STATS_MODULE[0].country;
  let population_ = STATS_MODULE[0].population;
  for (const country in STATS_MODULE) {
    if ((parseInt(STATS_MODULE[country].population) < population_) &&
    (STATS_MODULE[country].population != null)) {
      countryName = STATS_MODULE[country].country;
      population_ = STATS_MODULE[country].population;
    }
  }
  const salida = 'The least populated country is: ' +
      countryName + ' with' + population_ + 'habitants.';
  console.log(salida);
  return salida;
}

/**
 * @description El país con mayor densidad de población en América
 * @return {string} El país con mayor densidad de población en América
 **/
function paisConMayorDensidadDePoblacionEnAmerica() {
  let countryName = '';
  let population_ = STATS_MODULE[0].population;
  for (const country in STATS_MODULE) {
    if ((STATS_MODULE[country].continent === 'South America' ||
    STATS_MODULE[country].continent === 'North America' ) &&
    (parseInt(STATS_MODULE[country].population) > population_) &&
    (STATS_MODULE[country].population != null)) {
      countryName = STATS_MODULE[country].country;
      population_ = STATS_MODULE[country].population;
    }
  }
  const salida = 'The most populated country in America is : ' + countryName +
      ' with' + population_ + 'habitants.';
  console.log(salida);
  return salida;
}

/**
 * @description Los 3 países con mayor esperanza de vida en cada uno de los
 * continentes
 * @return {string} Los 3 países con mayor esperanza de vida en cada uno de los
 **/
function tresPaisesConMayorEsperanzaDeVidaDeCadaUnoDeLosContinentes() {
  let salida = '';
  const continent_ = [];
  for (const country in STATS_MODULE) {
    if (!continent_.includes(STATS_MODULE[country].continent) &&
    STATS_MODULE[country].continent != null) {
      let newContinent = '';
      newContinent = STATS_MODULE[country].continent;
      continent_.push(newContinent);
    }
  }
  for (let counter = 0; counter < continent_.length; counter++) {
    let countryName = '';
    let population_ = STATS_MODULE[0].population;
    for (const country in STATS_MODULE) {
      if ((STATS_MODULE[country].continent === continent_[counter]) &&
      (parseInt(STATS_MODULE[country].population) > population_) &&
      (STATS_MODULE[country].population != null)) {
        countryName = STATS_MODULE[country].country;
        population_ = STATS_MODULE[country].population;
      }
    }
    salida += 'The most populated country in' +
    continent_[counter] + 'is : ' + countryName + ' with' +
    population_ + 'habitants.';
  }
  console.log(salida);
  return salida;
}

/**
 * @description La media de la altura promedio de los varones en cada uno de
 * los continentes
 * @return {string} La media de la altura promedio de los varones en cada uno
 **/
function mediaDeLaAlturaDeLosHombresPorContinente() {
  let salida = '';
  const continent_ = [];
  for (const country in STATS_MODULE) {
    if (!continent_.includes(STATS_MODULE[country].continent) &&
    STATS_MODULE[country].continent != null) {
      let newContinent = '';
      newContinent = STATS_MODULE[country].continent;
      continent_.push(newContinent);
    }
  }
  for (let counter = 0; counter < continent_.length; counter++) {
    let sum_ = 0;
    let counter_ = 0;
    for (const country in STATS_MODULE) {
      if (STATS_MODULE[country].continent === continent_[counter]) {
        if (STATS_MODULE[country].height != null) {
          sum_ += parseInt(STATS_MODULE[country].height);
          counter_++;
        }
      }
    }
    salida += 'The average height of the ' + continent_[counter] + ' is: ' +
        (sum_ / counter_).toFixed(2);
  }
  console.log(salida);
  return salida;
}

/**
 * @description Los porcentajes correspondientes (en función del número de
 * países con cada religión) a las 5 religiones más extendidas en el mundo
 * @return {string} Los porcentajes correspondientes (en función del número de
 * países con cada religión) a las 5 religiones más extendidas en el mundo
 **/
function porcentajesDeLasCincoReligionesMasExtendidas() {
  let salida = '';
  const religion_ = [];
  for (const country in STATS_MODULE) {
    if (!religion_.includes(STATS_MODULE[country].religion) &&
    STATS_MODULE[country].religion != null) {
      let newReligion = '';
      newReligion = STATS_MODULE[country].religion;
      religion_.push(newReligion);
    }
  }
  for (let counter = 0; counter < religion_.length; counter++) {
    let counter_ = 0;
    for (const country in STATS_MODULE) {
      if (STATS_MODULE[country].religion === religion_[counter]) {
        counter_++;
      }
    }
    salida += 'The percentage of ' + religion_[counter] + ' is: ' +
        ((counter_ / STATS_MODULE.length) * 100).toFixed(2);
  }
  console.log(salida);
  return salida;
}

/**
 * @description Los países con más bajas temperaturas en cada uno de los
 * continentes
 * @return {string} Los países con más bajas temperaturas en cada uno de los
 * continentes
 **/
function paisesConTemperaturaMasBajaPorContinente() {
  let salida = '';
  const continent_ = [];
  for (const country in STATS_MODULE) {
    if (!continent_.includes(STATS_MODULE[country].continent) &&
    STATS_MODULE[country].continent != null) {
      let newContinent = ' ';
      newContinent = STATS_MODULE[country].continent;
      continent_.push(newContinent);
    }
  }
  for (let counter = 0; counter < continent_.length; counter++) {
    let countryName = STATS_MODULE[0].country;
    let temperature_ = STATS_MODULE[0].temperature;
    for (const country in STATS_MODULE) {
      if ((STATS_MODULE[country].continent === continent_[counter]) &&
      (parseInt(STATS_MODULE[country].temperature) < temperature_) &&
      (STATS_MODULE[country].temperature != null)) {
        countryName = STATS_MODULE[country].country;
        temperature_ = STATS_MODULE[country].temperature;
      }
    }
    salida += 'The country with the lowest temperature in ' +
    continent_[counter] + ' is: ' + countryName + ' with ' +
    temperature_ + ' degrees.';
  }
  console.log(salida);
  return salida;
}

module.exports = {
  paisMasPobladoDelMundo,
  paisMenosPobladoDelMundo,
  paisConMayorDensidadDePoblacionEnAmerica,
  tresPaisesConMayorEsperanzaDeVidaDeCadaUnoDeLosContinentes,
  mediaDeLaAlturaDeLosHombresPorContinente,
  porcentajesDeLasCincoReligionesMasExtendidas,
  paisesConTemperaturaMasBajaPorContinente,
};

/**
 * @description Programa principal que  se encarga de llamar a las funciones
 * las cuales imprimen los resultados en consola.
 **/
function main() {
  paisMasPobladoDelMundo();
  paisMenosPobladoDelMundo();
  paisConMayorDensidadDePoblacionEnAmerica();
  tresPaisesConMayorEsperanzaDeVidaDeCadaUnoDeLosContinentes();
  mediaDeLaAlturaDeLosHombresPorContinente();
  porcentajesDeLasCincoReligionesMasExtendidas();
  paisesConTemperaturaMasBajaPorContinente();
}

if (require.main === module) {
  main();
}
