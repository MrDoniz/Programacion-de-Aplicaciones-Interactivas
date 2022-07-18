/**
  * Universidad de La Laguna
	* Escuela Superior de IngenierÃ­a y TecnologÃ­a
	* Grado en IngenierÃ­a InformÃ¡tica
	* ProgramaciÃ³n de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 22 March 2022
	* @desc Yatch - Exercism
  * score computes the score earned by a player in a given throw of Yacht
	*
  * @see {@link https://exercism.io/my/solutions/5f2e1e4332fd419abf2ea365b05b4e3b}
  * @see {@link https://en.wikipedia.org/wiki/Yacht_(dice_game)}
*/

'use strict';

/**
 * Returns the score earned by a player in a throw of a game of Yacht
 * @param {number[]} values Values rolled in the dices
 * @param {string} category to compute the score
 * @returns {number} Returns the score earned by the player
 */
const score = (values, category) => {
  switch (category) {
    case 'ones':
      return simpleScore(values, 0);
    case 'twos':
      return simpleScore(values, 1);
    case 'threes':
      return simpleScore(values, 2);
    case 'fours':
      return simpleScore(values, 3);
    case 'fives':
      return simpleScore(values, 4);
    case 'sixes':
      return simpleScore(values, 5);
    case 'full house':
      return fullHouse(values);
    case 'four of a kind':
      return fourOfAKind(values);
    case 'little straight':
      return littleStraight(values);
    case 'big straight':
      return bigStraight(values);
    case 'choice':
      return choice(values);
    case 'yacht':
      return yacht(values);
    default:
      throw new Error('Invalid category');
  }
};
module.exports = score;

/**
 * @desc Computes the score corresponding to several categories (the 'simple' categories)
 *       'Simple categories' are Ones, Twos, Threes, ... Sixes 
 *       In each of these categories, the score is the sum of the corresponding number 
 *       of dice multiplied by the dice score in each category.
 * @param {Array} values. Values rolled in the dices
 * @param {number} points. Points corresponding to a simple score category
 * @returns {number} The score corresponding to the corresponding category
 */
const simpleScore = function(values, points) {
  //return values.filter(currentValue => currentValue === points).length * (points + 1);
  const coincidencia = values.filter(valorActual => {
    console.log(values, valorActual);
    return valorActual === points + 1;
  });
  console.log(coincidencia);
  return coincidencia.length * (points + 1);
}

  

/**
 * @desc Calculates the score corresponding to the fullHouse category
 * @param {number[]} values Values rolled in the dices
 * @returns {number} The score corresponding to this category
 */
const fullHouse = function(values) {
  const firstGroupSize = values.filter(currentValue => {
    return currentValue === values[0];
  }).length;
  const rest = values.filter(currentValue => {
    return currentValue !== values[0];
  });
  const secondGroupSize = values.filter(currentValue => {
    return currentValue === rest[0];
  }).length;
  if ((firstGroupSize == 3 && secondGroupSize == 2) ||
      (firstGroupSize == 2 && secondGroupSize == 3)) {
    return values.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}

/**
 * @desc Calculates the score corresponding to the Little Straight category
 * @param {number[]} values Values rolled in the dices
 * @returns {number} The score corresponding to this category
 */
const littleStraight = function(values) {
  for (let i = 1; i < 6; i++) {
    if (values.indexOf(i) < 0) {
      return 0;
    }
  }
  return 10;
}

/**
 * @desc Calculates the score corresponding to the Big Straight category
 * @param {number[]} values Values rolled in the dices
 * @returns {number} The score corresponding to this category
 */
const bigStraight = function(values) {
  for (let i = 2; i <= 5; i++) {
    if (values.indexOf(i) < 0) {
      return 0;
    }
  }
  return 20;
}

/**
 * @desc Calculates the score corresponding to the Four-Of-A-Kind	category
 * @param {number[]} values Values rolled in the dices
 * @returns {number} The score corresponding to this category
 */
const fourOfAKind = function(values) {
  for (let i = 0; i < 2; i++) {
    const coincidences = values.filter(currentValue => {
      return currentValue === values[i];
    });
    if (coincidences.length >= 4) {
      return values[i] * 4;
    }
  }
  return 0;
}

/**
 * @desc Calculates the score corresponding to the Choice category
 * @param {number[]} values Values rolled in the dices
 * @returns {number} The score corresponding to this category
 */
const choice = function(values) {
  return values.reduce((accumulator, currentValue) => accumulator + currentValue);
}

/**
 * @desc Calculates the score corresponding to the Yacht category
 * @param {number[]} values Values rolled in the dices
 * @returns {number} The score corresponding to this category
 */
const yacht = function(values) {
  if (values.every(x => x === values[0])) {
    return 50;
  }
  return 0;
}

function main() {
  console.log(score([1, 2, 3, 3, 3, 4, 6],  'ones'));
  //console.log(score([1, 1, 1, 3, 5],  'ones'));
}

if (require.main === module) {
  main();
}