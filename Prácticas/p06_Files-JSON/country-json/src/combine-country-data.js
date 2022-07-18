/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 29 2022
 * @desc Programa que recorre los módulos y los guarda en un vector de objetos
 * para posteriormente guardarlos en un fichero JSON y mostrarlos por consola.
 */

'use strict';

const ABBREVIATION_MODULE = require('../modules/country_Abbreviation.js');
const AVGMALEHEIGHT_MODULE = require('../modules/country_AvgMaleHeight.js');
const CAPITAL_MODULE = require('../modules/country_Capital.js');
const CONTINENT_MODULE = require('../modules/country_Continent.js');
const CURRENCYCODE_MODULE = require('../modules/country_CurrencyCode.js');
const CURRENCYNAME_MODULE = require('../modules/country_CurrencyName.js');
const ELEVATION_MODULE = require('../modules/country_Elevation.js');
const LIFEEXPECTANCY_MODULE = require('../modules/country_LifeExpectancy.js');
const NAME_MODULE = require('../modules/country_Name.js');
const POPULATION_MODULE = require('../modules/country_Population.js');
const POPULATIONDENSITY_MODULE =
require('../modules/country_PopulationDensity.js');
const RELIGION_MODULE = require('../modules/country_Religion.js');
const SURFACEAREA_MODULE = require('../modules/country_SurfaceArea.js');
const YEARLYAVGTEMPERATURE_MODULE =
require('../modules/country_YearlyAvgTemperature.js');
const FS = require('fs');

/**
 * @description Recorre los módulos y los guarda en un vector de objetos para
 * posteriormente guardarlos en un fichero JSON y mostrarlos por consola.
 * @param {Array} vectorObjetos - Vector de objetos que contendrá los datos de
 * los países.
 * @return {Array}
 **/
const recorrerModulo = function(vectorObjetos) {
  for (const country in NAME_MODULE) {
    if (NAME_MODULE.hasOwnProperty(country)) {
      vectorObjetos[country] = {
        country: NAME_MODULE[country].country,
        abbreviation: null,
        height: null,
        city: null,
        continent: null,
        currency_name: null,
        currency_code: null,
        religion: null,
        elevation: null,
        expectancy: null,
        population: null,
        density: null,
        area: null,
        temperature: null,
      };
      if (ABBREVIATION_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].abbreviation =
        ABBREVIATION_MODULE[country].abbreviation;
      } else {
        vectorObjetos[country].abbreviation = null;
      }
      if (AVGMALEHEIGHT_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].height = AVGMALEHEIGHT_MODULE[country].height;
      } else {
        vectorObjetos[country].height = null;
      }
      if (CAPITAL_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].city = CAPITAL_MODULE[country].city;
      } else {
        vectorObjetos[country].city = null;
      }
      if (CONTINENT_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].continent = CONTINENT_MODULE[country].continent;
      } else {
        vectorObjetos[country].continent = null;
      }
      if (CURRENCYCODE_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].currency_code =
        CURRENCYCODE_MODULE[country].currency_code;
      } else {
        vectorObjetos[country].currency_code = null;
      }
      if (CURRENCYNAME_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].currency_name =
        CURRENCYNAME_MODULE[country].currency_name;
      } else {
        vectorObjetos[country].currency_name = null;
      }
      if (ELEVATION_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].elevation = ELEVATION_MODULE[country].elevation;
      } else {
        vectorObjetos[country].elevation = null;
      }
      if (LIFEEXPECTANCY_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].expectancy =
        LIFEEXPECTANCY_MODULE[country].expectancy;
      } else {
        vectorObjetos[country].expectancy = null;
      }
      if (POPULATION_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].population =
        POPULATION_MODULE[country].population;
      } else {
        vectorObjetos[country].population = null;
      }
      if (POPULATIONDENSITY_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].density =
        POPULATIONDENSITY_MODULE[country].density;
      } else {
        vectorObjetos[country].density = null;
      }
      if (RELIGION_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].religion = RELIGION_MODULE[country].city;
      } else {
        vectorObjetos[country].religion = null;
      }
      if (SURFACEAREA_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].area = SURFACEAREA_MODULE[country].area;
      } else {
        vectorObjetos[country].area = null;
      }
      if (YEARLYAVGTEMPERATURE_MODULE.hasOwnProperty(country)) {
        vectorObjetos[country].temperature =
        YEARLYAVGTEMPERATURE_MODULE[country].temperature;
      } else {
        vectorObjetos[country].temperature = null;
      }
    }
  }
  return vectorObjetos;
};

const escribirFichero = function(vectorObjetos) {
  FS.writeFile('../json/country-data. json',
      JSON.stringify(vectorObjetos, null, ' '), 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
};

/**
 * @description Programa principal
 **/
function main() {
  let vectorObjetos = [];
  vectorObjetos = recorrerModulo(vectorObjetos);
  escribirFichero(vectorObjetos);
}

if (require.main === module) {
  main();
}
