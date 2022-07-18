/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since April 06 2022
 * @desc Robot name
 */
'use strict';
/** @type {string[]} */
const memoRobotNames = [];
/**
* @desc Class Robot
* @class Robot
*/
export class Robot {
  /** @desc Name of the robot @private @type {string} */
  #robotName = '';
  /**
  * @desc Constructor of the class Robot. Set random name
  * @constructor
  */
  constructor() {
    this.randomName();
  }
  /**
  * @desc Getter of the property robotName
  * @returns {string}
  */
  get name() {
    return this.#robotName;
  }
  /**
  * @desc Set random name
  */
  randomName() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const name = [];
    let nameString = '';
    do {
      for (let i = 0; i < 2; i++) {
        name.push(letters[Math.floor(Math.random() * letters.length)]);
      }
      for (let i = 0; i < 3; i++) {
        name.push(numbers[Math.floor(Math.random() * numbers.length)]);
      }
      nameString = name.join('');
    } while (memoRobotNames.includes(nameString));
    memoRobotNames.push(nameString);
    this.#robotName = nameString;
  }
  /**
  * @desc Reset the name of the robot
  */
  reset() {
    this.randomName();
  }
  /**
  * Return the string representation of the object
  * @return {string} String representation of the object
  */
  toString() {
    return this.#robotName;
  }
}
/**
* @desc Release all the robots names
*/
Robot.releaseNames = () => {
  memoRobotNames.length = 0;
}
