/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 31 2022
 * @desc Clase Vector3D para representar vectores en un espacio tridimensional.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */



/**
 * Vector3D module
 * @module Compute
 */
export class Compute {
  /**
   * @description Factorial que permita calcular el factorial de un número
   * @param {Number} numero - Número del que se quiere calcular el factorial.
   * @return {Number} Factorial del número.
   */
  Factorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial = factorial * i;
    }
    return factorial;
  }

  /**
   * @description Suma que calcule la suma de los primeros n números: 1 + 2 + 3
   * + ... + n.
   * @param {Number} numero - Número del que se quiere calcular la suma.
   * @return {Number} Suma de los primeros n números.
   */
  Suma(numero) {
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
      suma = suma + i;
    }
    return suma;
  }

  /**
   * @description EsPrimo que permita determinar si un determinado número es
   * primo
   * @param {Number} numero - Número del que se quiere determinar si es primo.
   * @return {Boolean} True si es primo, false en caso contrario.
   */
  EsPrimo(numero) {
    let esPrimo = true;
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) {
        esPrimo = false;
      }
    }
    return esPrimo;
  }

  /**
   * @description SonPrimosRelativos que permita determinar si dos números son
   * mutuamente primos, es decir, si su único divisor común es el 1
   * @param {Number} numero1 - Primer número del que se quiere determinar si es
   * primo.
   * @param {Number} numero2 - Segundo número del que se quiere determinar si es
   * primo.
   * @return {Boolean} True si es primo, false en caso contrario.
   */
  SonPrimosRelativos(numero1, numero2) {
    let sonPrimosRelativos = false;
    if (this.EsPrimo(numero1) && this.EsPrimo(numero2)) {
      if (numero1 % numero2 == 0) {
        sonPrimosRelativos = true;
      }
    }
    return sonPrimosRelativos;
  }

  /**
   * @description TablaMultiplicar que imprima en pantalla la tabla de
   * multiplicar de un determinado número.
   * @param {Number} numero - Número del que se quiere imprimir la tabla de
   * multiplicar.
   * @return {String} Tabla de multiplicar del número.
   */
  TablaMultiplicar(numero) {
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
      //pasa los numeros a cadenas
      tabla += numero + " x " + i + " = " + numero * i + "\n";
    }
    return tabla;
  }

  /**
   * @description TodasTablasMultiplicar que imprima en un fichero todas las tablas de multiplicación entera para 1, 2, ..., 9.
   * @return {String} Tabla de multiplicar del número.
   */
  TodasTablasMultiplicar() {
    let tabla = "";
    for (let i = 1; i <= 9; i++) {
      tabla += this.TablaMultiplicar(i);
    }
    return tabla;
  }
}

export default Compute;
