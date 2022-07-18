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
import {Menu} from './menu.js';
/**
 * @description Ejecuta las funciones del canvas
 * @param {Number} anchura - Anchura del canvas
 * @param {Number} altura - Altura del canvas
 */
const ejecutar = function() {
  const cielo = new Cielo(window.innerWidth - 400, window.innerHeight - 100);
  window.addEventListener('resize', function() {
    cielo.escalar(window.innerWidth - 400, window.innerHeight - 100);
    cielo.inicializar();
    bola.dibujar();
    bola1.dibujar();
  });
  const menu = new Menu();
  const bola = new Bola();
  const bola1 = new Bola();
  const listaBolas = [bola, bola1];
  cielo.inicializar(listaBolas);
  bola.setColor('red');
  bola1.setColor('blue');
  bola.setCoordenadas(cielo.getAncho() / 2 - 50, cielo.getAlto() / 2);
  bola1.setCoordenadas(cielo.getAncho() / 2 + 50, cielo.getAlto() / 2);
  for (const bola of listaBolas) {
    bola.dibujar();
  }
  menu.boton(cielo, listaBolas, bola, 'arriba');
  menu.boton(cielo, listaBolas, bola, 'izquierda');
  menu.boton(cielo, listaBolas, bola, 'derecha');
  menu.boton(cielo, listaBolas, bola, 'abajo');
  menu.boton(cielo, listaBolas, bola1, 'arriba1');
  menu.boton(cielo, listaBolas, bola1, 'izquierda1');
  menu.boton(cielo, listaBolas, bola1, 'derecha1');
  menu.boton(cielo, listaBolas, bola1, 'abajo1');

  menu.inputText(cielo, listaBolas, 'velocidad', 'enviar');
};

ejecutar();
