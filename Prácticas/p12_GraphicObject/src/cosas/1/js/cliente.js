/* eslint-disable require-jsdoc */
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Cliente de la clase Tablero
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

import {Cielo} from './cielo.js';
import {Bola} from './bola.js';
import {Controlador} from './controlador.js';
/**
 * @description Ejecuta las funciones del canvas
 * @param {Number} anchura - Anchura del canvas
 * @param {Number} altura - Altura del canvas
 */
const ejecutar = function(anchura, altura) {
  const cielo = new Cielo(anchura, altura);
  cielo.inicializar();

  const bola = new Bola();
  bola.dibujar();

  const controlador = new Controlador();
  controlador.boton(cielo, bola, 'arriba');
  controlador.boton(cielo, bola, 'izquierda');
  controlador.boton(cielo, bola, 'derecha');
  controlador.boton(cielo, bola, 'abajo');
  controlador.boton(cielo, bola, 'noreste');
  controlador.boton(cielo, bola, 'Sureste');
  controlador.boton(cielo, bola, 'Noroeste');
  controlador.boton(cielo, bola, 'Suroeste');

  controlador.teclado(cielo, bola);

  controlador.tecladoAuto('checkBoxTecladoAuto');
  controlador.bolaImagen(bola, 'checkBoxImagen');
  controlador.escalarVentana(cielo, bola, 'escalar');
};

window.ejecutar = ejecutar;
