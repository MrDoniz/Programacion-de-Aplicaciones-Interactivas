/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Abr 20 2022
 * @desc Test Vector3D para representar vectores en un espacio bidimensional.
 */

import Vector3D from './vector3D-class.js';

describe('Prueba unitarias', () => {
  const vector = new Vector3D(0, 0, 1);
  const vector1 = new Vector3D(1, 4, 3);
  const vector2 = new Vector3D(2, 4, 2);
  const vector3 = new Vector3D(4, 4, 4);
  const vector4 = new Vector3D(3, 0, 5);
  const vector5 = new Vector3D(5, 5, 6);
  test('Instancia', () => {
    expect(vector1 instanceof Vector3D)
        .toBe(true);
  });
  test('Imprimir vector1', () => {
    expect(vector.imprimir(vector1))
        .toBe('{1, 4, 3}');
  });
  test('Ángulo vector1 vector2', () => {
    expect(vector.angulo(vector1, vector2))
        .toBe(43.92);
  });
  test('Módulo vector1 vector2', () => {
    expect(vector.modulo(vector1, vector2))
        .toBe(5.1);
  });
  test('Producto escalar vector1 vector2', () => {
    expect(vector.productoEscalar(vector1, vector2))
        .toBe(18);
  });
  test('Producto real vector1 vector2', () => {
    expect(vector.imprimir(vector.productoReal(vector1, 2)))
        .toBe('{2, 8, 6}');
  });
  test('Suma vector1 vector2', () => {
    expect(vector.imprimir(vector.sumar(vector4, vector5)))
        .toBe('{8, 5, 11}');
  });
  test('Suma vector1 vector2', () => {
    expect(vector.imprimir(vector.sumar(vector3, 10)))
        .toBe('{14, 14, 14}');
  });
});
