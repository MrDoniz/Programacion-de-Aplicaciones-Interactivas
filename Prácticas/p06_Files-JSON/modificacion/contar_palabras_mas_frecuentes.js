/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 30 2022
 * @desc Counting frequences
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
* @description - Busca las palabras mas frecuentes del texto.
* @param {Array} vectorEntrada - Vector con las palabras del texto
* @param {Number} cantidad - Número de palabras que se quieren mostrar
* @return {Array} - Vector que almacena las 10 palabras mas frecuentes y el
* numero de veces que aparecen.
**/
const contarFrecuencias = function(vectorEntrada, cantidad = 10) {
  const salida = [];
  const frecuencias = {};
  for (const palabra of vectorEntrada) {
    if (palabra !== '') {
      if (frecuencias[palabra] === undefined) {
        frecuencias[palabra] = 1;
      } else {
        frecuencias[palabra] += 1;
      }
    }
  }
  const vectorFrecuencias = Object.entries(frecuencias);
  const vectorOrdenado = vectorFrecuencias.sort(function(a, b) {
    return b[1] - a[1];
  });
  for (let i = 0; i < cantidad; i++) {
    salida.push(vectorOrdenado[i]);
  }
  for (let i = 0; i < salida.length; i++) {
    for (let j = i + 1; j < salida.length; j++) {
      if (salida[i][1] < salida[j][1]) {
        const aux = salida[i];
        salida[i] = salida[j];
        salida[j] = aux;
      }
    }
  }
  return salida;
};

/**
 * @description - Procesa el texto y devuelve un vector con todas las palabras
 * de este.
 * @param {String} nombreFichero - Nombre del fichero
 * @return {Array} - Vector que almacena todas las palabras.
 */
const procesarTexto = function(nombreFichero) {
  const saltoLinea = /\n/g;
  const caracteresEspeciales = /[.,\/#!¡¿?$%\^&\*;:{}=\-_`~()]/g;
  const fs = require('fs');
  const textoProcesador = fs.readFileSync(nombreFichero, 'utf8')
      .replace(saltoLinea, ' ');
  const textoProcesador2 = textoProcesador
      .replace(caracteresEspeciales, ' ');
  const palabras = textoProcesador2.split(' ');
  return palabras;
};

/**
 * @description - Crea un fichero JSON y escribe en este los resultados
 * obtenidos.
 * @param {Array} vectorSalida - Vector con las palabras mas frecuentes del
 * texto
 */
const escribirResultados = function(vectorSalida) {
  const fs = require('fs');
  const json = JSON.stringify(vectorSalida, null, 2);
  let salida = '';
  fs.writeFileSync('resultados_palabras.json', json);
  for (const palabra of vectorSalida) {
    salida += palabra[0] + ': ' + palabra[1] + '\n';
  }
  fs.writeFileSync('resultados.txt', salida);
};

/**
* @description - Recibe una cadena de texto y comprueba que es un nombre de
* fichero válido.
* @return {String} - nombre del fichero recibido
**/
const procesarArgumentos = function() {
  const entradaCadena = process.argv.slice(1);
  const nombreFichero = entradaCadena[1];
  const fs = require('fs');
  try {
    fs.accessSync(nombreFichero, fs.constants.R_OK);
  } catch (err) {
    throw new Error('No se ha podido abrir el fichero de entrada.');
  }
  return nombreFichero;
};

/**
* @description Programa principal
* @param {String} cadenaEntrada - Cadena de texto con el nombre del fichero.
* @return {String} - Las 10 palabras mas frecuentes del fichero.
**/
function main(cadenaEntrada) {
  let nombreFichero;
  if (process.argv.slice(2).length === 0) {
    nombreFichero = procesarEntrada(cadenaEntrada);
  } else {
    nombreFichero = procesarArgumentos();
  }
  const textoProcesador = procesarTexto(nombreFichero);
  const salida = contarFrecuencias(textoProcesador);
  escribirResultados(salida);
  for (const palabra of salida) {
    console.log(palabra);
  }
  return salida;
}

module.exports = main;

if (require.main === module) {
  main();
}
