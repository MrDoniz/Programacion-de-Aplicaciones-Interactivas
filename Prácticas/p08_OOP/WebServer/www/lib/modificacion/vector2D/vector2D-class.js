/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 31 2022
 * @desc Clase Vector2D para representar vectores en un espacio bidimensional.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

/**
 * Vector2D module
 * @module Vector2D
 */
class Vector2D {
  /**
   * @property {Number} valorX - Valor en el eje x.
   * @private
   */
  #valorX;

  /**
   * @property {Number} valorY - Valor en el eje y.
   * @private
   */
  #valorY;

  /**
   * @method constructor
   * @param {Number} valorX - Valor en el eje x.
   * @param {Number} valorY - Valor en el eje y.
   */
  constructor(valorX, valorY) {
    /** @private */
    this.#valorX = valorX || 0;
    /** @private */
    this.#valorY = valorY || 0;
  }
  /**
   * @description Sumar un par de vectores
   * @param {Vectir2D} vector1 - Primer vector.
   * @param {Vector2D} vector2 - Segundo vector.
   * @return {Vector2D} Objeto de tipo Vector2D.
   */
  sumar(vector1, vector2) {
    if (vector2 instanceof Vector2D) {
      return new Vector2D(vector1.#valorX + vector2.#valorX,
          vector1.#valorY + vector2.#valorY);
    }
    return new Vector2D(vector1.#valorX + vector2, vector1.#valorY + vector2);
  }

  /**
   * @description Calcular el producto de un número real por un vector
   * @param {Vectir2D} vector1 - Primer vector.
   * @param {Number} numero - Número real.
   * @return {Vector2D} Objeto de tipo Vector2D.
   */
  productoReal(vector1, numero) {
    return new Vector2D(vector1.#valorX * numero, vector1.#valorY * numero);
  }

  /**
   * @description Calcular el producto escalar de dos vectores
   * @param {Vectir2D} vector1 - Primer vector.
   * @param {Vector2D} vector2 - Segundo vector.
   * @return {Number} Resultado del producto escalar.
   */
  productoEscalar(vector1, vector2) {
    return vector1.#valorX * vector2.#valorX + vector1.#valorY *
    vector2.#valorY;
  }

  /**
   * @description Calcular el módulo de un vector
   * @param {Vectir2D} vector1 - Primer vector.
   * @return {Number} Resultado del módulo.
   */
  modulo(vector1) {
    const resultado = Math.sqrt(vector1.#valorX * vector1.#valorX +
      vector1.#valorY * vector1.#valorY);
    return Math.round(resultado * 100) / 100;
  }

  /**
   * @description Calcular el ángulo (en grados) que forman dos vectores
   * @param {Vectir2D} vector1 - Primer vector.
   * @param {Vector2D} vector2 - Segundo vector.
   * @return {Number} Resultado del ángulo que forman los dos vectores.
   */
  angulo(vector1, vector2) {
    // con 2 decimales
    const resultado = (Math.acos(this.productoEscalar(vector1, vector2) /
    (this.modulo(vector1) * this.modulo(vector2)))) * (180 / Math.PI);
    return Math.round(resultado * 100) / 100;
  }

  /**
   * @description Imprimir en pantalla (consola) las componentes de un
   * vector en un formato adecuado
   * @param {Vectir2D} vector - Vector a imprimir.
   * @return {String} Resultado del módulo.
   */
  imprimir(vector) {
    return `{${vector.#valorX}, ${vector.#valorY}}`;
  }
}

export {Vector2D};
