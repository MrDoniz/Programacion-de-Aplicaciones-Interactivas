/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 20 2022
 * @desc Test Vector2D para representar vectores en un espacio bidimensional.
 */

import {Vector2D} from './vector2D-class.js';

describe('Prueba unitarias', () => {
  const vector = new Vector2D(0, 0);
  const vector1 = new Vector2D(1, 4);
  const vector2 = new Vector2D(2, 4);
  const vector3 = new Vector2D(4, 4);
  const vector4 = new Vector2D(3, 0);
  const vector5 = new Vector2D(5, 5);
  test('Instancia', () => {
    expect(vector1 instanceof Vector2D)
        .toBe(true);
  });
  test('Imprimir vector1', () => {
    expect(vector.imprimir(vector1))
        .toBe('{1, 4}');
  });
  test('Ángulo vector1 vector2', () => {
    expect(vector.angulo(vector1, vector2))
        .toBe(12.21);
  });
  test('Módulo vector1 vector2', () => {
    expect(vector.modulo(vector1, vector2))
        .toBe(4.12);
  });
  test('Producto escalar vector1 vector2', () => {
    expect(vector.productoEscalar(vector1, vector2))
        .toBe(18);
  });
  test('Producto real vector1 vector2', () => {
    expect(vector.imprimir(vector.productoReal(vector1, 2)))
        .toBe('{2, 8}');
  });
  test('Suma vector1 vector2', () => {
    expect(vector.imprimir(vector.sumar(vector4, vector5)))
        .toBe('{8, 5}');
  });
  test('Suma vector1 vector2', () => {
    expect(vector.imprimir(vector.sumar(vector3, 10)))
        .toBe('{14, 14}');
  });
});
