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

export class CustomSet {
  #items;
   /**
    * @constructor
    * @param {Array} items - Array de elementos que representan el conjunto
    */
  constructor(items = []) {
    this.#items = items;
  }  
  /**
   * @description - Devuelve si contiene o no elementos
   * @return {Boolean} - True si contiene elementzos, false en caso contrario
   */
  empty() {
    return !this.#items.length;
  }
  /**
   * @description - Devuelve el elemento que está en la posición index
   * @return {Number} - Elemento que está en la posición index
   */
  contains(item) {
    return this.#items.includes(item);
  }
  /**
   * @description - Devuelve un array con los elementos del conjunto
   * @return {Array} - Array con los elementos del conjunto
   */
  add(item) {
    if (!this.contains(item)) {
      this.#items.push(item);
    }
    return this;
  }
  /**
   * @description - Devuelve un array con los elementos del subconjunto 
   * @return {Array} - Array con los elementos del conjunto
   */
  subset(compared) {
    return this.#items.every((item) => compared.contains(item));
  }
  /**
   * @description - Devuelve un array con los elementos del conjunto disjunto
   * @return {Array} - Array con los elementos del conjunto
   */
  disjoint(compared) {
    return !this.#items.some((item) => compared.contains(item));
  }
  /**
   * @description - Devuelve si el conjunto es igual al otro
   * @return {Boolean} - True si son iguales, false en caso contrario
   */
  eql(compared) {
    return compared.subset(this) && this.subset(compared);
  }
  /**
   * @description - Devuelve un array con los elementos de la unión de dos
   * conjuntos
   * @return {Array} - Array con los elementos de la unión de dos conjuntos
   */
  union(otherSet) {
    return new CustomSet(this.#items.concat(otherSet.#items));
  }
  /**
   * @description - Devuelve un array con los elementos de la intersección de
   * dos conjuntos
   * @return {Array} - Array con los elementos de la intersección de dos conjuntos
   */
  intersection(compared) {
    const sharedItems = [];
    this.#items.forEach(
      (item) => compared.contains(item) && sharedItems.push(item)
    );
    return new CustomSet(sharedItems);
  }
  /**
   * @description - Devuelve un array con los elementos de la diferencia de dos
   * conjuntos
   * @return {Array} - Array con los elementos de la diferencia de dos conjuntos
   */
  difference(compared) {
    const uniqueItems = [];
    this.#items.forEach(
      (item) => !compared.contains(item) && uniqueItems.push(item)
    );
    return new CustomSet(uniqueItems);
  }
}