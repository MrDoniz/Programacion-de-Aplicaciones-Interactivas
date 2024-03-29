/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 22 2022
 * @desc Clase que representa la clase Clock.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

/**
 * Clock module
 * @module Clock
 */
export class Clock {
  /**
   * @property {Number} horas - Número que representa las horas.
   * @private
   */
  #horas;
  /**
   * @property {Number} minutos - Número que representa los minutos.
   * @private
   */
  #minutos;

  /**
   * @constructor
   * @param {Number} horas - Número que representa las horas.
   * @param {Number} minutos - Número que representa los minutos.
   */
  constructor(horas, minutos) {
    /** @private */
    this.#horas = horas;
    /** @private */
    this.#minutos = minutos;
  }

  /**
   * @description - Devuelve el valor de las horas.
   * @return {Number} - Valor de las horas.
   */
   getHoras() {
    return parseFloat(this.#horas);
  }

  /**
   * @description - Devuelve el valor de los minutos.
   * @return {Number} - Valor de los minutos.
   */
  getMinutos() {
    return parseFloat(this.#minutos);
  }

  /**
   * @description Devuelve una cadena que representa la hora de la clase.
   * @return {String} - Cadena que representa la hora.
   */
  toString() {
    if (this.#horas < 10) {
      if (this.#minutos < 10) {
        return `0${this.#horas}:0${this.#minutos}`;
      }
      return `0${this.#horas}:${this.#minutos}`;
    }
    if (this.#minutos < 10) {
      return `${this.#horas}:0${this.#minutos}`;
    }
  }

  /**
   * @description Añade minutos al objeto.
   * @param {Number} minutos - Número de minutos a sumar.
   * @return {Clock} - Objeto Clock con los minutos añadidos.
   */
  suma(minutos) {
    const nuevoMinutos = this.#minutos + parseInt(minutos);
    const nuevaHora = this.#horas + Math.floor(nuevoMinutos / 60);
    const nuevoMinuto = nuevoMinutos % 60;
    return new Clock(nuevaHora, nuevoMinuto);
  }

  /**
   * @description Resta minutos al objeto.
   * @param {Number} minutos - Número de minutos a sumar.
   * @return {Clock} - Objeto Clock con los minutos disminuidos.
   */
  resta(minutos) {
    const nuevoMinutos = this.#minutos - minutos;
    const nuevaHora = this.#horas - Math.floor(nuevoMinutos / 60);
    const nuevoMinuto = nuevoMinutos % 60;
    return new Clock(nuevaHora, nuevoMinuto);
  }

  /**
   * @description Comprueba que dos objetos sean iguales, mayor o menor.
   * @param {Clock} clock1 - Objeto Clock a comparar.
   * @return {String} - Cadena que representa el resultado de la comparación.
   */
  compara(clock1) {
    if (this.#horas === clock1.getHoras() && this.#minutos === clock1.getMinutos()) {
      return '=';
    }
    if (this.#horas > clock1.getHoras()) {
      return '>';
    }
    if (this.#horas < clock1.getHoras()) {
      return '<';
    }
    if (this.#horas === clock1.getHoras() && this.#minutos > clock1.getMinutos()) {
      return '>';
    }
    if (this.#horas === clock1.getHoras() && this.#minutos < clock1.getMinutos()) {
      return '<';
    }
  }
}

export default Clock;