/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 26 2022
 * @desc Clase que representa la clase Mandelbrot.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

import {Complejo} from '../complejo/complejo-class.js';

/**
 * Mandelbrot module
 * @module Mandelbrot
 */
export class Mandelbrot {
  /**
   * @property {Number} numeroPuntos - Número de puntos.
   * @private
   */
  #numeroPuntos;

  /**
   * @property {Number} maximoIteraciones - Número máximo de iteraciones.
   * @private
   */
  #maximoIteraciones;

  /**
   * @property {Number} error - Número de error.
   * @private
   */
  #error;

  /**
    * @property {Number} area - Número del área.
    * @private
    */
  #area;

  /**
   * @constructor
   * @param {Number} numeroPuntos - Número de puntos.
   * @param {Number} maximoIteraciones - Número máximo de iteraciones.
   */
  constructor(numeroPuntos, maximoIteraciones) {
    this.#numeroPuntos = numeroPuntos;
    this.#maximoIteraciones = maximoIteraciones;
  }

  /**
   * @description Devuelve el area.
   * @return {Number}
   */
  getArea() {
    return this.#area;
  }

  /**
   * @description Devuelve el error.
   * @return {Number}
   */
  getError() {
    return this.#error;
  }

  /**
   * @description Genera un conjunto de número complejos aleatorios en el
   * intervalo [(-2.0, 0), (0.5, 1.125)].
   * @return {Array} - Conjunto de números complejos.
   */
  generarConjunto() {
    const conjunto = [];
    let i;
    for (i = 0; i < this.#numeroPuntos; i += 1) {
      conjunto.push(this.generarNumeroComplejo());
    }
    return conjunto;
  }

  /**
   * @description Genera un número complejos aleatorio del intervalo
   * [(-2.0, 0), (0.5, 1.125)].
   * @return {Complejo} - Número complejo.
   */
  generarNumeroComplejo() {
    const realMaximo = 0.5;
    const realMininimo = -2.0;
    const imaginarioMaximo = 1.125;
    const imaginarioMinimo = 0.0;
    const real = Math.random() * (realMaximo - realMininimo) + realMininimo;
    const imaginario = Math.random() * (imaginarioMaximo - imaginarioMinimo) +
    imaginarioMinimo;
    return new Complejo(real.toFixed(3), imaginario.toFixed(3));
  }
  /**
   * @description Calcula un número complejo a partir de la función de
   * recurrencia que opera hasta que haya llegado a una iteración máxima o el
   * valor supere un umbral.
   * @param {Complejo} complejo - Número complejo inicial.
   * @return {Number} - Número de iteraciones.
   */
  calculoDeArea(complejo) {
    let iteraciones = 0;
    let complejoNuevo = new Complejo(complejo.getReal(),
        complejo.getImaginario());
    while (iteraciones < this.#maximoIteraciones &&
      complejoNuevo.absoluto() <= 2.0) {
      complejoNuevo =
      (complejoNuevo.multiplicacion(complejoNuevo)).suma(complejo);
      iteraciones += 1;
    }
    this.#area = iteraciones / this.#maximoIteraciones;
    this.#error = this.#area / Math.sqrt(this.#maximoIteraciones);
    console.log('Area: ' + this.#area + ' Error: ' + this.#error);
    return iteraciones;
  }
}

export default Mandelbrot;
