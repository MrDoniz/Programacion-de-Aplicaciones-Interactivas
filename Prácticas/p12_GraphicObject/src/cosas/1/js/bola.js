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
  #bolaImagen;
  constructor() {
    super();
    this.#canvas = this.getCanvas();
    this.#ctx = this.getCTX();
    this.#coordenadaX = this.#canvas.width / 2;
    this.#coordenadaY = this.#canvas.height / 2;
    this.#radio = 20;
    this.#movimiento = 20;
    this.#color = 'red';
    this.#seMueve = false;
    this.#bolaImagen = false;
  }

  /**
   * @description Dibuja en el canvas un círculo de color rojo y de radio 20
   */
  dibujar() {
    if (this.#bolaImagen) {
      const img = new Image();
      img.src = 'textura.png';
      this.#ctx.save();
      this.#ctx.beginPath();
      this.#ctx.arc(this.#coordenadaX, this.#coordenadaY, this.#radio, 0, Math.PI * 2, false);
      this.#ctx.strokeStyle = '#2465D3';
      this.#ctx.stroke();
      this.#ctx.clip();
      this.#ctx.drawImage(img, this.#coordenadaX - this.#radio, this.#coordenadaY - 130, 260, 260);
      this.#ctx.restore();
    } else {
      this.#ctx.fillStyle = '#01ffff';
      this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.heigh);
      this.actualizar();
      this.#ctx.beginPath();
      this.#ctx.arc(this.#coordenadaX, this.#coordenadaY,
          this.#radio, 0, 2 * Math.PI);
      this.#ctx.fillStyle = this.#color;
      this.#ctx.fill();
      this.#ctx.stroke();
    }
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
        return this.movimientoArriba();
      case 'abajo':
        return this.movimientoAbajo();
      case 'izquierda':
        return this.movimientoIzquierda();
      case 'derecha':
        return this.movimientoDerecha();
      case 'noreste':
        return this.movimientoNoreste();
      case 'Sureste':
        return this.movimientoSureste();
      case 'Noroeste':
        return this.movimientoNoroeste();
      case 'Suroeste':
        return this.movimientoSuroeste();
      default:
        return true;
    }
  }

  movimientoAutomatico(movimiento, cielo) {
    this.#seMueve = true;
    cielo.actualizar();
    this.dibujar();
    switch (movimiento) {
      case 'arriba':
        if (this.movimientoArriba()) {
          requestAnimationFrame(() => {
            this.movimientoArriba();
            this.movimientoAutomatico(movimiento, cielo);
          });
        }
        break;
      case 'abajo':
        if (this.movimientoAbajo()) {
          requestAnimationFrame(() => {
            this.movimientoAbajo();
            this.movimientoAutomatico(movimiento, cielo);
          });
        }
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
      if (this.#bolaImagen) {
        this.#coordenadaY = this.#canvas.height - this.#radio;
      } else {
        this.#coordenadaY = this.#radio;
      }
      this.#seMueve = false;
      return false;
    } else {
      this.#coordenadaY -= this.#movimiento;
      this.#seMueve = true;
      return true;
    }
  }

  movimientoAbajo() {
    if (this.#coordenadaY + this.#movimiento > this.#canvas.height -
      this.#radio) {
      if (this.#bolaImagen) {
        this.#coordenadaY = this.#radio;
      } else {
        this.#coordenadaY = this.#canvas.height - this.#radio;
      }
      this.#seMueve = false;
      return false;
    } else {
      this.#coordenadaY += this.#movimiento;
      this.#seMueve = true;
      return true;
    }
  }

  movimientoIzquierda() {
    if (this.#coordenadaX - this.#movimiento < 0 + this.#radio) {
      if (this.#bolaImagen) {
        this.#coordenadaX = this.#canvas.width - this.#radio;
      } else {
        this.#coordenadaX = this.#radio;
      }
      this.#seMueve = false;
      return false;
    } else {
      this.#coordenadaX -= this.#movimiento;
      this.#seMueve = true;
      return true;
    }
  }

  movimientoDerecha() {
    if (this.#coordenadaX + this.#movimiento > this.#canvas.width -
      this.#radio) {
      if (this.#bolaImagen) {
        this.#coordenadaX = this.#radio;
      } else {
        this.#coordenadaX = this.#canvas.width - this.#radio;
      }
      this.#seMueve = false;
      return false;
    } else {
      this.#coordenadaX += this.#movimiento;
      this.#seMueve = true;
      return true;
    }
  }

  movimientoNoreste() {
    if (this.#coordenadaY - this.#movimiento < 0 + this.#radio || this.#coordenadaX + this.#movimiento > this.#canvas.width - this.#radio) {
      this.#coordenadaY = this.#radio;
      this.#coordenadaX = this.#canvas.width - this.#radio;
      return false;
    } else {
      this.#coordenadaX += this.#movimiento;
      this.#coordenadaY -= this.#movimiento;
    }
  }

  movimientoNoroeste() {
    if (this.#coordenadaX - this.#movimiento < 0 + this.#radio || this.#coordenadaY - this.#movimiento < 0 + this.#radio) {
      this.#coordenadaY = this.#radio;
      this.#coordenadaX = this.#radio;
      return false;
    } else {
      this.#coordenadaX -= this.#movimiento;
      this.#coordenadaY -= this.#movimiento;
    }
  }

  movimientoSureste() {
    if (this.#coordenadaY + this.#movimiento > this.#canvas.height -
      this.#radio || this.#coordenadaX + this.#movimiento > this.#canvas.width - this.#radio) {
      this.#coordenadaX = this.#radio;
      this.#coordenadaY = this.#canvas.height - this.#radio;
      return false;
    } else {
      this.#coordenadaX -= this.#movimiento;
      this.#coordenadaY += this.#movimiento;
    }
  }

  movimientoSuroeste() {
    if (this.#coordenadaY + this.#movimiento > this.#canvas.height -
      this.#radio || this.#coordenadaX - this.#movimiento < 0 + this.#radio) {
      this.#coordenadaX = this.#canvas.width - this.#radio;
      this.#coordenadaY = this.#canvas.height - this.#radio;
      return false;
    } else {
      this.#coordenadaX += this.#movimiento;
      this.#coordenadaY += this.#movimiento;
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
    this.#movimiento = valor;
  }
  getSeMueve() {
    return this.#seMueve;
  }

  setSeMueve(valor) {
    this.#seMueve = valor;
  }

  setBolaImagen(valor) {
    this.#bolaImagen = valor;
  }
}

export {Bola};
