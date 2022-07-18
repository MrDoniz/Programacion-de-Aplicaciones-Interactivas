/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Daniel Dóniz García
 * @since Mar 31 2022
 * @desc App
 *
 * @see {@link https://blog.logrocket.com/es-modules-in-node-today/}
 * @see {@link https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c}
 */

import EXPRESS from 'express';
import PATH from 'path';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const APP = EXPRESS();

const __dirname = dirname(fileURLToPath(import.meta.url));

APP.set('port', 8082);

APP.use(EXPRESS.static(PATH.join(__dirname, '../src')));

const SERVER = APP.listen(APP.get('port'), '0.0.0.0', function() {
  console.log('The server is running on http://10.6.129.38:' + APP.get('port'));
});
