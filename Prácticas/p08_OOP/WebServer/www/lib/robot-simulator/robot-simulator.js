/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since April 06 2022
 * @desc Robot simulator
 */
'use strict';
/**
* @desc Class that represents the invalid input errors
* @class InvalidInputError
* @extends Error
* @param {string} message - Error message
*/
export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message_ = message || 'Invalid Input';
  }
}
/**
* @desc Enum that represents the possible directions
* @enum {string}
* @readonly
* @constant
*/
const Direction = {
  /** @desc North */
  NORTH: 'north',
  
  /** @desc East */
  EAST: 'east',
  
  /** @desc South */
  SOUTH: 'south',
  /** @desc West */
  WEST: 'west',
  /** @desc Left */
  LEFT: 'L',
  /** @desc Right */
  RIGHT: 'R',
  /** @desc Advance */
  ADVANCE: 'A',
};
/**
* @desc Class that represents the robot
* @class Robot
*/
export class Robot {
  constructor() {
    this.bearing = Direction.NORTH;
    this.coordinates = [0, 0];
  }
  /**
  * @desc Place the robot on the table
  * @param {object} placeOn - Place where the robot is placed
  * with x: x coordinate, y: y coordinate, direction: direction
  * @return {void}
  * @throws {InvalidInputError}
  */
  place({ x, y, direction }) {
    if (
        !Number.isInteger(x) ||
        !Number.isInteger(y) ||
        (
          direction !== Direction.NORTH &&
          direction !== Direction.EAST &&
          direction !== Direction.SOUTH &&
          direction !== Direction.WEST
        )
    ) {
      throw new InvalidInputError('Invalid Input');
    }
    this.bearing = direction;
    this.coordinates = [x, y];
  }
  /**
  * @desc Move the robot with instructions
  * @param {string} instructions - Instructions to move the robot.
  * Containing L: turn left, R: turn right, A: advance
  * @return {void}
  * @throws {InvalidInputError}
  */
  evaluate(instructions) {
    instructions.split('').forEach(instruction => {
      switch (instruction) {
        case Direction.LEFT:
          this.turnLeft_();
          break;
        case Direction.RIGHT:
          this.turnRight_();
          break;
        case Direction.ADVANCE:
          this.advance_();
          break;
        default:
          throw new InvalidInputError('Invalid Input');
      }
    });
  }
  /**
  * @desc Turn the robot to the left
  * @private
  * @return {void}
  * @throws {InvalidInputError}
  */
  turnLeft_() {
    switch (this.bearing) {
      case Direction.NORTH:
        this.bearing = Direction.WEST;
        break;
      case Direction.EAST:
        this.bearing = Direction.NORTH;
        break;
      case Direction.SOUTH:
        this.bearing = Direction.EAST;
        break;
      case Direction.WEST:
        this.bearing = Direction.SOUTH;
        break;
      default:
        throw new InvalidInputError('Invalid Input');
    }
  }
  /**
  * @desc Turn the robot to the right
  * @private
  * @return {void}
  * @throws {InvalidInputError}
  */
  turnRight_() {
    switch (this.bearing) {
      case Direction.NORTH:
        this.bearing = Direction.EAST;
        break;
      case Direction.EAST:
        this.bearing = Direction.SOUTH;
        break;
      case Direction.SOUTH:
        this.bearing = Direction.WEST;
        break;
      case Direction.WEST:
        this.bearing = Direction.NORTH;
        break;
      default:
        throw new InvalidInputError('Invalid Input');
    }
  }
  /**
  * @desc Move the robot forward
  * @private
  * @return {void}
  * @throws {InvalidInputError}
  */
  advance_() {
    switch (this.bearing) {
      case Direction.NORTH:
        this.coordinates[1] += 1;
        break;
      case Direction.EAST:
        this.coordinates[0] += 1;
        break;
      case Direction.SOUTH:
        this.coordinates[1] -= 1;
        break;
      case Direction.WEST:
        this.coordinates[0] -= 1;
        break;
      default:
        throw new InvalidInputError('Invalid Input');
    }
  }
}