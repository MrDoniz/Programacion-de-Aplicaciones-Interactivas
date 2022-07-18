/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 31 2022
 * @desc Clase Vector3D para representar vectores en un espacio tridimensional.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

/**
 * Vector3D module
 * @module Vector3D
 */
export class Vector3D {
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
   * @property {Number} valorZ - Valor en el eje z.
   * @private
   */
  #valorZ;

  /**
   * @constructor
   * @param {Number} valorX - Valor en el eje x.
   * @param {Number} valorY - Valor en el eje y.
   * @param {Number} valorZ - Valor en el eje z.
   */
  constructor(valorX, valorY, valorZ) {
    /** @private */
    this.#valorX = valorX || 0;
    /** @private */
    this.#valorY = valorY || 0;
    /** @private */
    this.#valorZ = valorZ || 0;
  }
  /**
   * @description Sumar un par de vectores
   * @param {Vector3D} vector1 - Primer vector.
   * @param {Vector3D} vector2 - Segundo vector.
   * @return {Vector3D} Objeto de tipo Vector3D.
   */
  sumar(vector1, vector2) {
    if (vector2 instanceof Vector3D) {
      return new Vector3D(vector1.#valorX + vector2.#valorX, vector1.#valorY +
        vector2.#valorY, vector1.#valorZ + vector2.#valorZ);
    }
    return new Vector3D(vector1.#valorX + vector2, vector1.#valorY +
      vector2, vector1.#valorZ + vector2);
  }

  /**
   * @description Calcular el producto de un número real por un vector
   * @param {Vector3D} vector1 - Primer vector.
   * @param {Number} numero - Número real.
   * @return {Vector3D} Objeto de tipo Vector3D.
   */
  productoReal(vector1, numero) {
    return new Vector3D(vector1.#valorX * numero, vector1.#valorY *
      numero, vector1.#valorZ * numero);
  }

  /**
   * @description Calcular el producto escalar de dos vectores
   * @param {Vector3D} vector1 - Primer vector.
   * @param {Vector3D} vector2 - Segundo vector.
   * @return {Number} Resultado del producto escalar.
   */
  productoEscalar(vector1, vector2) {
    return vector1.#valorX * vector2.#valorX + vector1.#valorY *
      vector2.#valorY;
  }

  /**
   * @description Calcular el módulo de un vector
   * @param {Vector3D} vector1 - Primer vector.
   * @return {Number} Resultado del módulo.
   */
  modulo(vector1) {
    const resultado = Math.sqrt(Math.pow(vector1.#valorX, 2) + Math.pow(
        vector1.#valorY, 2) + Math.pow(vector1.#valorZ, 2));
    return Math.round(resultado * 100) / 100;
  }

  /**
   * @description Calcular el ángulo (en grados) que forman dos vectores
   * @param {Vector3D} vector1 - Primer vector.
   * @param {Vector3D} vector2 - Segundo vector.
   * @return {Number} Resultado del ángulo que forman los dos vectores.
   */
  angulo(vector1, vector2) {
    const resultado = (Math.acos(this.productoEscalar(vector1, vector2) /
        (this.modulo(vector1) * this.modulo(vector2))) * 180) / Math.PI;
    return Math.round(resultado * 100) / 100;
  }

  /**
   * @description Imprimir en pantalla (consola) las componentes de un
   * vector en un formato adecuado
   * @param {Vector3D} vector - Vector a imprimir.
   * @return {String} Resultado del módulo.
   */
  imprimir(vector) {
    return `{${vector.#valorX}, ${vector.#valorY}, ${vector.#valorZ}}`;
  }

  /**
   * @description Normalizar el vector
   * @return {Vector3D} Objeto de tipo Vector3D.
   */
  normalizar() {
    const modulo = this.modulo(this);
    return new Vector3D(this.#valorX / modulo, this.#valorY / modulo,
        this.#valorZ / modulo);
  }
}

export default Vector3D;
