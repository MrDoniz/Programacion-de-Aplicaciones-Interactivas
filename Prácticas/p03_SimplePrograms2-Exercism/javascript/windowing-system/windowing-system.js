// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/**
 * 
 * @param {Number} width - the width of the window
 * @param {Number} height - the height of the window
 * @description The windowing system is a class that represents a window.
 */
export function Size(width = 80, height = 60) {
  this.resize(width, height)
}

/**
 * 
 * @param {Number} width - the width of the window
 * @param {Number} height - the height of the window
 * @description Resizes the window.
 */
Size.prototype.resize = function(width, height) {
  this.width = width
  this.height = height
}
/**
 * @param {Number} x - the x coordinate of the window
 * @param {Number} y - the y coordinate of the window
 * @description The windowing system is a class that represents a window.
 */
export function Position(x = 0, y = 0) {
  this.move(x, y)
}

/**
 * @param {Number} x - the x coordinate of the window
 * @param {Number} y - the y coordinate of the window
 * @description Moves the window.
 */
Position.prototype.move = function (x, y) {
  this.x = x
  this.y = y
}


export class ProgramWindow {
  constructor() {
    this.size = new Size()
    this.position = new Position()
    this.screenSize = new Size(800,600)
  }
  
  /**
   * @description Returns the window's size.
   */
  resize(newSize) {
    if(newSize.width < 1) newSize.width = 1
    if(newSize.height < 1) newSize.height = 1
    if( newSize.width > this.screenSize.width)
      newSize.width = this.screenSize.width - this.position.x
    if( newSize.height > this.screenSize.height)
      newSize.height = this.screenSize.height - this.position.y
    this.size.height = newSize.height
    this.size.width = newSize.width
  }
  /**
   * @description Returns the window's position.
   */
  move(newPosition) {
    if(newPosition.x < 0) newPosition.x = 0
    if(newPosition.y < 0) newPosition.y = 0
    if(newPosition.x + this.size.width > this.screenSize.width) 
      newPosition.x = this.screenSize.width - this.size.width
    if(newPosition.y + this.size.height > this.screenSize.height) 
      newPosition.y = this.screenSize.height - this.size.height
    this.position.x = newPosition.x
    this.position.y = newPosition.y
  }
}

/**
 * @description Returns the window's size.
 */
export function changeWindow(programWindow) {
  const newSize = new Size(400, 300)
  const newPosition = new Position(100,150)
  
  programWindow.resize(newSize)
  programWindow.move(newPosition)
  
  return programWindow
}