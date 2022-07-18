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
    let divisores = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        divisores.push(i);
        if (i !== Math.sqrt(n)) {
          divisores.push(n / i);
        }
      }
    }
    console.log("divisors of", n + ":", divisores.sort((a, b) => a - b).join(" "));
  }
}

if (require.main === module) {
  main();
}
