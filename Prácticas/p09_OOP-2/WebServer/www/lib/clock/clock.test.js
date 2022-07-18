/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 22 2022
 * @desc Test de la clase Clock.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

//import {Clock} from './clock-class.js';
import Clock from './clock-class.js';

describe('Prueba unitarias', () => {
  const reloj1 = new Clock(11, 30);
  const reloj2 = new Clock(11, 30);
  test('Instancia', () => {
    expect(reloj1 instanceof Clock)
        .toBe(true);
  });
  test('Resta', () => {
    expect(reloj1.resta(25).toString())
        .toBe('11:05');
  });
  test('Suma', () => {
    expect(reloj2.suma(25).toString())
        .toBe(undefined);
  });
  test('Comparar iguales', () => {
    expect(reloj1.compara(reloj2))
        .toBe('=');
  });
  const reloj3 = new Clock(12, 30);
  test('Comparar menor', () => {
    expect(reloj1.compara(reloj3))
        .toBe('<');
  });
  const reloj4 = new Clock(9, 0);
  test('Comparar mayor', () => {
    expect(reloj1.compara(reloj4))
        .toBe('>');
  });
  test('toString', () => {
    expect(reloj4.toString())
        .toBe('09:00');
  });
  const reloj5 = new Clock(9, 20);
  test('toString', () => {
    expect(reloj5.toString())
        .toBe('09:20');
  });
  const reloj6 = new Clock(11, 11);
  test('Comparar mayor', () => {
    expect(reloj1.compara(reloj6))
        .toBe('>');
  });
  const reloj7 = new Clock(11, 40);
  test('Comparar menor', () => {
    expect(reloj1.compara(reloj7))
        .toBe('<');
  });
});

