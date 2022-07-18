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
  } else {
    let perfecto = false;
    let sum = null;
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
    if (sum === n) {
      perfecto = true;
    }
    console.log(`es_perfecto(${n}) → ${perfecto ? 'verdadero' : 'falso'}`);
  }
}

if (require.main === module) {
  main();
}
