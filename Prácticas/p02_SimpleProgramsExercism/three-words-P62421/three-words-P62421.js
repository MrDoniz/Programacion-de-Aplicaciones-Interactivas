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
function main() {
  const argumentos = process.argv.slice(2);
  let a = argumentos[0];
  let b = argumentos[1];
  let c = argumentos[2];
  console.log(c + " " + b + " " + a);
}

if (require.main === module) {
  main();
}
