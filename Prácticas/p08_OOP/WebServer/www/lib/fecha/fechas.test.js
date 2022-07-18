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

import exportar from './fechas.js';

describe('Fechas comunes', () => {
  test('20/2/1921 2', () => {
    expect(exportar.calcularFechasPosteriores('20/2/1921', 2))
        .toBe('21/2/1921\n22/2/1921\n');
  });
  test('1/7/2010 3', () => {
    expect(exportar.calcularFechasPosteriores('1/7/2010', 3))
        .toBe('2/7/2010\n3/7/2010\n4/7/2010\n');
  });
  test('5/12/1982 5', () => {
    expect(exportar.calcularFechasPosteriores('5/12/1982', 5))
        .toBe('6/12/1982\n7/12/1982\n8/12/1982\n9/12/1982\n10/12/1982\n');
  });
});

describe('Fechas extremo', () => {
  test('27/2/1921 2', () => {
    expect(exportar.calcularFechasPosteriores('27/2/1921', 2))
        .toBe('28/2/1921\n1/3/1921\n');
  });
  test('29/7/2010 3', () => {
    expect(exportar.calcularFechasPosteriores('29/7/2010', 3))
        .toBe('30/7/2010\n31/7/2010\n1/8/2010\n');
  });
  test('28/12/1982 5', () => {
    expect(exportar.calcularFechasPosteriores('28/12/1982', 5))
        .toBe('29/12/1982\n30/12/1982\n31/12/1982\n1/1/1983\n2/1/1983\n');
  });
});

describe('Fechas erroneas', () => {
  test('30/2/1921 2', () => {
    expect(() => exportar.calcularFechasPosteriores('30/2/1921', 2))
        .toThrow('El dia no es correcto');
  });
  test('29/92/2010 3', () => {
    expect(() => exportar.calcularFechasPosteriores('29/92/1921', 2))
        .toThrow('El mes no es correcto');
  });
  test('28/12/1982 5', () => {
    expect(() => exportar.calcularFechasPosteriores('28/12/-2', 2))
        .toThrow('El año no es correcto');
  });
});
