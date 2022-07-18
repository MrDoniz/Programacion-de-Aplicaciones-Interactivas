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

import {Tablero} from './tablero.js';
import {Hypocycloid} from './hypocycloid.js';
/**
 * @description Ejecuta las funciones del canvas
 * @param {Number} anchura - Anchura del canvas
 * @param {Number} altura - Altura del canvas
 */
const ejecutar = function(anchura, altura) {
  const tablero = new Tablero(anchura, altura);
  tablero.inicializar();
  const programa = new Hypocycloid();
  programa.pintar();
  boton('animar');
  boton('aumentar');
  boton('disminuir');
  boton('ocultar');
};

const boton = function(botonNombre) {
  const botones = document.querySelectorAll('.' + botonNombre);
  botones.forEach((el) => {
    el.addEventListener('click', contar);
  });
  function contar() {
    cambiarColor(document.getElementById(botonNombre));
  }
  function cambiarColor(boton) {
    if (boton.style.backgroundColor == 'green') {
      boton.style.backgroundColor = 'red';
    } else {
      boton.style.backgroundColor = 'green';
    }
  }
};


window.ejecutar = ejecutar;
