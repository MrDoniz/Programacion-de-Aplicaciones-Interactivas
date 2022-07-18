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

import {Tablero} from './tablero.js';
/**
 * @class Lissajous
 * @extends {Tablero}
 */
class Lissajous extends Tablero {
  /**
   * @property {CanvasRenderingContext2D} ctx
   * @private
   */
  #ctx = this.getCTX();

  /**
   * @property {HTMLCanvasElement} canvas
   * @private
   */
  #canvas = this.getCanvas();
  /**
   * @property {Object} ajustes - Objeto que contiene los valores de los
   * parámetros de la línea.
   * @private
   */
  #ajustes = {
    numeroDePasos: 0.025,
    anchuraMaxima: 1,
    angulo: 0.4,
    frecuenciaA: 30,
    frecuenciaB: 45,
    amplitudA: 50,
    amplitudB: 50,
    animado: true,
    color: 'black',
  };

  /**
   * @description Pinta en el canvas la curva de lissajous.
   */
  pintar() {
    this.#ctx.strokeStyle = this.#ajustes.color;
    this.#ctx.lineWidth = 3;
    const anchura = (this.#canvas.width / 2) * this.#ajustes.amplitudA / 30;
    const altura = (this.#canvas.height / 2) * this.#ajustes.amplitudB / 30;
    let coordenadaX = anchura * Math.sin(this.#ajustes.angulo);
    let coordenadaY = altura * Math.sin(this.#ajustes.frecuenciaB * 0);
    this.#ctx.moveTo((this.#canvas.width - coordenadaX / 2) / 2,
        (this.#canvas.height + coordenadaY / 2) / 2);
    const limite = 2 * Math.PI;
    const muestreo = 0.001;
    for (let i = 0; i <= limite; i+= muestreo) {
      coordenadaX = anchura * Math.sin(this.#ajustes.frecuenciaA * i +
        this.#ajustes.angulo);
      coordenadaY = altura * Math.sin(this.#ajustes.frecuenciaB * i);
      this.#ctx.lineTo((this.#canvas.width - coordenadaX / 2) / 2,
          (this.#canvas.height + coordenadaY / 2) / 2);
    }
    this.#ctx.stroke();
    this.#ctx.closePath();
  }

  /**
   * @description Asigna el valor de la amplitud de la altura.
   * @param {Number} valor - Número entero que representa la amplitud de la
   * altura.
   */
  setAmplitudA(valor) {
    this.#ajustes.amplitudA = valor;
  }

  /**
   * @description Asigna el valor de la amplitud de la anchura.
   * @param {Number} valor - Número entero que representa la amplitud de la
   * anchura.
   */
  setAmplitudB(valor) {
    this.#ajustes.amplitudB = valor;
  }

  /**
   * @description Asigna el valor de la frecuenciaA de la línea.
   * @param {Number} valor - Número entero que representa la frecuencia de la
   * línea.
   */
  setFrecuenciaA(valor) {
    this.#ajustes.frecuenciaA = valor;
  }

  /**
   * @description Asigna el valor de la frecuenciaB de la línea.
   * @param {Number} valor - Número entero que representa la frecuencia de la
   * línea.
   */
  setFrecuenciaB(valor) {
    this.#ajustes.frecuenciaB = valor;
  }

  /**
   * @description Asigna el valor del ángulo de la línea.
   * @param {Number} valor - Número entero que representa el ángulo de la línea.
   */
  setAngulo(valor) {
    this.#ajustes.angulo = valor * 200;
  }

  /**
   * @description Asigna el valor de la animación
   * @param {Boolean} valor - Booleano que representa si la animación está
   * activada o no.
   * línea.
   */
  setAnimacion(valor) {
    this.#ajustes.animado = valor;
  }

  /**
   * @description Asigna el valor del color de la línea.
   * @param {String} valor - String que representa el color de la línea.
   */
  setColor(valor) {
    this.#ajustes.color = valor;
  }
}

export {Lissajous};
