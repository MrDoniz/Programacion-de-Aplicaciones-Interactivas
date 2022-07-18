/* eslint-disable require-jsdoc */
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
 * @class Hypocycloid
 * @extends {Tablero}
 */
class Hypocycloid extends Tablero {
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
    radioMenor: 100,
    radioMayor: 200,
  };

  /**
   * @description Imagine attaching a pen
   */
  pintar() {
    const anchura = (this.#canvas.width / 2);
    const altura = (this.#canvas.height / 2);
    this.#ctx.lineWidth = 3;
    this.#ctx.strokeStyle = 'blue';
    this.#ctx.beginPath();
    this.#ctx.arc(anchura, altura, this.#ajustes.radioMayor, 0, 2 * Math.PI);
    this.#ctx.stroke();

    const coordenadaX = anchura + (this.#ajustes.radioMayor -
      this.#ajustes.radioMenor) * Math.cos(this.#ajustes.angulo);
    const coordenadaY = altura + (this.#ajustes.radioMayor -
      this.#ajustes.radioMenor) * Math.sin(this.#ajustes.angulo);

    this.#ctx.strokeStyle = 'red';
    this.#ctx.beginPath();
    this.#ctx.arc(coordenadaX, coordenadaY, 2, 0, 2 * Math.PI);
    this.#ctx.beginPath();
    this.#ctx.arc(coordenadaX, coordenadaY, this.#ajustes.radioMenor, 0,
        2 * Math.PI);
    this.#ctx.stroke();
  }
  botones() {
    window.onload = function() {
      const botones=document.querySelectorAll('.boton');
      botones.forEach((el) => {
        el.addEventListener('click', contar);
      });
      function contar() {
        cambiarColor(document.getElementById('animar'));
        cambiarColor(document.getElementById('aumentar'));
        cambiarColor(document.getElementById('disminuir'));
        cambiarColor(document.getElementById('ocultar'));
      }
      function cambiarColor(boton) {
        if (boton.style.backgroundColor == 'green') {
          boton.style.backgroundColor = 'red';
        } else {
          boton.style.backgroundColor = 'green';
        }
      }
    };
  }
}

export {Hypocycloid};
