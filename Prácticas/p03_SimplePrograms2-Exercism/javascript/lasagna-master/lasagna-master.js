/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(time) {
  if (time === 0) {
    return 'Lasagna is done.';
  }
  else if (time > 0) {
    return 'Not done, please wait.';
  }
  else {
    return 'You forgot to set the timer.';
  }
}

/**
 * @param {number} layers - the number of layers
 * @param {number} timePerLayer - the time needed to cook each layer
 * @returns {number} the total time needed to cook the lasagna
 * @description Given the number of layers and the time needed to cook each layer,
 */
export function preparationTime(layers, timePerLayer=2) {
  return layers.length * timePerLayer;
}

/**
 * @param {*} ingredients - the ingredients of the lasagna
 * @returns {number} the number of ingredients
 * @description Given the ingredients of the lasagna,
 */
export function quantities(ingredients) {
  return {
    noodles: ingredients.filter(i => i === 'noodles').length * 50,
    sauce: ingredients.filter(i => i === 'sauce').length * 0.2,
  }
}

/**
 * 
 * @param {*} friendList - the list of friends
 * @param {*} myList - the list of my friends
 * @returns {number} the number of friends in common
 * @description Given the list of friends and my friends,
 */
export function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length - 1]);
}

/**
 * 
 * @param {*} recipe - the recipe
 * @param {*} amount - the amount of ingredients
 * @returns {number} the number of ingredients
 * @description Given the recipe and the amount of ingredients,
 */
export function scaleRecipe(recipe, amount) {
  const scaled = {};
  for (const key in recipe) {
    scaled[key] = recipe[key] * amount / 2;
  }
  return scaled;
}