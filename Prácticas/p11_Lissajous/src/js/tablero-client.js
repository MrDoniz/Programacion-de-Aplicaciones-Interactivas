/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Cliente de la clase Mandelbrot
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

import {Tablero} from './tablero.js';
import {Lissajous} from './lissajous.js';
/**
 * @description Ejecuta las funciones del canvas
 * @param {Number} anchura - Anchura del canvas
 * @param {Number} altura - Altura del canvas
 */
const ejecutar = function(anchura, altura) {
  const tablero = new Tablero(anchura, altura);
  tablero.inicializar();

  const programa = new Lissajous();
  programa.pintar();
  window.addEventListener('input', function() {
    entradas(programa);
    tablero.actualizar();
    programa.pintar();
  });
};

/**
 * @description Ejecuta las funciones del canvas
 * @param {Object} programa - Anchura del canvas
 * @param {String} nombre - Altura del canvas
 */
const actualizarEntrada = function(programa, nombre) {
  const nombreSlide = document.getElementById('slide' + nombre);
  const nombreMostrar = document.getElementById('mostrar' + nombre);
  nombreSlide.oninput = function() {
    const valor = Number(nombreSlide.value);
    nombreMostrar.innerHTML = valor;
    switch (nombre) {
      case 'FrecuenciaA':
        programa.setFrecuenciaA(valor);
        break;
      case 'FrecuenciaB':
        programa.setFrecuenciaB(valor);
        break;
      case 'Angulo':
        programa.setAngulo(valor);
        break;
      case 'AmplitudA':
        programa.setAmplitudA(valor);
        break;
      case 'AmplitudB':
        programa.setAmplitudB(valor);
        break;
    }
  };
};

function entradas(programa) {
  actualizarEntrada(programa, 'FrecuenciaA');
  actualizarEntrada(programa, 'FrecuenciaB');
  actualizarEntrada(programa, 'Angulo');
  actualizarEntrada(programa, 'AmplitudA');
  actualizarEntrada(programa, 'AmplitudB');

  const color = document.getElementById('Color');
  color.oninput = function() {
    programa.setColor(color.value);
  };

  const checkbox = document.getElementById('animarAngulo');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      programa.setAnimacion(true);
    } else {
      programa.setAnimacion(false);
    }
  });
}

window.ejecutar = ejecutar;
