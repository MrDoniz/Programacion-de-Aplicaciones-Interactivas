/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Clase que representa la clase Board.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

/**
 * Board module
 * @module Board
 */
class Board {
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
   * @property {Araay} poligonos - Array de poligonos
   * @private
   */
  #poligonos = [];

  #ancho;
  #alto;

  /**
   * @constructor
   * @param {number} ancho - Ancho del canvas
   * @param {number} alto - Alto del canvas
   */
  constructor(ancho, alto) {
    this.#canvas.ancho = ancho;
    this.#canvas.alto = alto;
    this.#ancho = ancho;
    this.#alto = alto;
  }
  /**
   * @description Imprime el Board en el canvas
   */
  deploy() {
    this.#ctx.strokeStyle = 'red';
    this.#ctx.lineWidth = 5;
    this.#ctx.strokeRect(0, 0, this.#canvas.ancho, this.#canvas.alto);
  }

  /**
   * @description Devuelve el canvas
   */
  getCTX() {
    return this.#ctx;
  }
  getCanvax() {
    return this.#canvas;
  }
  getAncho() {
    return this.#ancho;
  }
  getAlto() {
    return this.#alto;
  }
}

/**
 * @class Polygon
 * @extends {Board}
 */
class Polygon extends Board {
  /**
   * @property {Number} lados - Número de lados del polígono
   * @private
   */
  #lados;
  /**
   * @property {Number} vertices - Número de vértices del polígono
   * @private
   */
  #vertices;
  constructor(ancho, alto){
    super(ancho, alto);
  }
  /**
   * @description que devuelva el número de segmentos del polígono.
   * @return {number} - Número de bordes del polígono
   */
  getNumberOfEdges() {
    throw new Error('Method \'getNumberOfEdges()\' must be implemented.');
  }
  /**
   * @description devolverá el área del polígono.
   * @return {number} - Número de bordes del polígono
   */
  getArea() {
    throw new Error('Method \'getArea()\' must be implemented.');
  }
  /**
   * @description permita calcular la longitud del perímetro del polígono.
   * @return {number} - Número de bordes del polígono
   */
  computePerimeter() {
    throw new Error('Method \'computePerimeter()\' must be implemented.');
  }
}

/**
 * @class Triangle
 * @extends {Polygon}
 */
class Triangle extends Polygon {
  #ladosVector = [];
  constructor(ladosVector, lados, vertices) {
    super(lados, vertices);
    this.#ladosVector = ladosVector;
  }
  getArea() {
    let area = 0;
    let semiperimetro = 0;
    for (let i = 0; i < this.#ladosVector.length; i++) {
      semiperimetro += parseInt(this.#ladosVector[i]);
    }
    area = (semiperimetro * (semiperimetro - this.#ladosVector[0]) * (semiperimetro - this.#ladosVector[1]) * (semiperimetro - this.#ladosVector[2])) ** 0.5;
    return area;
  }
  pintar() {
    const ctx = this.getCTX();
    const canvas = this.getCanvax();
    //pinta el canvas de verde
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, this.getAncho(), this.getAlto());
    console.log(this.getAlto());

  }
}

export {Board};
export {Polygon};
export {Triangle};
