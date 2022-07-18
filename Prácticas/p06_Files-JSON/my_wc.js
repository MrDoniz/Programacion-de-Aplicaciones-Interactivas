/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 28 2022
 * @desc Comando wc
 *       Comando que calcula el número de líneas, de palabras y de caracteres
 *       de un fichero pasado por argumento.
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
 * @description Programa principal
 **/
function main() {
  const argumento = process.argv[2];
  if (argumento === undefined) {
    console.log('Error: No se ha introducido ningún argumento.');
    return;
  }
  const fichero = argumento;
  const {readFile} = require('fs');
  readFile(fichero, (error, buffer) => {
    if (error) throw error;
    const texto = buffer.toString();
    const lineas = texto.split('\n').length;
    const palabras = texto.split(' ').length;
    const caracteres = texto.length;
    console.log(`${lineas} ${palabras} ${caracteres}`);
  },
  );
}

if (require.main === module) {
  main();
}
