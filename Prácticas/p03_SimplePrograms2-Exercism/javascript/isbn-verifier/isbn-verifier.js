/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 09 2022
 * @desc Isbn Verifier 
 *       Given a string the program should check if the provided string is a valid ISBN-10. 
 *       Putting this into place requires some thinking about preprocessing/parsing of the 
 *       string prior to calculating the check digit for the ISBN. The program should be able 
 *       to verify ISBN-10 both with and without separating dashes.
 * @see {@link https://exercism.org/tracks/javascript/exercises/isbn-verifier}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

/**
 * @description Función que comprueba si un ISBN-10 es válido
 * @param {String} isbn - Cadena con el ISBN-10
 * @returns {number} - Devuelve 0 si es válido
 */
export const isValid = (isbn) => {
  let cadena = isbn.split("-").join("").split("");
  if(cadena.length !== 10){
    return false;
  }
  if(cadena[9] === "X") {
    cadena[9] = 10;
  }
  console.log(cadena);
  return cadena.reduce((acumulador, valor, indice) => {
    console.log(acumulador, valor, indice);
    return acumulador + valor * (10 - indice);
  }, 0) % 11 === 0;
};