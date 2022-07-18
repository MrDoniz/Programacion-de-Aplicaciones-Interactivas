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

import {fileURLToPath} from 'url';
import process from 'process';

import {MySet} from './myset-class.js';

export default {MySet};

/**
* @description Programa principal
**/
function main() {
  const mySet1 = new MySet([1, 2, 3]);
  console.log(mySet1.toString());
  const mySet2 = new MySet();
  console.log(mySet2.toString());
  console.log(mySet1.size());
  console.log(mySet2.size());
  mySet2.add(1);
  console.log(mySet2.toString());
  console.log(mySet1.union(mySet2).toString());
  console.log(mySet1.intersection(mySet2).toString());
  const mySet3 = new MySet();
  console.log(mySet3.empty());
  console.log(mySet2.subSet(mySet3));
  console.log(mySet1.disjoint(mySet2));
  console.log(mySet2.disjoint(mySet3));
  console.log(mySet1.eql(mySet2));
  console.log(mySet2.eql(mySet3));
  console.log('-------------');
  const mySet4 = new MySet();
  mySet4.add(1);
  console.log(mySet4.toString());
  mySet4.add(5);
  console.log(mySet4.toString());
  mySet4.add(5);
  console.log(mySet4.toString());
  console.log(mySet4.has(Math.sqrt(25)));
  const mySet5 = new MySet([1, 2, 3, 4]);
  console.log(mySet5.toString());
  console.log(mySet5.size());
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
