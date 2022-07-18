/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Clase que representa un número racional.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

/**
 * Fecha module
 * @module Racional
 */
class Racional {
  /**
   * @property {Number} numerador - Numerador de la fracción.
   * @private
   */
  #numerador;

  /**
   * @property {Number} denominador - Denominador de la fracción.
   * @private
   */
  #denominador;

  /**
   * @description Constructor de la clase.
   * @param {Number} numerador - Numerador de la fracción.
   * @param {Number} denominador - Denominador de la fracción.
   */
  constructor(numerador, denominador) {
    if (denominador === 0) {
      throw new Error('El denominador no puede ser 0');
    }
    /** @private */
    this.#numerador = numerador;
    /** @private */
    this.#denominador = denominador;
  }

  /**
   * @description Devuelve el numerador de la fracción.
   * @return {Number} Numerador de la fracción.
   */
  getNumerador() {
    return this.#numerador;
  }
  /**
   * @description Devuelve el denominador de la fracción.
   * @return {Number} Denominador de la fracción.
   */
  getDenominador() {
    return this.#denominador;
  }
  /**
   * @description Devuelve la fracción en formato racional.
   * @return {String} Fracción en formato racional.
   */
  toString() {
    return `${this.#numerador}/${this.#denominador}`;
  }
  /**
   * @description Leer (por teclado o desde fichero) un objeto de tipo Racional.
   * @return {Racional} Objeto de tipo Racional.
   * @throws {Error} Lanza un error si el denominador es 0.
   */
  static read() {
    const numerador = parseInt(readlineSync.question('Numerador: '));
    const denominador = parseInt(readlineSync.question('Denominador: '));
    if (denominador === 0) {
      throw new Error('El denominador no puede ser 0');
    }
    return new Racional(numerador, denominador);
  }
  /**
   * @description Sumar dos objetos de tipo Racional.
   * @param {Racional} otro - Objeto de tipo Racional.
   * @return {Racional} Objeto de tipo Racional.
   */
  sumar(otro) {
    return new Racional(this.#numerador * otro.#denominador +otro.#numerador *
      this.#denominador, this.#denominador * otro.#denominador);
  }
  /**
   * @description Restar dos objetos de tipo Racional.
   * @param {Racional} otro - Objeto de tipo Racional.
   * @return {Racional} Objeto de tipo Racional.
   */
  restar(otro) {
    return new Racional(this.#numerador * otro.#denominador - otro.#numerador *
      this.#denominador, this.#denominador * otro.#denominador);
  }
  /**
   * @description Multiplicar dos objetos de tipo Racional.
   * @param {Racional} otro - Objeto de tipo Racional.
   * @return {Racional} Objeto de tipo Racional.
   */
  multiplicar(otro) {
    return new Racional(this.#numerador * otro.#numerador, this.#denominador *
      otro.#denominador);
  }
  /**
   * @description Dividir dos objetos de tipo Racional.
   * @param {Racional} otro - Objeto de tipo Racional.
   * @return {Racional} Objeto de tipo Racional.
   * @throws {Error} Lanza un error si el denominador es 0.
   */
  dividir(otro) {
    return new Racional(this.#numerador * otro.#denominador, this.#denominador*
      otro.#numerador);
  }
  /**
   * @description Comparar si los objetos de tipo Racional son mayor, igual o
   * menor.
   * @param {Racional} otro - Objeto de tipo Racional.
   * @return {String} Resultado de la comparación.
   * @throws {Error} Lanza un error si el denominador es 0.
   */
  comparar(otro) {
    if (this.#numerador * otro.#denominador > otro.#numerador *
      this.#denominador) {
      return '>';
    } else if (this.#numerador * otro.#denominador < otro.#numerador *
      this.#denominador) {
      return '<';
    } else {
      return '=';
    }
  }
}


export {Racional};
