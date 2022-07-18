/* eslint-disable require-jsdoc */
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 */

'use strict';

import {Cielo} from './cielo.js';

/**
 * @class Cielo
 * @extends {Cielo}
 */
class Bola extends Cielo {
  /**
   * @property {HTMLCanvasElement} canvas
   * @private
   */
  #canvas;

  /**
    * @property {CanvasRenderingContext2D} ctx
    * @private
    */
  #ctx;

  /**
   * @property {Number} coordenadaX
   * @private
   */
  #coordenadaX;

  /**
   * @property {Number} coordenadaY
   * @private
   */
  #coordenadaY;

  /**
   * @property {Number} radio
   * @private
   */
  #radio;

  /**
   * @property {Number} movimiento
   * @private
   */
  #movimiento;

  /**
   * @property {String} color
   * @private
   */
  #color;
  #seMueve;
  #estaEnBorde;

  constructor() {
    super();
    this.#canvas = this.getCanvas();
    this.#ctx = this.getCTX();
    this.#coordenadaX = this.#canvas.width / 2;
    this.#coordenadaY = this.#canvas.height / 2;
    this.#radio = 20;
    this.#movimiento = 10;
    this.#color = 'red';
    this.#seMueve = false;
    this.#estaEnBorde = false;
  }

  /**
   * @description Dibuja en el canvas un círculo de color rojo y de radio 20
   */
  dibujar() {
    this.#ctx.beginPath();
    this.#ctx.arc(this.#coordenadaX, this.#coordenadaY,
        this.#radio, 0, 2 * Math.PI);
    this.#ctx.fillStyle = this.#color;
    this.#ctx.fill();
    this.#ctx.stroke();
  }
  /**
   * @description Actualiza la posición de la bola comprobando el movimiento
   * de la misma.
   * @param {String} movimiento - Dirección del movimiento
   * @return {Boolean} - Si el movimiento es correcto
   */
  movimiento(movimiento) {
    switch (movimiento) {
      case 'arriba':
        if (this.#coordenadaY - this.#movimiento < 0 + this.#radio) {
          this.#coordenadaY = this.#radio;
        } else {
          this.#coordenadaY -= this.#movimiento;
        }
        break;
      case 'abajo':
        if (this.#coordenadaY + this.#movimiento > this.#canvas.height -
          this.#radio) {
          this.#coordenadaY = this.#canvas.height - this.#radio;
        } else {
          this.#coordenadaY += this.#movimiento;
        }
        break;
      case 'izquierda':
        if (this.#coordenadaX - this.#movimiento < 0 + this.#radio) {
          this.#coordenadaX = this.#radio;
        } else {
          this.#coordenadaX -= this.#movimiento;
        }
        break;
      case 'derecha':
        if (this.#coordenadaX + this.#movimiento > this.#canvas.width -
          this.#radio) {
          this.#coordenadaX = this.#canvas.width - this.#radio;
        } else {
          this.#coordenadaX += this.#movimiento;
        }
        break;
      default:
        return true;
    }
  }
  /**
   * @description Asigna el valor del color de la pelota.
   * @param {String} valor - String que representa el color de la pelota.
   */
  setColor(valor) {
    this.#color = valor;
  }
  /**
   * @description Asigna el valor del radio de la pelota.
   * @param {String} valor - String que representa el radio de la pelota.
   */
  setRadio(valor) {
    this.#radio = valor;
    this.dibujar();
  }
  /**
   * @description Asigna el valor del movimiento de la pelota.
   * @param {String} valor - String que representa el movimiento de la pelota.
   */
  setMovimiento(valor) {
    console.log(valor);
    this.#movimiento = valor;
  }

  movimientoAutomatico(movimiento, cielo) {
    this.#seMueve = true;
    this.dibujar();
    switch (movimiento) {
      case 'arriba':
        this.movimientoArriba();
        break;
      case 'abajo':
        this.movimientoAbajo();
        break;
      case 'izquierda':
        if (this.movimientoIzquierda()) {
          requestAnimationFrame(() => {
            this.movimientoIzquierda();
            this.movimientoAutomatico(movimiento, cielo);
          });
        }
        break;
      case 'derecha':
        if (this.movimientoDerecha()) {
          requestAnimationFrame(() => {
            this.movimientoDerecha();
            this.movimientoAutomatico(movimiento, cielo);
          });
        }
        break;
      default:
        return true;
    }
  }

  movimientoArriba() {
    if (this.#coordenadaY - this.#movimiento < 0 + this.#radio) {
      this.#coordenadaY = this.#radio;
      this.#estaEnBorde = true;
      this.#seMueve = false;
      return false;
    } else {
      this.#coordenadaY -= this.#movimiento;
      this.#seMueve = true;
      this.#estaEnBorde = false;
      return true;
    }
  }

  movimientoAbajo() {
    if (this.#coordenadaY + this.#movimiento > this.#canvas.height -
      this.#radio) {
      this.#coordenadaY = this.#canvas.height - this.#radio;
      this.#estaEnBorde = true;
      this.#seMueve = false;
      return false;
    } else {
      this.#coordenadaY += this.#movimiento;
      this.#seMueve = true;
      this.#estaEnBorde = false;
      return true;
    }
  }

  movimientoIzquierda() {
    if (this.#coordenadaX - this.#movimiento < 0 + this.#radio) {
      this.#coordenadaX = this.#radio;
      this.#seMueve = false;
      this.#estaEnBorde = true;
      return false;
    } else {
      this.#coordenadaX -= this.#movimiento;
      this.#seMueve = true;
      this.#estaEnBorde = false;
      return true;
    }
  }

  movimientoDerecha() {
    if (this.#coordenadaX + this.#movimiento > this.#canvas.width -
      this.#radio) {
      this.#coordenadaX = this.#canvas.width - this.#radio;
      this.#seMueve = false;
      this.#estaEnBorde = true;
      return false;
    } else {
      this.#coordenadaX += this.#movimiento;
      this.#seMueve = true;
      this.#estaEnBorde = false;
      return true;
    }
  }
  getEstaEnBorde() {
    return this.#estaEnBorde;
  }

  setEstaEnBorde(valor) {
    this.#estaEnBorde = valor;
  }
  getSeMueve() {
    return this.#seMueve;
  }

  setSeMueve(valor) {
    this.#seMueve = valor;
  }

  setCoordenadas(ejex, ejey) {
    this.#coordenadaX = ejex;
    this.#coordenadaY = ejey;
  }
}

export {Bola};
