/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 27 2022
 * @desc Exercism
 *
 */

export class ComplexNumber {
   /**
    * @constructor
    * @param {Number} parteReal - Número que representa ña parte real
    * @param {Number} parteImaginaria - Número que representa la parte
    * imaginaria
    */
  constructor(parteReal, imaginario) {
    this.parteReal = parteReal;
    this.imaginario = imaginario;
  }
  /**
   * @description - Devuelve el valor real de un número complejo
   * @return {Number} - Valor real de un número complejo
   */
  get real() {
    return this.parteReal;
  }
  /**
   * @description - Devuelve el valor imaginario de un número complejo
   * @return {Number} - Valor imaginario de un número complejo
   */
  get imag() {
    return this.imaginario;
  }
  /**
   * @description Devuelve un objeto que representa la suma de dos números
   * complejos.
   * @param {Complejo} otro - Objeto que representa el otro número complejo.
   * @return {Complejo} - Objeto que representa la suma de dos números
   * complejos.
   */
  add(complex) {
    return {'imaginario': this.imag + complex.imag, 'parteReal': this.real+ complex.real}
  }
  /**
   * @description Devuelve un objeto que representa la resta de dos números
   * complejos.
   * @param {Complejo} otro - Objeto que representa el otro número complejo.
   * @return {Complejo} - Objeto que representa la resta de dos números
   * complejos.
   */
  sub(complex) {
    return {'imaginario': this.imag - complex.imag, 'parteReal': this.real- complex.real};
  }
  /**
   * @description Devuelve un objeto que representa la división de dos
   * números complejos.
   * @param {Complejo} otro - Objeto que representa el otro número complejo.
   * @return {Complejo} - Objeto que representa la división de dos
   * números complejos.
   */
  div(complex) {
   let auxReal, auxImaginaria, factor = 1/((complex.real)**2 + (complex.imag)**2);
    auxReal = factor * (this.real * complex.real + this.imag * complex.imag);
    auxImaginaria = factor * (this.imag * complex.real - this.real * complex.imag);

    return {'imaginario': auxImaginaria, 'parteReal': auxReal}
  }
  /**
   * @description Devuelve un objeto que representa la multiplicación de dos
   * números complejos.
   * @param {Complejo} otro - Objeto que representa el otro número complejo.
   * @return {Complejo} - Objeto que representa la multiplicación de dos
   * números complejos.
   */
  mul(complex) {
    let auxReal, auxImaginaria;
    auxReal = this.real * complex.real - complex.imag * this.imag;
    auxImaginaria = this.real * complex.imag + this.imag * complex.real;
    return {'imaginario': auxImaginaria, 'parteReal': auxReal}
  }
  /**
   * @description Calcula el valor absoluto de un número complejo.
   * @return {Number} - Valor absoluto del número complejo.
   */
  get abs() {
    return Math.sqrt(this.real**2 + this.imag**2)
  }
  /**
   * @description Calcula el conjugado de un número complejo.
   * @return {Number} - Conjugado del número complejo.
   */
  get conj() {
    let resultado;
    this.imag == 0? resultado = this.imag: resultado = -(this.imag)
    return {'imaginario': resultado, 'parteReal': this.real};
  }
  /**
   * @description Calcula el exponente de un número complejo.
   * @return {Number} - Exponente del número complejo.
   */
  get exp() {
    let auxReal, auxImaginaria;
    auxReal = Math.exp(this.real) * Math.cos(this.imag);
    auxImaginaria = Math.exp(this.real) * Math.sin(this.imag);
    return new ComplexNumber(auxReal, auxImaginaria);
  } 
}