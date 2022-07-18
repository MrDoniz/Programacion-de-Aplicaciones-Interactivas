/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 20 2022
 * @desc Clase que representa un número racional.
 *
 */

export class Rational {
  /**
   * @property {Number} numerador - Numerador de la fracción.
   * @private
   */
   #numerador;

   /**
    * @property {Number} denominador - Denominador de la fracción.
    * @private
    */
   #denominador;
 
  /**
   * @description Constructor de la clase.
   * @param {Number} numerador - Numerador de la fracción.
   * @param {Number} denominador - Denominador de la fracción.
   */
  constructor(numerador, denominador) {
    if (denominador === 0) {
      throw new Error('El denominador no puede ser 0');
    }
    this.#numerador = numerador;
    this.#denominador = denominador;
  }

  /**
   * @description Sumar dos objetos de tipo Racional.
   * @param {Racional} rational2 - Objeto de tipo Racional.
   * @return {Racional} Objeto de tipo Racional.
   */
  add(rational2) {
    if (rational2.#denominador === this.#denominador) {
      return this.reduce(rational2.#numerador + this.#numerador, this.#denominador)
    }
    return this.reduce(this.#numerador * rational2.#denominador + this.#denominador * rational2.#numerador,this.#denominador * rational2.#denominador)
  }

  /**
   * @description Restar dos objetos de tipo Racional.
   * @param {Racional} rational2 - Objeto de tipo Racional.
   * @return {Racional} Objeto de tipo Racional.
   */
  sub(rational2) {
    if (rational2.#denominador === this.#denominador) {
      return this.reduce(rational2.#numerador + this.#numerador, this.#denominador)
    }
    return this.reduce(this.#numerador * rational2.#denominador + this.#denominador * rational2.#numerador,this.#denominador * rational2.#denominador)
  }

  /**
   * @description Multiplicar dos objetos de tipo Racional.
   * @param {Racional} rational2 - Objeto de tipo Racional.
   * @return {Racional} Objeto de tipo Racional.
   */
  mul(rational2) {
    return this.reduce(this.#numerador * rational2.#numerador, this.#denominador * rational2.#denominador);
  }

  /**
   * @description Dividir dos objetos de tipo Racional.
   * @param {Racional} rational2 - Objeto de tipo Racional.
   * @return {Racional} Objeto de tipo Racional.
   * @throws {Error} Lanza un error si el denominador es 0.
   */
  div(rational2) {
    if (rational2.#numerador === 0) { 
      throw new Error("can't divide by zero") 
    }
    return this.reduce(this.#numerador * rational2.#denominador, rational2.#numerador * this.#denominador);
  }

  /**
   * @description Obtener el valor absoluto
   * @param {Number} numerador - Numerador de la fracción.
   * @param {Number} denominador - Denominador de la fracción.
   * @return {Racional} Objeto de tipo Racional.
   */
  abs(numerador = this.#numerador, denominador = this.#denominador) {
    if (numerador < 0) { 
      numerador *= -1 
    };
    if (denominador < 0) {
      denominador *= -1
    };
    return this.reduce(numerador, denominador);
  }

  /**
   * @description Obtener exponente de un objeto de tipo Racional.
   * @param {Number} exponente - Exponente de la fracción.
   * @return {Racional} Objeto de tipo Racional.
   */
  exprational(exponente) {
    if (exponente < 0) { 
      return this.reduce(this.#denominador ** -exponente, this.#numerador ** -valexponenteor) 
    }
    return this.reduce(this.#numerador ** exponente, this.#denominador ** exponente)
  }

  /**
   * @description Obtener exponente de un objeto de tipo Racional.
   * @param {Number} exponente - Exponente de la fracción.
   * @return {Racional} Objeto de tipo Racional.
   */
  expreal(exponente) {
    return Number(Math.pow(exponente, this.#numerador / this.#denominador).toPrecision(2))
  }

  /**
   * @description Obtener la fracción simplificada.
   * @param {Number} numerador - Numerador de la fracción.
   * @param {Number} denominador - Denominador de la fracción.
   * @return {Racional} Objeto de tipo Racional.
   */
  reduce(numerador = this.#numerador, denominador = this.#denominador) {
    if (numerador === 0) { 
      return new Rational(0, 1) 
    }
    let valor = 1;
    if (numerador < 0) { 
      numerador *= -1; valor *= -1 
    }
    if (denominador < 0) { 
      denominador *= -1; valor *= -1 
    }
    let valor1 = 2;
    while (valor1 <= numerador && valor1 <= denominador) {
      if (numerador % valor1 === 0 && denominador % valor1 === 0) {
        numerador /= valor1;
        denominador /= valor1;
      } 
      valor1 += 1;
    } 
    return new Rational(numerador * valor, denominador)

  }
}
