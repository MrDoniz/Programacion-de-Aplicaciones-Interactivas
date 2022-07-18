/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Cliente de la clase que representa la clase Set.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

/**
 * MySet module
 * @module MySet
 */
class MySet {
  /**
   * @property {Array} values - Array de elementos del conjunto
   * @private
   */
  #values;

  /**
   * @constructor
   * @param {Array} [array] - Array of elements to initialize the set
   */
  constructor(array) {
    /** @private */
    this.#values = array || [];
  }
  /**
   * @description Devuelve una cadena que representa el conjunto. Los conjuntos
   * se imprimirán en pantalla con sus elementos incluídos entre llaves, de
   * modo que el conjunto vacío se representa por {}.
   * @return {String} - Cadena que representa el conjunto.
   */
  toString() {
    let cadena = '{';
    for (const elemento of this.#values) {
      cadena += elemento + ', ';
    }
    cadena = cadena.substring(0, cadena.length - 2);
    cadena += '}';
    return cadena;
  }
  /**
   * @description size Devuelve el cardinal del conjunto
   * @return {Number} - Cardinal del conjunto
   */
  size() {
    // devuelve el cardinal del conjunto
    return this.#values.length;
  }
  /**
   * @description Añade un elemento a un conjunto
   * @param {Number} numero - Elemento a añadir
   */
  add(numero) {
    this.#values.push(numero);
  }
  /**
   * @description union Unión de conjuntos
   * @param {MySet} set - Conjunto a unir
   * @return {MySet} - Conjunto resultante de la unión
   */
  union(set) {
    const union = new MySet(this.#values);
    for (const elemento of set.#values) {
      union.add(elemento);
    }
    return union;
  }
  /**
   * @description intersección Intersección de conjuntos
   * @param {MySet} set - Conjunto a intersecar
   * @return {MySet} - Conjunto resultante de la intersección
   */
  intersection(set) {
    const intersection = new MySet();
    for (const elemento of this.#values) {
      if (set.contains(elemento)) {
        intersection.add(elemento);
      }
    }
    return intersection;
  }
  /**
   * @description contains Comprueba si un elemento está en un conjunto
   * @param {Number} numero - Elemento a comprobar
   * @return {Boolean} - True si el elemento está en el conjunto, false en caso
   * contrario
   */
  contains(numero) {
    for (const elemento of this.#values) {
      if (elemento === numero) {
        return true;
      }
    }
    return false;
  }
  /**
   * @description empty Comprueba si un conjunto está vacío
   * @return {Boolean} - True si el conjunto está vacío, false en caso contrario
   */
  empty() {
    return this.#values.length === 0;
  }
  /**
   * @description subSet Comprueba si un conjunto es subconjunto de otro
   * @param {MySet} set - Conjunto a comprobar
   * @return {Boolean} - True si el conjunto es subconjunto del otro, false en
   * caso contrario
   */
  subSet(set) {
    for (const elemento of this.#values) {
      if (!set.contains(elemento)) {
        return false;
      }
    }
    return true;
  }
  /**
   * @description disjorint Comprueba si dos conjuntos son disjuntos
   * @param {MySet} set - Conjunto a comprobar
   * @return {Boolean} - True si los conjuntos son disjuntos, false en caso
   * contrario
   */
  disjoint(set) {
    for (const elemento of this.#values) {
      if (set.contains(elemento)) {
        return false;
      }
    }
    return true;
  }
  /**
   * @description eql Comprueba si dos conjuntos son iguales
   * @param {MySet} set - Conjunto a comprobar
   * @return {Boolean} - True si los conjuntos son iguales, false en caso
   * contrario
   */
  eql(set) {
    if (this.size() !== set.size()) {
      return false;
    }
    for (const elemento of this.#values) {
      if (!set.contains(elemento)) {
        return false;
      }
    }
    return true;
  }
  /**
   * @description has Subconjunto de un conjunto
   * @param {Number} numero - Elemento a comprobar
   * @return {Boolean} - True si el conjunto es subconjunto del otro, false en
   * caso contrario
   */
  has(numero) {
    return this.contains(numero);
  }
}


export {MySet};
