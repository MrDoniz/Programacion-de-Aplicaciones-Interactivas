/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Trabajar con datos estadísticos correspondientes a un partido de
 * baloncesto de la NBA
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

import {MySet} from './myset-class.js';

describe('Prueba unitarias', () => {
  const mySet1 = new MySet([1, 2, 3]);
  const mySet2 = new MySet();
  const mySet3 = new MySet();
  test('Instancia', () => {
    expect(mySet1 instanceof MySet)
        .toBe(true);
  });
  test('Size', () => {
    expect(mySet1.size())
        .toBe(3);
  });
  test('toString mySet1', () => {
    expect(mySet1.toString())
        .toBe('{1, 2, 3}');
  });
  mySet2.add(1);
  test('toString mySet2', () => {
    expect(mySet2.toString())
        .toBe('{1}');
  });
  test('mySet1 union mySet2', () => {
    expect(mySet1.union(mySet2).toString())
        .toBe('{1, 2, 3, 1}');
  });
  test('mySet1 intersection mySet2', () => {
    expect(mySet1.intersection(mySet2).toString())
        .toBe('{1, 1}');
  });
  test('mySet3 empty', () => {
    expect(mySet3.empty())
        .toBe(true);
  });
  test('mySet2 subSet mySet3', () => {
    expect(mySet2.subSet(mySet3))
        .toBe(false);
  });
  test('mySet1 disjoint mySet2', () => {
    expect(mySet1.disjoint(mySet2))
        .toBe(false);
  });
  test('mySet1 eql mySet2', () => {
    expect(mySet1.eql(mySet2))
        .toBe(false);
  });
});

describe('Pruebas enunciado', () => {
  const mySet4 = new MySet();
  mySet4.add(1);
  test('mySet4.toString()', () => {
    expect(mySet4.toString())
        .toBe('{1, 5, 5}');
  });
  mySet4.add(5);
  test('mySet4.toString()', () => {
    expect(mySet4.toString())
        .toBe('{1, 5, 5}');
  });
  mySet4.add(5);
  test('mySet4.toString()', () => {
    expect(mySet4.toString())
        .toBe('{1, 5, 5}');
  });
  test('mySet4.has(Math.sqrt(25))', () => {
    expect(mySet4.has(Math.sqrt(25)))
        .toBe(true);
  });
  const mySet5 = new MySet([1, 2, 3, 4]);
  test('mySet5.toString()', () => {
    expect(mySet5.toString())
        .toBe('{1, 2, 3, 4}');
  });
  test('mySet5.size()', () => {
    expect(mySet5.size())
        .toBe(4);
  });
});
