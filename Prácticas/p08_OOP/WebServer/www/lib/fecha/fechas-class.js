/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc Cliente de la clase que representa una fecha.
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

const MESES = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
/**
 * Fecha module
 * @module Fechas
 */
class Fechas {
  #mes;
  #mesNumero;
  #dia;
  #anio;
  #horas;
  #minutos;
  #segundos;

  /**
   * @description - Constructor de la clase Fecha. Recibe una cadena con el
   * formato mes dia, año y tiempo. Almacena cada uno de los datos en sus
   * correspondientes atributos privados.
   * @param {String} fecha - Cadena que contiene la fecha
   */
  constructor(fecha) {
    const fechaArray = fecha.split(' ');
    /** @private */
    this.#mes = fechaArray[0];
    this.#mesNumero = MESES.indexOf(this.#mes) + 1;
    /** @private */
    this.#dia = fechaArray[1].slice(0, -1);
    /** @private */
    this.#anio = fechaArray[2];
    /** @private */
    const tiempoArray = fechaArray[3].split(':');
    /** @private */
    this.#horas = tiempoArray[0];
    /** @private */
    this.#minutos = tiempoArray[1];
    /** @private */
    this.#segundos = tiempoArray[2];
    if (this.#dia > this.getDiasMes()) {
      throw new Error('El dia no es correcto');
    }
    if (this.#mesNumero > 12 || this.#mesNumero < 1) {
      throw new Error('El mes no es correcto');
    }
    if (this.#anio < 0) {
      throw new Error('El año no es correcto');
    }
    if (this.#horas > 23 || this.#horas < 0) {
      throw new Error('Las horas no son correctas');
    }
    if (this.#minutos > 59 || this.#minutos < 0) {
      throw new Error('Los minutos no son correctos');
    }
  };
  /**
   * @description - Devuelve la fecha en formato cadena
   * @return {String} - Cadena con la fecha
   */
  getFecha() {
    return `${this.#mes} ${this.#dia}, ${this.#anio} ${this.#horas}:${this.#minutos}:${this.#segundos}`;
  }
  /**
   * @description - Devuelve el dia de la fecha en formato numérico
   * @return {Number} - Numero del dia
   */
  getDia() {
    return this.#dia;
  }
  /**
   * @description - Devuelve el mes de la fecha en formato numérico
   * @return {Number} - Numero del mes
   */
  getMes() {
    return this.#mes;
  }
  /**
   * @description - Devuelve el año de la fecha en formato numérico
   * @return {Number} - Numero del año
   */
  getAnio() {
    return this.#anio;
  }
  /**
   * @description - Devuelve la hora de la fecha en formato numérico
   * @return {Number} - Numero de la hora
   */
  getHoras() {
    return this.#horas;
  }
  /**
   * @description - Devuelve los minutos de la fecha en formato numérico
   * @return {Number} - Numero de los minutos
   */
  getMinutos() {
    return this.#minutos;
  }
  /**
   * @description - Devuelve los segundos de la fecha en formato numérico
   * @return {Number} - Numero de los segundos
   */
  getSegundos() {
    return this.#segundos;
  }
  /**
   * @description - Devuelve la hora de la fecha en formato cadena
   * @return {String} - Cadena de la hora
   */
  getTiempo() {
    return `${this.#horas}:${this.#minutos}:${this.#segundos}`;
  }
  /**
   * @description - Establece la fecha
   * @param {String} fecha - Cadena con la fecha
   * @return {Fechas} - Devuelve la fecha
   * @throws {Error} - Lanza un error si la fecha no es correcta
   */
  setFecha(fecha) {
    const fechaArray = fecha.split(' ');
    this.#mes = fechaArray[0];
    this.#dia = fechaArray[1].slice(0, -1);
    this.#anio = fechaArray[2];

    const tiempoArray = fechaArray[3].split(':');
    this.#horas = tiempoArray[0];
    this.#minutos = tiempoArray[1];
    this.#segundos = tiempoArray[2];

    return this;
  }
  /**
   * @description - Establece el dia de la fecha
   * @param {Number} dia - Numero del dia
   * @return {Fechas} - Devuelve la fecha
   * @throws {Error} - Lanza un error si el dia no es correcto
   * @throws {Error} - Lanza un error si el dia es mayor que 31
   * @throws {Error} - Lanza un error si el dia es menor que 1
   * @throws {Error} - Lanza un error si el dia es un numero
   * @throws {Error} - Lanza un error si el dia es una cadena
   */
  setDia(dia) {
    if (typeof dia !== 'number') {
      throw new Error('El dia debe ser un numero');
    }
    if (dia > 31) {
      throw new Error('El dia no puede ser mayor que 31');
    }
    if (dia < 1) {
      throw new Error('El dia no puede ser menor que 1');
    }
    if (typeof dia === 'string') {
      throw new Error('El dia debe ser un numero');
    }
    this.#dia = dia;
    return this;
  }
  /**
   * @description - Establece el mes de la fecha
   * @param {String} mes - Numero del mes
   * @return {Fechas} - Devuelve la fecha
   * @throws {Error} - Lanza un error si el mes no es correcto
   * @throws {Error} - Lanza un error si el mes no está bien escrito
   * @throws {Error} - Lanza un error si el mes es un numero
   */
  setMes(mes) {
    if (typeof mes === 'string') {
      this.#mes = mes;
      this.#mesNumero = MESES.indexOf(this.#mes - 1);
    }
    if (typeof mes === 'number') {
      this.#mesNumero = mes - 1;
      this.#mes = MESES[this.#mesNumero];
    }
    return this;
  }
  /**
   * @description - Establece el año de la fecha
   * @param {Number} anio - Numero del año
   * @return {Fechas} - Devuelve la fecha
   * @throws {Error} - Lanza un error si el año no es correcto
   */
  setAnio(anio) {
    if (typeof anio !== 'number') {
      throw new Error('El año debe ser un numero');
    }
    if (anio < 0) {
      throw new Error('El año no puede ser menor que 0');
    }
    if (anio > 9999) {
      throw new Error('El año no puede ser mayor que 9999');
    }
    this.#anio = anio;
    return this;
  }
  /**
   * @description - Establece la hora de la fecha
   * @param {Number} horas - Numero de la hora
   * @return {Fechas} - Devuelve la fecha
   * @throws {Error} - Lanza un error si la hora no es correcta
   * @throws {Error} - Lanza un error si la hora es mayor que 23
   * @throws {Error} - Lanza un error si la hora es menor que 0
   */
  setHoras(horas) {
    if (typeof horas !== 'number') {
      throw new Error('La hora debe ser un numero');
    }
    if (horas > 23) {
      throw new Error('La hora no puede ser mayor que 23');
    }
    if (horas < 0) {
      throw new Error('La hora no puede ser menor que 0');
    }
    this.#horas = horas;
    return this;
  }
  /**
   * @description - Establece los minutos de la fecha
   * @param {Number} minutos - Numero de los minutos
   * @return {Fechas} - Devuelve la fecha
   * @throws {Error} - Lanza un error si los minutos no son correctos
   * @throws {Error} - Lanza un error si los minutos son mayor que 59
   * @throws {Error} - Lanza un error si los minutos son menor que 0
   */
  setMinutos(minutos) {
    if (typeof minutos !== 'number') {
      throw new Error('Los minutos deben ser un numero');
    }
    if (minutos > 59) {
      throw new Error('Los minutos no pueden ser mayor que 59');
    }
    if (minutos < 0) {
      throw new Error('Los minutos no pueden ser menor que 0');
    }
    this.#minutos = minutos;
    return this;
  }
  /**
   * @description - Establece los segundos de la fecha
   * @param {Number} segundos - Numero de los segundos
   * @return {Fechas} - Devuelve la fecha
   * @throws {Error} - Lanza un error si los segundos no son correctos
   * @throws {Error} - Lanza un error si los segundos son mayor que 59
   * @throws {Error} - Lanza un error si los segundos son menor que 0
   */
  setSegundos(segundos) {
    if (typeof segundos !== 'number') {
      throw new Error('Los segundos deben ser un numero');
    }
    if (segundos > 59) {
      throw new Error('Los segundos no pueden ser mayor que 59');
    }
    if (segundos < 0) {
      throw new Error('Los segundos no pueden ser menor que 0');
    }
    this.#segundos = segundos;
    return this;
  }
  /**
   * @description - Establece el tiempo de la fecha
   * @param {String} tiempo - Cadena con el tiempo
   * @return {Fechas} - Devuelve la fecha
   * @throws {Error} - Lanza un error si el tiempo no es correcto
   * @throws {Error} - Lanza un error si el tiempo no está bien escrito
   */
  setTiempo(tiempo) {
    if (typeof tiempo !== 'string') {
      throw new Error('El tiempo debe ser una cadena');
    }
    const regex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    if (!regex.test(tiempo)) {
      throw new Error('El tiempo no está bien escrito');
    }
    const [horas, minutos, segundos] = tiempo.split(':');
    this.setHoras(horas);
    this.setMinutos(minutos);
    this.setSegundos(segundos);
    return this;
  }
  /**
   * @description - Permite sumar una cantidad de dias a la fecha, comprueba en
   * que mes está, si al sumar los dias sobrepasa el limite del mes, se suman
   * los meses y se restan los dias que sobrepasan del mes anterior para que no
   * se pase del limite.
   * @param {Number} dias - Numero de dias a sumar
   */
  sumarDias(dias) {
    const test = Number(this.#dia);
    this.#dia = test + dias;
    if (this.#dia > this.getDiasMes()) {
      this.#dia = this.#dia - this.getDiasMes();
      this.#mesNumero = this.#mesNumero + 1;
      if (this.#mesNumero > 11) {
        this.#mesNumero = 1;
        this.#anio = Number(this.#anio) + 1;
      }
    }
  }
  /**
   * @description - Permite saber cuantos dias tiene un mes.
   * @param {Number} mes - Numero del mes
   * @param {Number} anio - Numero del año
   * @return {Number} - Devuelve el numero de dias del mes
   */
  getDiasMes() {
    const mes = this.#mesNumero;
    const anio = this.#anio;
    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 ||
      mes === 10 || mes === 12) {
      return 31;
    }
    if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
      return 30;
    }
    if (mes === 2) {
      if (anio % 4 === 0) {
        return 29;
      }
      return 28;
    }
  }
  /**
   * @description - Permite saber que número es cada mes según el nombre
   * @param {String} mes - Nombre del mes
   * @return {Number} - Devuelve el numero del mes
   */
  getMesNumero() {
    return this.#mesNumero;
  }
}


export {Fechas};
