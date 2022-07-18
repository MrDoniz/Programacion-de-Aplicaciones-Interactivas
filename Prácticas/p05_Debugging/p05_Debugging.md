# Práctica 5. Depuración en Javascript
### Factor de ponderación: 5

### Objetivos
Los objetivos de esta práctica son:
* Aprender a utilizar diferentes herramientas de depuración para JavaScript
* Aprender a depurar programas JavaScript en Visual Studio Code
* Ser capaz de desarrollar programas simples en JavaScript en el entorno Linux de la VM de la asignatura usando
  Node.js

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:
* Se valorará la realización de las diferentes tareas que se proponen
* Saber corregir bugs en un programa utilizando el depurador de Visual Studio Code
* Ser capaz de desarrollar tests unitarios para sus programas utilizando Jest.
* Acreditar que conoce la herramienta 
[ESLint](https://eslint.org/)
y que es capaz de trabajar con la misma en Visual Studio Code.
* Acreditar que conoce la herramienta 
[JSDoc](https://jsdoc.app/)
y que es capaz de generar documentación para sus programas utilizando la herramienta.
* Ser capaz de resolver problemas de la plataforma Exercism, subiendo sus soluciones a la misma.
* Acreditar que es capaz de desarrollar y ejecutar programas simples de la plataforma Jutge
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de la Guía de Estilo de Google
  para Javascript
* Acreditar que es capaz de editar ficheros de forma remota en su VM usando Visual Studio
  Code (VSC)

### Trabajo previo
Estudie las transparencias y ejemplos del trabajo presentado en clase sobre Depuración de código en
JavaScript.

Estudie igualmente las secciones correspondientes a 
[Arrays](https://javascript.info/array),
[Array methods](https://javascript.info/array-methods),
[Iterables](https://javascript.info/iterable)
y
[Strings](https://javascript.info/string)
del Modern JavaScript Tutorial para repasar la forma de trabajar en JS con estas estructuras de datos.

Cuando desarrolle los siguientes ejercicios, ante la presencia de cualquier bug (o incluso en ausencia de
errores) practique el uso del 
[depurador integrado en Visual Studio Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).


### Ejercicios de Exercism
Resuelva los siguientes problemas ejecutando los tests correspondientes a cada uno de ellos hasta conseguir
que todos pasen correctamente. 
Una vez que lo logre, suba su solución a Exercism.
* [Armstrong Numbers](https://exercism.org/tracks/javascript/exercises/armstrong-numbers)
* [Darts](https://exercism.org/tracks/javascript/exercises/darts)
* [Prime Factors](https://exercism.org/tracks/javascript/exercises/prime-factors)
* [Strain](https://exercism.org/tracks/javascript/exercises/strain). 
  Las funciones que ha de programar, *keep()* y *discard()* toman ambas dos parámetros, 
  un array y una función booleana (un predicado) y devuelven un array que contiene (keep) o no (discard) los elementos del array de entrada para los que el predicado es cierto.
* [Yacht](https://exercism.org/tracks/javascript/exercises/yacht)
  Si analiza el programa que realiza los tests (`yacht.spec.js`) observará que la función *score()* ha de tener dos parámetros: 
  un array con las puntuaciones de los lanzamientos de 5 dados y una cadena (string) con el nombre de la jugada y ha de devolver 
  la puntuación correspondiente a esa jugada.

### Ejercicios de Jutge
Para cada uno de los siguientes problemas de 
[Jutge](https://jutge.org/)
haga que la entrada que requieran los programas que solucionan el problema se tome por línea de comandos.

Haga también que los programas incluyan documentación en formato JSDoc. 
Genere la documentación en formato HTML para cada uno de los programas y haga que dicha documentación 
sea accesible a través de una web alojada en su máquina virtual.
Se propone desarrollar una página *índice* desde la que se enlacen las páginas de documentación de cada uno de
estos programas.

Desarrolle tests unitarios en 
[Jest](https://jestjs.io/)
para probar la corrección de cada una de las soluciones.
Aparte de los tests públicos de Jutge, incluya algunos tests adicionales para comprobar situaciones que
considere relevantes.
Si su solución se basa en varias funciones, desarrolle tests para cada una de ellas.

1. [P15695](https://jutge.org/problems/P15695_en) Largest Prime Factor
2. [P58459](https://jutge.org/problems/P58459_en) Valid Dates. La entrada del problema deberían ser tres números: DD MM AA
3. [X19883](https://drive.google.com/file/d/1aoN7uj0KX6RvWtngTqYMqpxep2_P-XFc/view?usp=sharing) Code with cipher 3 reversed 
4. [P20262](https://jutge.org/problems/P20262_en) Maximum sums
5. [P12061](https://jutge.org/problems/P12061) Words between two words

## Referencias
* [Node.js debugging in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
* [Jest](https://jestjs.io/)
* [ESLint](https://eslint.org/)
* [JSDoc](https://jsdoc.app/)
* [Exercism](https://exercism.io/)
* [Jutge web site](https://jutge.org/)
* [The Modern Javascript Tutorial](https://javascript.info)
* [PAI Code Examples](https://github.com/ULL-ESIT-PAI-2021-2022/PAI-class-code-examples/tree/master/src)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
