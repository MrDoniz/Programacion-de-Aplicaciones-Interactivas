/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 21 2022
 * @desc Yacht
 *       The dice game Yacht is from the same family as Poker Dice, Generala
 *       and particularly Yahtzee, of which it is a precursor. In the game,
 *       five dice are rolled and the result can be entered in any of twelve
 *       categories. The score of a throw of the dice depends on category
 *       chosen.
 * @see {@link https://exercism.org/tracks/javascript/exercises/yacht}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */


/**
 * @description Given an array representing the values of 5 dices and a category
 * returns the score of the given values depending on the category.
 * @param {Array} diceValues - Array representing the values of 5 dices.
 * @param {String} category - The category of the score.
 * @returns {Number} the score of the given values depending on the category.
 */
 export const score = (diceValues, category) => {
  switch (category) {
    case 'ones' :
  	case 'twos' :
  	case 'threes' :
  	case 'fours' :
  	case 'fives' :
  	case 'sixes' :
      return scoreOfNumber(diceValues, category);
      break;
    case 'full house' :
      return scoreFullHouse(diceValues);
      break;
    case 'four of a kind' :
      return scoreFourOfAKind(diceValues);
      break;
    case 'little straight' :
      return scoreLittleStraight(diceValues);
      break;
    case 'big straight' :
      return scoreBigStraight(diceValues);
      break;
    case 'choice' :
      return scoreChoice(diceValues);
      break;
    case 'yacht' :
      return scoreYacht(diceValues);
      break;
  }
};

/**
 * @description Given an array representing the values of 5 dices and a number
 * category returns the number category times the number of values that are the
 * same as the number category.
 * @param {Array} diceValues - Array representing the values of 5 dices.
 * @param {String} category - The category of the score.
 * @returns {Number} the score of the given values depending on the number category.
 */
function scoreOfNumber(diceValues, number) {
  let values = {ones: 1, twos: 2, threes: 3, fours: 4, fives: 5, sixes: 6};
  let repetitions = diceValues.filter(element => element=== values[number]);
  return repetitions.length > 0 ? repetitions.reduce((acc, curr) => acc + curr) : 0;
}

/**
 * @description Given an array representing the values of 5 dices if there are
 * three of one number and two of another returns the total of the dice.
 * @param {Array} diceValues - Array representing the values of 5 dices.
 * @returns {Number} the score of the given values.
 */
function scoreFullHouse(diceValues) {
  let values = [0, 0, 0, 0, 0, 0];
  diceValues.sort((a,b) => a - b);
  for (let dice of diceValues) {
    values[dice]++;
  }
  if (values.some(element => element === 2) && values.some(element => element === 3)) {
    return diceValues.reduce((acc, curr) => acc + curr);
  }  else {
    return 0;
  }
}

/**
 * @description Given an array representing the values of 5 dices if there are
 * four of one number returns the total of the dice.
 * @param {Array} diceValues - Array representing the values of 5 dices.
 * @returns {Number} the score of the given values.
 */
function scoreFourOfAKind(diceValues) {
  let values = [0, 0, 0, 0, 0, 0];
  diceValues.sort((a,b) => a - b);
  for (let dice of diceValues) {
    values[dice - 1]++;
  }
  if(values.findIndex(element => element >= 4) !== -1) {
    return (values.findIndex(element => element >= 4) + 1) * 4;
  } else {
    return 0;
  }
}

/**
 * @description Given an array representing the values of 5 dices if the values
 * are [1, 2, 3, 4, 5] returns 30, if not returns 0.
 * @param {Array} diceValues - Array representing the values of 5 dices.
 * @returns {Number} the score of the given values.
 */
function scoreLittleStraight(diceValues) {
  diceValues.sort((a,b) => a - b);
  for (let i = 0; i < diceValues.length; i++) {
    if (diceValues[i] !== i + 1) return 0;
  }
  return 30;
}

/**
 * @description Given an array representing the values of 5 dices if the values
 * are [2, 3, 4, 5, 6] returns 30, if not returns 0.
 * @param {Array} diceValues - Array representing the values of 5 dices.
 * @returns {Number} the score of the given values.
 */
function scoreBigStraight(diceValues) {
  diceValues.sort((a,b) => a - b);
  for (let i = 0; i < diceValues.length; i++) {
    if (diceValues[i] !== i + 2) return 0;
  }
  return 30;
}

/**
 * @description Given an array representing the values of 5 dices returns the
 * sum of the dices.
 * @param {Array} diceValues - Array representing the values of 5 dices.
 * @returns {Number} the score of the given values.
 */
function scoreChoice(diceValues) {
  return diceValues.reduce((acc, curr) => acc + curr);
}

/**
 * @description Given an array representing the values of 5 dices
 * returns 50 if all the dices are the exact same number, 0 if not.
 * @param {Array} diceValues - Array representing the values of 5 dices.
 * @returns {Number} the score of the given values.
 */
function scoreYacht(diceValues) {
  const allEqual = score => score.every(v => v === score[0]);
  return allEqual(diceValues) ? 50 : 0;
}
