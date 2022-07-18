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
  let n = Number(argumentos[0]);
  if (Number.isNaN(n)) {
    console.log("The input is not a number.");
  }
  else if (n < 0) {
    console.log("The input is negative.");
  }
  else {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += 1 / i;
    }
    console.log(sum.toFixed(4));
  }
}

if (require.main === module) {
  main();
}
