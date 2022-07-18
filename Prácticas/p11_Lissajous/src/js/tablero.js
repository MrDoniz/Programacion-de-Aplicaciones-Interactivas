/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Clase que representa la clase Tablero.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

/**
 * Tablero module
 * @module Tablero
 */
class Tablero {
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
   * @property {Number} ancho - Ancho del canvas
   * @private
   */
  #ancho;
  /**
   * @property {Number} alto - Alto del canvas
   * @private
   */
  #alto;
  /**
   * @constructor
   * @param {number} ancho - Ancho del canvas
   * @param {number} alto - Alto del canvas
   */
  constructor(ancho, alto) {
    this.#ancho = ancho;
    this.#alto = alto;
  }
  /**
   * @description Dibuja el canvas con el fondo blanco con lineas
   * horizontales y verticales de color gris
   */
  inicializar() {
    this.#ctx.lineWidth = 0.5;
    const densidadCuadrados = 20;
    this.#ctx.fillStyle = 'white';
    this.#ctx.fillRect(0, 0, this.#ancho, this.#alto);
    this.#ctx.strokeStyle = '#999';
    for (let i = 0; i < this.#ancho; i += densidadCuadrados) {
      this.#ctx.beginPath();
      this.#ctx.moveTo(i, 0);
      this.#ctx.lineTo(i, this.#alto);
      this.#ctx.stroke();

      this.#ctx.beginPath();
      this.#ctx.moveTo(0, i);
      this.#ctx.lineTo(this.#ancho, i);
      this.#ctx.stroke();

      this.#ctx.beginPath();
      this.#ctx.moveTo(i, 0);
      this.#ctx.lineTo(i, this.#alto);
      this.#ctx.stroke();
    }
  }

  actualizar() {
    this.inicializar();
  }
  /**
   * @description Devuelve el CanvasRenderingContext2D
   * @return {HTMLCanvasElement}
   */
  getCTX() {
    return this.#ctx;
  }
  /**
   * @description Devuelve el HTMLCanvasElement
   * @return {HTMLCanvasElement}
   */
  getCanvas() {
    return this.#canvas;
  }
  /**
   * @description Devuelve el ancho del canvas
   * @return {HTMLCanvasElement}
   */
  getAncho() {
    return this.#ancho;
  }
  /**
   * @description Devuelve el alto del canvas
   * @return {HTMLCanvasElement}
   */
  getAlto() {
    return this.#alto;
  }
}

export {Tablero};
