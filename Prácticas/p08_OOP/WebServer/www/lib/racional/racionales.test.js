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

import exportar from './racionales.js';
import {Racional} from './racionales-class';

describe('Operaciones generales', () => {
  test('2/1 3/1', () => {
    expect(exportar.realizarOperaciones('2/1 3/1'))
        .toBe('2/1+3/1=5/1\n2/1-3/1=-1/1\n2/1*3/1=6/1\n2/1/3/1=2/3\n2/1<3/1\n');
  });
  test('4/4 2/4', () => {
    expect(exportar.realizarOperaciones('4/4 2/4'))
        .toBe('4/4+2/4=24/16\n4/4-2/4=8/16\n4/4*2/4=8/16\n4/4/2/4=16/8\n4/4>2/4\n');
  });
  test('9/6 7/1', () => {
    expect(exportar.realizarOperaciones('9/6 7/1'))
        .toBe('9/6+7/1=51/6\n9/6-7/1=-33/6\n9/6*7/1=63/6\n9/6/7/1=9/42\n9/6<7/1\n');
  });
});

describe('Operaciones erroneas', () => {
  test('2/0 1/1', () => {
    expect(() => exportar.realizarOperaciones('2/0 1/1'))
        .toThrow('El denominador no puede ser 0');
  });
  test('1/0 6/0', () => {
    expect(() => exportar.realizarOperaciones('1/0 6/0'))
        .toThrow('El denominador no puede ser 0');
  });
  test('1/2 1/0', () => {
    expect(() => exportar.realizarOperaciones('1/2 1/0'))
        .toThrow('El denominador no puede ser 0');
  });
});

describe('Operaciones especificas', () => {
  const racional1 = new Racional(5, 6);
  const racional2 = new Racional(5, 2);
  test('Instancia', () => {
    expect(racional1 instanceof Racional)
        .toBe(true);
  });
  test('toString', () => {
    expect(racional1.toString())
        .toBe('5/6');
  });
  test('sumar', () => {
    expect(racional1.sumar(racional2).toString())
        .toBe('40/12');
  });
  test('restar', () => {
    expect(racional1.restar(racional2).toString())
        .toBe('-20/12');
  });
  test('multiplicar', () => {
    expect(racional1.multiplicar(racional2).toString())
        .toBe('25/12');
  });
  test('dividir', () => {
    expect(racional1.dividir(racional2).toString())
        .toBe('10/30');
  });
  test('comparar', () => {
    expect(racional1.comparar(racional2))
        .toBe('<');
  });
});

