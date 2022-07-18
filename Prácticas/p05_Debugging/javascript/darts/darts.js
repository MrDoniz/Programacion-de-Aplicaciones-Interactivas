/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 21 2022
 * @desc Darts
 *       Write a function that returns the earned points in a single toss of a
 *       Darts game.Darts is a game where players throw darts to a target.Write
 *       a function that given a point in the target (defined by its real
 *       cartesian coordinates x and y), returns the correct amount earned by a
 *       dart landing in that point.
 * @see {@link https://exercism.org/tracks/javascript/exercises/darts}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 *
 */

/**
 * Function that returns the earned points in a single toss of a Darts game.
 * the target rewards with 4 different amounts of points, depending on where 
 * the dart lands. Outside the target 0, outer circle 1, middle circle 5, inner
 * circle 10
 *
 * @param {number} coordinateX coordinate X of the dart
 * @param {number} coordinateY coordinate Y of the dart
 *
 * @returns {number} score earned
 */
 export const score = (coordinateX, coordinateY) => {
  const innerCircleRadius = 1;
  const middleCircleRadius = 5;
  const outerCircleRadius = 10;
  if (isPointInsideCircle(coordinateX, coordinateY, innerCircleRadius)) {
    return 10;
  } 
  if(isPointInsideCircle(coordinateX, coordinateY, middleCircleRadius)) {
    return 5;
  } 
  if(isPointInsideCircle(coordinateX, coordinateY, outerCircleRadius)) {
    return 1;
  }
  return 0;
};
/**
 * Function that checks wether a given point is within a circle or not.
 * This is done by calculating the distance from the given point and the
 * center of the circle and checking if the distance is lower or equal
 * than the radius.
 *
 * @param {number} pointX coordinate X of the point
 * @param {number} pointY coordinate Y of the point
 * @param {number} radius radius of the circle
 * @param {number} centerX coordinate X of the circle
 * @param {number} centerY coordinate Y of the circle
 *
 * @returns {boolean} true if the given point is inside of the circle, false if not.
 */
function isPointInsideCircle(pointX, pointY, radius, centerX = 0, centerY = 0) {
  const distanceFromCenter = Math.sqrt(Math.pow((centerX - pointX), 2) +
                                      Math.pow((centerY - pointY), 2));
  return distanceFromCenter <= radius;
}