/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Feb 18 2022
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

 'use strict';

// Retorna true si la secuencia de caracteres tiene al menos una a.
// Retorna false si la secuencia de caracteres no tiene al menos una a.
const compruebaAes = function(secuencia) {
  for (const iterator of secuencia)
    if (iterator == 'a')
      return true;
  return false;
}

// Retorna true si la secuencia de caracteres termina en punto.
// Retorna false si la secuencia de caracteres no termina en punto.
const compruebaPunto = function(secuencia) {
  if (secuencia[secuencia.length - 1] == '.')
    return true;
  return false;
}

function main() {
  const argumentos = process.argv.slice(2);
  // Secuencia de caracteres introducida por el usuario en la consola.
  let secuencia = String(argumentos[0]);
  let valor = false;
  // console.log(sequence);
  // Compruebo que la sentencia acabe en punto.
  if (compruebaPunto(secuencia)) {
    // Compruebo que la sentencia tiene al menos una a.
    if (compruebaAes(secuencia))
      console.log('yes');
    else
      console.log('no');
  } else {
    console.log('Entrada no adecuada.');
  }
}

if (require.main === module) {
  main();
}