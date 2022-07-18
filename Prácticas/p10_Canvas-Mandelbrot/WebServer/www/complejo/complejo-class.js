/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Clase que representa la clase Complejo.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

/**
 * Complejo module
 * @module Complejo
 */
export class Complejo {
  /**
   * @property {Number} parteReal - Número que representa ña parte real
   * @private
   */
  #parteReal;
  /**
   * @property {Number} parteImaginaria - Número que representa la parte
   * imaginaria
   * @private
   */
  #parteImaginaria;

  /**
   * @constructor
   * @param {Number} parteReal - Número que representa ña parte real
   * @param {Number} parteImaginaria - Número que representa la parte
   * imaginaria
   */
  constructor(parteReal, parteImaginaria) {
    this.#parteReal = parteReal;
    this.#parteImaginaria = parteImaginaria;
  }

  /**
   * @description - Devuelve el valor real de un número complejo
   * @return {Number} - Valor real de un número complejo
   */
  getReal() {
    return parseFloat(this.#parteReal);
  }

  /**
   * @description - Devuelve el valor imaginario de un número complejo
   * @return {Number} - Valor imaginario de un número complejo
   */
  getImaginario() {
    return parseFloat(this.#parteReal);
  }

  /**
   * @description Devuelve una cadena que representa un número complejo.
   * @return {String} - Cadena que representa un número complejo.
   */
  toString() {
    if (this.#parteReal === 0 && this.#parteImaginaria === 0) {
      return '0';
    } else if (this.#parteReal !== 0 && this.#parteImaginaria === 0) {
      return `${this.#parteReal}`;
    } else if (this.#parteReal !== 0 && this.#parteImaginaria < 0) {
      return `${this.#parteReal} ${this.#parteImaginaria}i`;
    } else if (this.#parteReal !== 0 && this.#parteImaginaria !== 0) {
      return `${this.#parteReal} + ${this.#parteImaginaria}i`;
    }
  }

  /**
   * @description Devuelve un objeto que representa la suma de dos números
   * complejos.
   * @param {Complejo} otro - Objeto que representa el otro número complejo.
   * @return {Complejo} - Objeto que representa la suma de dos números
   * complejos.
   */
  suma(otro) {
    const parteReal = this.#parteReal + otro.getReal();
    const parteImaginaria = this.#parteImaginaria + otro.getImaginario();
    return new Complejo(parteReal, parteImaginaria);
  }

  /**
   * @description Devuelve un objeto que representa la resta de dos números
   * complejos.
   * @param {Complejo} otro - Objeto que representa el otro número complejo.
   * @return {Complejo} - Objeto que representa la resta de dos números
   * complejos.
   */
  resta(otro) {
    const parteReal = this.#parteReal - otro.getReal();
    const parteImaginaria = this.#parteImaginaria - otro.getImaginario();
    return new Complejo(parteReal, parteImaginaria);
  }

  /**
   * @description Devuelve un objeto que representa la multiplicación de dos
   * números complejos.
   * @param {Complejo} otro - Objeto que representa el otro número complejo.
   * @return {Complejo} - Objeto que representa la multiplicación de dos
   * números complejos.
   */
  multiplicacion(otro) {
    const parteReal =
      this.#parteReal * otro.getReal() -
      this.#parteImaginaria * otro.getImaginario();
    const parteImaginaria =
      this.#parteReal * otro.getImaginario() +
      this.#parteImaginaria * otro.getReal();
    return new Complejo(parteReal, parteImaginaria);
  }

  /**
   * @description Devuelve un objeto que representa la división de dos
   * números complejos.
   * @param {Complejo} otro - Objeto que representa el otro número complejo.
   * @return {Complejo} - Objeto que representa la división de dos
   * números complejos.
   */
  division(otro) {
    const parteReal =
      (this.#parteReal * otro.getReal() +
        this.#parteImaginaria * otro.getImaginario()) /
      (otro.getReal() ** 2 + otro.getImaginario() ** 2);
    const parteImaginaria =
      (this.#parteImaginaria * otro.getReal() -
        this.#parteReal * otro.getImaginario()) /
      (otro.getReal() ** 2 + otro.getImaginario() ** 2);
    return new Complejo(parteReal, parteImaginaria);
  }

  /**
   * @description Calcula el valor absoluto de un número complejo.
   * @return {Number} - Valor absoluto del número complejo.
   */
  absoluto() {
    return Math.round(
        Math.sqrt(this.#parteReal ** 2 + this.#parteImaginaria ** 2) * 100)/100;
  }
  /**
   * @description Calcula el conjugado de un número complejo.
   * @return {Number} - Conjugado del número complejo.
   */
  conjugado() {
    return new Complejo(
        this.#parteReal, -this.#parteImaginaria);
  }
}


export default Complejo;
