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
 * @desc Clase que representa la clase Controlador.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

'use strict';


/**
 * Controlador module
 * @module Controlador
 */
class Controlador {
  #tecladoAutoCheck;
  #bolaImagenCheck;
  constructor() {
    this.#tecladoAutoCheck = false;
    this.#bolaImagenCheck = false;
  }
  boton(cielo, bola, direccion) {
    const boton = document.getElementById(direccion);
    boton.addEventListener('click', function() {
      const boton = document.getElementById(direccion);
      cielo.inicializar();
      if (!bola.movimiento(direccion)) {
        bola.dibujar();
        // boton.style.backgroundColor = 'red';
      } else {
        bola.dibujar();
        boton.style.backgroundColor = 'green';
      }
      if (direccion === 'abajo') {
        const boton = document.getElementById('arriba');
        boton.style.backgroundColor = 'green';
      }
      if (direccion === 'arriba') {
        const boton = document.getElementById('abajo');
        boton.style.backgroundColor = 'green';
      }
      if (direccion === 'derecha') {
        const boton = document.getElementById('izquierda');
        boton.style.backgroundColor = 'green';
      }
      if (direccion === 'izquierda') {
        const boton = document.getElementById('derecha');
        boton.style.backgroundColor = 'green';
      }
    });
  }

  teclado(cielo, bola) {
    document.addEventListener('keydown', (event) => {
      cielo.inicializar();
      switch (event.key) {
        case 'ArrowUp':
          console.log('dasas');
          if (this.#tecladoAutoCheck && !bola.getSeMueve()) {
            bola.getSeMueve(true);
            bola.movimientoAutomatico('arriba', cielo);
            bola.getSeMueve(false);
          } else {
            bola.movimiento('arriba');
            bola.dibujar();
          }
          break;
        case 'ArrowDown':
          if (this.#tecladoAutoCheck && !bola.getSeMueve()) {
            bola.getSeMueve(true);
            bola.movimientoAutomatico('abajo', cielo);
            bola.getSeMueve(false);
          } else {
            bola.movimiento('abajo');
            bola.dibujar();
          }
          break;
        case 'ArrowRight':
          if (this.#tecladoAutoCheck && !bola.getSeMueve()) {
            bola.getSeMueve(true);
            bola.movimientoAutomatico('derecha', cielo);
            bola.getSeMueve(false);
          } else {
            bola.movimiento('derecha');
            bola.dibujar();
          }
          break;
        case 'ArrowLeft':
          if (this.#tecladoAutoCheck && !bola.getSeMueve()) {
            bola.getSeMueve(true);
            bola.movimientoAutomatico('izquierda', cielo);
            bola.getSeMueve(false);
          } else {
            bola.movimiento('izquierda');
            bola.dibujar();
          }
          break;
        default:
          bola.dibujar();
          break;
      }
    });
  }
  tecladoAuto(checkBoxId) {
    const checkbox = document.getElementById(checkBoxId);
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        this.#tecladoAutoCheck = true;
      } else {
        this.#tecladoAutoCheck = false;
      }
    });
  }
  bolaImagen(bola, checkBoxId) {
    const checkbox = document.getElementById(checkBoxId);
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        this.#bolaImagenCheck = true;
        bola.setBolaImagen(true);
      } else {
        this.#bolaImagenCheck = false;
        bola.setBolaImagen(false);
      }
    });
  }
  escalarVentana(cielo, bola, checkBoxId) {
    const checkbox = document.getElementById(checkBoxId);
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        cielo.setAutoEscalar(true);
        window.addEventListener('resize', function() {
          cielo.escalar(window.innerWidth/2, window.innerHeight - 100);
          cielo.inicializar();
          bola.dibujar();
        });
      } else {
        bola.setAutoEscalar(false);
      }
    });
  }
}

export {Controlador};
