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
 * @desc Clase que representa la clase Menu.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';

/**
 * Menu module
 * @module Menu
 */
class Menu {
  /**
   * @description Función que se encarga de los botones del menú.
   * @param {Cielo} - Objeto cielo
   * @param {Bola} - Objeto bola
   * @param {String} - Dirección del movimiento.
   */
  boton(cielo, bola, direccion) {
    const boton = document.getElementById(direccion);
    boton.addEventListener('click', function() {
      bola.movimiento(direccion);
      cielo.inicializar();
      bola.dibujar();
    });
  }
}


export {Menu};
