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
  boton(cielo, listaBolas, bola, direccion) {
    const boton = document.getElementById(direccion);
    boton.addEventListener('click', function() {
      const movimientoAuto = () => {
        if (!bola.getEstaEnBorde()) {
          requestAnimationFrame(() => {
            cielo.actualizar2(listaBolas);
            bola.movimientoAutomatico(direccion, cielo);
            for (const bola of listaBolas) {
              bola.dibujar();
            }
            movimientoAuto();
          });
        } else {
          bola.setEstaEnBorde(false);
        }
      };
      console.log(direccion);
      if (direccion.substr(-1) === '1') {
        direccion = direccion.substr(0, direccion.length - 1);
      }
      movimientoAuto();
    });
  }
  inputText(cielo, listaBolas, etiqueta, enviar) {
    const boton = document.getElementById(enviar);
    boton.addEventListener('click', function() {
      const input = document.getElementById(etiqueta);
      const texto = input.value;
      for (const bola of listaBolas) {
        bola.setMovimiento(Number(texto));
      }
    });
  }
}


export {Menu};
