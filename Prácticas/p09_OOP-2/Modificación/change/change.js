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

export class Change {
  /**
   * @description Genera
   * @param {Array} coinArray - Array de monedas.
   * @param {Number} target - Número de monedas.
   * @returns {Array} - Array de monedas.
   */
  calculate(coinArray, target) {
    if (target < 0) { 
      throw new Error('Negative totals are not allowed.');
    }
    if (!Array.isArray(coinArray) || coinArray.length == 0) {
      throw new Error('Array of coin not provided');
    }
    if (target == 0) {
      return [];
    }
    if (coinArray.includes(target)) {
      return [target];
    }
    // 
    let resultadoVector = [[]];
    for (let valor = 0; valor < target; valor++) {
      if (resultadoVector[valor]) {
        coinArray.forEach(moneda => {
          let combo = resultadoVector[valor].concat(moneda);
          if (!resultadoVector[moneda + valor] ||
            (combo.length < resultadoVector[moneda + valor].length)) {
            resultadoVector[moneda + valor] = combo;
          }
          //console.log(combo);
        });
      }
    }
    //console.log(resultadoVector);
    if (!resultadoVector[target]) {
      throw new Error(`The total ${target} cannot be represented in the given currency.`);
    }

    return resultadoVector[target];
  }
}
