/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 17 2022
 * @desc Largest prime factor
 *       The code with cipher 3 reversed of a non-negative integer is to code
 *       the number in base 3 and revert the coding. In order to make it even
 *       more cryptic, you will change the digits of the resulting number
 *       according to the following relation: 0 → ’-’, 1 → ’+’, 2 → ’*’. The
 *       code for a negative integer n < 0 starts with a ’:’ which is followed
 *       by the coding with cipher 3 reversed of −n.
 * @see {@link https://drive.google.com/file/d/1aoN7uj0KX6RvWtngTqYMqpxep2_P-XFc/view}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

'use strict';

/**
* @description - Codifica un número en base 3 y lo devuelve en base 10 con el
código cifrado de 3 cifras invertido (0 → ’-’, 1 → ’+’, 2 → ’*’).
* @param {Number} numero - Número a codificar
* @return {String} - Cadena de texto con el resultado de la operación.
*  contrario
*/
const codigoCifrado = function(numero) {
  let cadena = '';
  if (numero < 0) {
    cadena = ':';
    numero = -numero;
  } else if (numero === 0) {
    cadena = '-';
  }
  while (numero > 0) {
    switch (numero % 3) {
      case 0:
        cadena = cadena + '-';
        break;
      case 1:
        cadena = cadena + '+';
        break;
      case 2:
        cadena = cadena + '*';
        break;
    }
    numero = Math.floor(numero / 3);
  }
  return cadena;
};

/**
* @description - Comprueba que los argumentos introducidos por el usuario
* @param {Number} numero -  Numero introducido por el usuario
* @return {String} - Cadena de texto con el resultado de la operación.
**/
const comprueboEntrada = function(numero = 'Error') {
  if (Number.isNaN(numero) || Array.isArray(numero) || numero === 'Error' ||
  typeof numero !== 'number') {
    throw new Error('Argumento no válido.');
  }
  return String(codigoCifrado(numero));
};

module.exports = comprueboEntrada;

/**
 * @description - Lee los números introducidos por el usuario
 * @return {Number} - Valor introducido por el usuario
**/
const procesarEntrada = function() {
  const argumentos = process.argv.slice(1);
  const valorArgumento = Number(argumentos[1]);
  if (!Number.isNaN(valorArgumento)) {
    return valorArgumento;
  } else {
    console.log('No has introducido los números correctamente.');
  }
};

/**
* @description Programa principal
**/
function main() {
  const valorEntrada = procesarEntrada();
  if (valorEntrada !== undefined) {
    comprueboEntrada(valorEntrada);
    console.log(codigoCifrado(valorEntrada));
  }
}

if (require.main === module) {
  main();
}
