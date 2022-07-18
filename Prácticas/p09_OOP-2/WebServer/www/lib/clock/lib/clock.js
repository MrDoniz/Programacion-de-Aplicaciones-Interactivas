/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Clase que representa la clase Set.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _url = require("url");

var _process = _interopRequireDefault(require("process"));

var _clockClass = require("./clock-class.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Clock: _clockClass.Clock
};
/**
* @description Programa principal
**/

exports.default = _default;

function main() {
  const reloj1 = new _clockClass.Clock(11, 30);
  const reloj2 = new _clockClass.Clock(11, 30);
  console.log('Resto 25 minutos:', reloj1.sub(25).toString());
  console.log('Sumo  25 minutos:', reloj2.add(25).toString());
  console.log('reloj1', reloj1.compareTo(reloj2), 'reloj2');
  const reloj3 = new _clockClass.Clock(12, 30);
  console.log('reloj1', reloj1.compareTo(reloj3), 'reloj3');
  const reloj4 = new _clockClass.Clock(9, 0);
  console.log('reloj1', reloj1.compareTo(reloj4), 'reloj4');
}

if (_process.default.argv[1] === (0, _url.fileURLToPath)(import.meta.url)) {
  main();
}