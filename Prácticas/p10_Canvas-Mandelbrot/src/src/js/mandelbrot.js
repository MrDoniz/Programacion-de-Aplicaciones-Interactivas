/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Clase que representa la clase Mandelbrot.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

/**
 * módulo ES6 que implemente una clase Mandelbrot para representar un 
 * @module Mandelbrot
 */

'use strict';

import {Complejo} from './complejo.js';


/**
 * Mandelbrot module
 * @module Mandelbrot
 */
class Mandelbrot {
  /**
   * @property {HTMLCanvasElement} canvas
   * @private
   */
  #canvas = document.getElementById('canvas');

  /**
   * @property {CanvasRenderingContext2D} ctx
   * @private
   */
  #ctx = this.#canvas.getContext('2d');

  /**
   * @property {Number} maximoIteraciones
   * @private
   */
  #maximoIteraciones;

  /**
   * @constructor
   * @param {number} maximoIteraciones - Numero máximo de iteraciones
   * @param {number} ancho - Ancho del canvas
   * @param {number} alto - Alto del canvas
   */
  constructor(ancho, alto, maximoIteraciones) {
    this.#canvas.ancho = ancho;
    this.#canvas.alto = alto;
    this.#maximoIteraciones = maximoIteraciones;
  }

  /**
   * @description Compueba si el número complejo pertenece o no al conjunto con
   * un número determinado de iteraciones
   * @param {Object} complejo - Número complejo
   * @return {Number} - Número de iteraciones
   */
  mandelbrot(complejo) {
    let complejoAux = new Complejo(0, 0);
    let iteraciones = 0;
    while ((complejoAux.absoluto() <= 2) &&
    (iteraciones < this.#maximoIteraciones)) {
      complejoAux = complejo.suma(complejoAux.multiplicacion(complejoAux));
      iteraciones++;
    }
    return iteraciones;
  }

  /**
   * @description Imprime el mandelbrot en el canvas
   */
  deploy() {
    const RE_START = -2;
    const RE_END = 1;
    const IM_START = -1;
    const IM_END = 1;
    for (let x = 0; x < this.#canvas.ancho; x++) {
      for (let y = 0; y < this.#canvas.alto; y++) {
        const iteraciones = this.mandelbrot(new Complejo(RE_START + (x /
        this.#canvas.ancho) * (RE_END - RE_START),
        IM_START + (y / this.#canvas.alto) * (IM_END - IM_START)));
        const hub = 255 * iteraciones / this.#maximoIteraciones;
        const iluminacion = (iteraciones >= this.#maximoIteraciones) ?
        '0%' : '50%';
        this.#ctx.fillStyle = `hsl(${hub}, 100%, ${iluminacion})`;
        this.#ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  /**
   * @description Recibe un número de puntos en el plano xy y calcula el
   * error y el área
   * @param {Number} puntos - Número de puntos
   * @return {Array} - Array con el error y el área
   */
  area(puntos) {
    const complejos = [];
    let nDentro = 0;
    for (let i = 0; i < puntos; i++) {
      const intervalo1 = Math.random() * (0 - (-2.0)) + (-2.0);
      const intervalo2 = Math.random() * (1.125 - 0.5) + 0.5;
      complejos.push(new Complejo(intervalo1, intervalo2));
    }
    for (let i = 0; i < complejos.length; i++) {
      let complejoAux = complejos[i];
      let contador = 0;
      do {
        complejoAux = complejoAux.multiplicacion(complejoAux);
        complejoAux = complejos[i].suma(complejoAux);
        contador++;
      } while (contador < this.#maximoIteraciones &&
        complejoAux.absoluto() <= 2);
      if (complejoAux.absoluto() <= 2) {
        nDentro++;
      }
    }
    const area = (2 * 2.5 * 1.125 * nDentro) / puntos;
    const error = area / Math.sqrt(n);
    this.#ctx.fillStyle = 'white';
    this.#ctx.fillText(`Area: ${area}`, this.#canvas.ancho - 200,
        this.#canvas.alto);
    this.#ctx.fillText(`Error: ${error}`, this.#canvas.ancho - 80,
        this.#canvas.alto);
    return [area, error];
  }
}

export {Mandelbrot};
