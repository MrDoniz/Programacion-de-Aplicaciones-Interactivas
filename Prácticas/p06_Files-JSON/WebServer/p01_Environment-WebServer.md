# Práctica 1. El entorno de desarrollo de PAI. Node Express Static Web Server. Jutge
### Factor de ponderación: 3

### Objetivos
Los objetivos de esta práctica son:
* Realiar algunas tareas administrativas previas para facilitar el trabajo en la asignatura
* Conocer y configurar el entorno de trabajo de la asignatura en el sistema Linux del IaaS
* Configurar y practicar el uso del Visual Studio Code para editar ficheros en la máquina IaaS de la asignatura
* Instalar un servidor web estático en la máquina virtual de la asignatura
* Conocer la plataforma Jutge

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:
* Se valorará la realización de las diferentes tareas que se proponen
* El alumnado ha de acreditar que es capaz de editar ficheros de forma remota en su VM usando VSC
* El alumnado ha de ser capaz de instalar y mantener ejecutando un servidor web estático
* El alumnado debe ser capaz de subir la solución a un problema de Jutge a esa plataforma

Para la realización de las prácticas de PAI
debe Ud. estudiar los documentos que se enlazan desde
éste así como realizar todas las tareas que en este documento se proponen.

**Avise al profesor** al finalizar la realización de cada una de las **TAREAS** que se indican a continuación. 
No inicie una nueva tarea sin haber revisado la anterior.

**TAREA #01** Si aún no lo ha hecho, coloque una fotografía adecuada en su perfil del Campus Virtual de la ULL.

### Entorno de trabajo exterior a la ULL

1. Para el trabajo en las prácticas de la asignatura se utilizará intensivamente el Sistema Operativo Linux,
trabajando fundamentalmente en una [máquina virtual](https://es.wikipedia.org/wiki/M%C3%A1quina_virtual) disponible a través de la infraestructura 
[IaaS](https://es.wikipedia.org/wiki/Infraestructura_como_servicio_(IaaS)) de la ULL.
Es por ello que resulta muy conveniente que el alumnado tenga instalado Linux en un ordenador personal con el que
trabaje desde su casa. 
Se optará preferentemente por la distribución Ubuntu para que sea la misma que tiene la máquina virtual de la asignatura.  
Hay al menos tres opciones para ello, que son las siguientes en orden de mayor a menor idoneidad para el trabajo en la asignatura:

  * Si dispone Ud. de un ordenador propio, de uso exclusivo, que pueda formatear (borrando por tanto toda la información)
  instale directamente Ubuntu en él siguiendo (por ejemplo) 
  [estas instrucciones](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview). 
  Para esta instalación necesitará Ud. crear un pendrive desde el que pueda arrancar el ordenador. 
  Siga para ello (por ejemplo) 
  [estas otras instrucciones](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview).

  * Instalar Ubuntu como un sistema "invitado" dentro de Windows usando para ello un
  software de virtualización como VirtualBox. 
  La página [Install Ubuntu on Oracle VirtualBox](https://brb.nci.nih.gov/seqtools/installUbuntu.html)
  contiene las instrucciones a seguir para instalar Ubuntu como sistema invitado en Windows.
  
  * Utilizar WSL, [Windows subsystem for Linux](https://docs.microsoft.com/es-es/windows/wsl/install-win10).
  WSL es una característica introducida en Windows 10 que permite instalar un núcleo Linux directamente sobre el sistema operativo de Microsoft.

Las tres opciones anteriores están ordenadas atendiendo a la que consideramos idoneidad de cada una, siendo la primera la más idónea, pero este orden posiblemente coincide con el orden inverso de complejidad de la instalación: la primera es posiblemente más compleja que la tercera. 
Tenga esto en cuenta a la hora de decidirse por cualquiera de estas opciones.

Una opción alternativa que se considera menos adecuada consiste en no instalar un sistema Linux sino acceder 
a la máquina virtual IaaS de la asignatura desde Windows usando para ello un cliente ssh. 
Se recomienda para este caso instalar en Windows [el cliente ssh PuTTY](https://www.putty.org/) que puede Ud. descargar libremente.  
[Este vídeo](https://www.youtube.com/watch?v=_-rS8QM0JaI) muestra cómo configurar la VPN en Windows y cómo usar Putty para acceder a una máquina virtual.

En todo caso recuerde que si desea acceder a las máquinas de la Universidad desde fuera del campus
universitario necesitará Ud. configurar una conexión usando [VPN](https://es.wikipedia.org/wiki/Red_privada_virtual).
Para configurar la conexión VPN siga las instrucciones de la página [Servicio de VPN de la ULL](https://www.ull.es/servicios/stic/2016/05/10/servicio-de-vpn-de-la-ull/).  
Para conexiones VPN usando Windows ha de instalar la aplicación Global Protect tal como se explica en el documento
[Guía de configuración del cliente VPN GlobalProtect. Sistema Operativo Windows](https://drive.google.com/open?id=0B3mzWpxzbJD1Zm9TdmpXSV9mdGs).
[Esta imagen](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/3b0223eef4fff02835108ac59ea8d2f2f26c43cc/img/GlobalProtect.PNG)
muestra el establecimiento de la conexión VPN con la red de la ULL,
[esta otra](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/3b0223eef4fff02835108ac59ea8d2f2f26c43cc/img/GlobalProtect_InicioSesi%C3%B3n.PNG)
muestra el inicio de sesión y finalmente
[esta última](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/3b0223eef4fff02835108ac59ea8d2f2f26c43cc/img/GlobalProtect_Conectado.PNG)
muestra la conexión ya establecida.

[Este vídeo](https://youtu.be/ZHZ-R--fQ68) muestra cómo establecer en linux una conexión vpn y [este otro](https://www.youtube.com/watch?v=jHUfeN_NMYE&feature=youtu.be) muestra cómo conectar desde linux usando ssh con una máquina virtual del IaaS.

2. Estudie si le resulta necesario el documento 
[Manual de administración de Máquinas](https://docs.google.com/document/d/1nj-dxu7LXrNhj3ewCdfaPSc8OV4e_TYpGTQdK78YExY/edit).
Tenga en cuenta que el acceso a la infraestructura IaaS está ligado a que esté Ud. registrada/o en el Aula
Virtual de la Asignatura.
Siga las instrucciones de ese documento para acceder a la [interfaz web de las máquinas IaaS](https://iaas.ull.es)
(necesitará establecer una conexión VPN).

3. **TAREA #02** Acceda al [portal de gestión de usuarios](https://usuarios.ull.es/autogestion/cambio_alias/)
del Servicio TIC de la ULL y configure allí una dirección de correo electrónico alternativa a su dirección
`aluXXXX@ull.edu.es`.
Las direcciones (alias) alternativas que el sistema le ofrece han de incluir necesariamente dos dígitos
numéricos (sin significado específico alguno) y permiten que su dirección de correo sea más legible y fácil de
recordar, sobre todo para otras personas.
Podrá utilizar indistintamente las direcciones `aluXXXX@ull.edu.es` y el alias que configure.

4. **TAREA #03** [GitHub](https://github.com/) 
es una plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git.
Si no dispone ya de una, cree una cuenta en [GitHub](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home). 
Configure el perfil de esa cuenta de modo que incluya una imagen (fotografía) en la que se le reconozca y haga que la cuenta de e-mail asociada sea la dirección institucional o su alias.
Para la configuración de esa cuenta se le recomienda usar su nombre real, puesto que sus repositorios de código en GitHub
pasarán a formar parte de su curriculum profesional.

5. Para editar algunos ficheros en esta sesión se usará el editor [vim](https://www.vim.org/).
Estudie los primeros pasos de [este tutorial](https://blog.desdelinux.net/usando-vim-tutorial-basico/) para que
aprenda lo básico sobre cómo modificar un fichero usando vi.
Con el estudio de este otro [tutorial interactivo on-line](https://www.openvim.com/) debe aprender lo mínimo que necesita
para usar vi en esta sesión.
Si está Ud. interesada/o en aprender vim (es un editor muy potente pero los comienzos son difíciles) dispone
de muchos tutoriales en la web. 
[Este tutorial](https://github.com/Izaird/Vim-primeros-pasos) explica lo básico de vim a través de ejemplos concretos con ficheros de texto.

Para editar algunas líneas concretas de un fichero de texto usando vi siga estas indicaciones:
* Use las teclas con flechas arriba/abajo para mover el cursor a la línea que desee editar.
* Antes de modificar el texto ha de presionar `i` para acceder al modo de inserción de vim.
* Cuando acabe de modificar el texto, pulse ESC (para salir del modo de inserción)
* Ahora escriba `:wq!` y presione ENTER para guardar los cambios en disco. W es para escribir (Write), Q para salir (Quit) y ! se usa para forzar la escritura.

### El Entorno ULL-IaaS

Desarrolle en secuencia cada una de las tareas que se describen en los siguientes puntos, pero ocúpese no solo de “ejecutar comandos” 
sino de estudiar y entender el significado e implicaciones de cada uno de ellos.

6. Inicie sesión en Linux en alguno de los PCs de la sala del Centro de Cálculo. 
En este documento se denominará máquina remota a la máquina virtual (VM) del [IaaS-ULL](https://www.ull.es/servicios/stic/2015/10/27/nuevo-servicio-iaas/) 
y máquina local al PC del centro de cálculo en el que está trabajando.

Recuerde siempre que para poder conectarse por ssh con las máquinas virtuales de IaaS ull ha de autentificarse en la página 
[acceso.ull.es](acceso.ull.es).  
Recuerde asimismo que en caso de acceder desde fuera de del campus ULL ha de hacerlo mediante una conexión VPN. 
Consulte [esta referencia](https://www.ull.es/servicios/stic/2016/05/10/servicio-de-vpn-de-la-ull/) 
(en el Centro de Cálculo, por ahora no lo necesita) para conectarse a través de vpn.

7. Acceda a la [interfaz web](https://iaas.ull.es/ovirt-engine/sso/login.html) 
de la plataforma IaaS-ULL y autentifíquese en esa interfaz con sus credenciales (username + password) de la cuenta institucional. 
[Esta imagen](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/3b0223eef4fff02835108ac59ea8d2f2f26c43cc/img/1-Ovirt-login.png)
muestra la pantalla de acceso a la interfaz.  
Vea el estado de la máquina y arránquela para comenzar a trabajar con ella.
[Esta imagen](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/3b0223eef4fff02835108ac59ea8d2f2f26c43cc/img/2-OvirtVMs.png)
muestra las máquinas virtuales disponibles. 
Inicialmente su máquina aparece con estado "Apagado" y se arranca mediante el botón "Ejecutar".  
El proceso de arranque de la máquina puede durar unos minutos.
Una vez que la máquina haya arrancado, tome nota de la Dirección IP de la máquina, que se muestra en el apartado "Detalles" de la máquina.
[Esta imagen](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/3b0223eef4fff02835108ac59ea8d2f2f26c43cc/img/5-ovirt-Direcci%C3%B3nIP.png)
muestra la pantalla de información correspondiente a una máquina virtual y en ella se muestra la dirección IP de la máquina.   
La [dirección IP](https://en.wikipedia.org/wiki/IP_address) es una secuencia de números (de la forma `10.6.131.106`) que identifican de forma unívoca a cualquier dispositivo conectado a Internet.
Esta dirección será necesaria para establecer conexiones directas a la máquina a través de ssh desde su casa o desde las salas del Centro de Cálculo de la ESIT. 
Anote esa dirección IP puesto que la máquina conserva esa dirección IP de forma estable. 
Si en algún momento experimenta dificultades de conexión, conecte a través de la interfaz web y compruebe que
la dirección de la máquina no ha cambiado.
Para consultar la IP de una máquina en un terminal Linux utilice el comando:
```
$ ip addr
```

8. Abra en el navegador la consola de la máquina (VNC Console (Browser)) y acceda a la misma.
[Esta imagen](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/3b0223eef4fff02835108ac59ea8d2f2f26c43cc/img/3-ovirt-loginVM1.png)
muestra la pantalla de acceso a la máquina a través de la consola en el navegador.   
Recuerde que inicialmente las credenciales de acceso son: Username - `usuario` y password - `usuario`.
En este primer acceso el sistema le solicitará que introduzca la contraseña actual y que escriba dos veces la
nueva contraseña elegida (véase
[la imagen](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/3b0223eef4fff02835108ac59ea8d2f2f26c43cc/img/3-ovirt-loginVM1.png)).
No se preocupe por la contraseña por ahora puesto que siempre la puede cambiar en el futuro con el comando
`passwd` pero **anote** el password que elija para no perderlo u olvidarlo.
La recomendación es que elija ahora un password muy simple (algo como `abcd` y lo cambie por otro que sea robusto y fácil de recordar para Ud.
cuando acceda posteriormente a la máquina a través de ssh.  
Compruebe a continuación el sistema operativo y versión del mismo:
```
$ lsb_release -a
```

9. **TAREA #04** Actualice el software (paquetes) de la máquina siguiendo las indicaciones de [esta página](https://linuxconfig.org/how-to-update-ubuntu-packages-on-18-04-bionic-beaver-linux) (por ejemplo).
Los comandos que tendrá que utilizar son:
```
$ sudo apt update
$ sudo apt upgrade
$ sudo apt autoremove
```
[Esta imagen](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/3b0223eef4fff02835108ac59ea8d2f2f26c43cc/img/update.png)
muestra el resultado de ejecución del primero de estos comandos y 
[esta otra](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/3b0223eef4fff02835108ac59ea8d2f2f26c43cc/img/upgrade2.png)
del segundo de ellos.    
Cuando el sistema le pregunte si hacerlo, indique No instalar `grub`.
Véase 
[esta imagen](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/3b0223eef4fff02835108ac59ea8d2f2f26c43cc/img/grub.png)
y 
[esta otra](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/3b0223eef4fff02835108ac59ea8d2f2f26c43cc/img/grub2.png) 
que ilustran esas opciones.


10. Edite los ficheros necesarios para [cambiar el nombre lógico de la máquina](https://askubuntu.com/questions/9540/how-do-i-change-the-computer-name) que le ha sido asignada. 
Se propone utilizar como nombre algo como Ubuntu-18-PAI-XXX (cambiando "XXX" por lo que Ud. quiera), aunque puede Ud. usar para su máquina el nombre que prefiera.
Para realizar ese cambio ha de editar Ud. los siguientes ficheros (necesita usar `sudo` para tener permisos de
root al tratarse de ficheros del sistema) y sustituir en ellos el nombre actual de la máquina (que es "ubuntu") por el que haya elegido:
```
$ sudo vi /etc/hostname
$ sudo vi /etc/hosts
```
Para que este cambio tenga efecto, ha de reiniciar la máquina.  
Siempre puede reiniciar la máquina desde la interfaz web de administración o bien usando el comando:
```
$ sudo reboot
```

11. Instale `git` en su máquina:
```
$ sudo apt install git
```
y compruebe que está instalado:
```
$ git --version
```

12. Consiga que se pueda subir código desde su máquina virtual hacia su cuenta GitHub sin necesidad de autentificación. 
Consulte para ello las instrucciones
[Adding a new SSH key to your GitHub account](https://docs.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account)

13. **TAREA #05** Cree un directorio `practicas` y  clone en él el repositorio de esta práctica:
```
cd
mkdir practicas
cd practicas
git clone git@github.com:ULL-ESIT-PAI-2021-2022/2021-2022-PAI-P01-EnvironmentWebServer.git
```
 
14. En la máquina local ejecute el Microsoft Visual Studio Code (VSC) y siga 
[estas instrucciones](https://code.visualstudio.com/docs/remote/ssh)
para configurar la edición remota de ficheros alojados en su máquina virtual.  
Para instalar VSC en la instalación Linux de su casa siga
[estas instrucciones](https://code.visualstudio.com/docs/setup/linux)
descargando el paquete `.deb`. 
Resulta útil realizar el paso 3 (opcional) del apartadto "SSH host setup#" que se muestra
[en esta página](https://code.visualstudio.com/docs/remote/troubleshooting#_configuring-key-based-authentication)
Ejecute para ello (sustituyendo la dirección IP por la de su VM):
```
$ ssh-keygen -t rsa -b 4096
$ export USER_AT_HOST=usuario@10.6.131.106
$ export PUBKEYPATH="$HOME/.ssh/id_rsa.pub"
$ ssh-copy-id -i "$PUBKEYPATH" "$USER_AT_HOST"
```
[Esta imagen](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/master/img/VSC-connect-to-host.png)
muestra el paso 2 del apartado "Connect to a remote host" de esas instrucciones mientras que
[esta otra](https://raw.githubusercontent.com/fsande/IB-P01-EntornoIaaS/master/img/VSC-password.png)
muestra la ventana de autentificación de VSC para darle acceso a la máquina virtual.  
Una vez completado este proceso se podrán editar ficheros en la máquina virtual usando VSC.

15. **TAREA #06** Utilice el VSC para editar de forma remota el código fuente del programa 
[computePI.js](https://github.com/ULL-ESIT-PAI-2021-2022/2021-2022-PAI-P01-EnvironmentWebServer/blob/master/www/js/computePI.js)
que se encuentra en el directorio `www/js/` del proyecto de esta práctica.

16. **TAREA #07** Siga [estas instrucciones](http://www.linuxproblem.org/art_9.html) 
para establecer la configuración de la máquina de modo que se pueda conectar a ella sin necesidad de escribir el password en cada conexión. 

17. También resulta conveniente utilizar alguno de los métodos (ssh config o alias) que se presentan en 
[estas instrucciones](https://scotch.io/tutorials/how-to-create-an-ssh-shortcut) 
de modo que se simplifique la conexión con la máquina remota pudiendo escribir algo como:
```
$ ssh maquina_pai
```
para conectarse a la máquina virtual.

### Servidor web basado en Node y Express

[![Node Logo](http://sub1.kevinchisholm.com/blog/images/node-js-logo.png)](http://blog.kevinchisholm.com/?s=node)

Siguiendo las instrucciones que siguen instalará en su máquina IaaS un servidor web basado en Node y Express. 
No es necesario que conozca los detalles de estas herramientas, sino simplemente seguir las indicaciones suministradas.

Si todo funciona correctamente, al abrir un navegador en la URL `http://<your VM IP address>:8080` debería ejecutar en esa web un programa que calcula el 
valor de PI de forma aproximada.

Modificando convenientemente el fichero index.html (o colocando los ficheros necesarios en su lugar) en el directorio `www` del proyecto 
creado puede visualizar diferentes webs que pudiera crear en el futuro. Experimente con este servidor web.

Para instalar el servidor se utilizará 
[Node.js](https://nodejs.org), 
que es un entorno de ejecucion para JavaScript.

18. **TAREA #08** Establezca una conexión `ssh` con su máquina virtual IaaS y utilice 
[esta referencia](https://lenguajejs.com/npm/introduccion/que-es/) 
para conocer `npm` e instalarlo en la máquina virtual.

### Configuración

19. Sitúese en el directorio raíz de su proyecto para esta práctica (en el que se encuentra el fichero `package.json`):

```
cd <yourDirectory>
```

20. Ejecute este comando:

```
npm install
```

21. Ejecute a continuación:

```
npm start
```

22. **TAREA #09** Abra una página en su navegador local con la siguiente dirección:

```
http://<your VM IP address>:8080
```

Para que el servidor web se mantenga activo incluso en el caso de que se cierre la sesión en la máquina
virtual utilice el comando
```
$ nohup sudo -b npm start
```
en el paso 21 anterior.

### La plataforma Jutge
22. **TAREA #10** En su correo electrónico debe tener un mensaje de invitación a la plataforma Jutge.
Acepte esa invitación y regístrese en la plataforma con su **cuenta de correo institucional**.

[Jutge](https://jutge.org/) es una plataforma que ha sido desarrollada en la
[UPC](https://www.upc.edu/en) para uso docente en asignaturas de programación.
La plataforma ofrece una gran cantidad de problemas que los estudiantes han
de resolver y el Jutge (juez en catalán) asigna un 
[veredicto](https://jutge.org/documentation/verdicts) 
a cada solución que se suba a la plataforma.

Jutge solo evalúa los programas desde el punto de vista de la corrección del resultado que ofrecen, 
no evalúa la calidad del código en cuanto a otros aspectos: diseño, estilo, formato, etc.
Para determinar si un programa es correcto o no, Jutge aplica varios tests al programa (tests unitarios)
que tratan de acreditar la bondad de la solución, que podría ser parcialmente correcta.
Algunos de esos tests son públicos y la programadora debiera encargarse de asegurar que su programa pasa
esos tests públicos (ofrece los resultados esperados) antes de enviar el programa al juez.

[Este documento](https://docs.google.com/presentation/d/14UvZPw4OJvogp6afLeouOAODcBNo5JhgePBQfkiAkic/edit?usp=sharing)
contiene información algo más detallada sobre el uso de la plataforma Jutge. 
Estúdielas antes de comenzar a trabajar con la misma.

A la hora de escribir un programa para enviarlo a Jutge ha de tener en cuenta que el programa no ha 
de escribir otra información como salida que la requerida por los tests de Jutge.
De este modo, el mensaje inicial que se utiliza para que el programa escriba en pantalla tanto la utilidad
del mismo como su modo de uso ha de omitirse.
La recomendación que hacemos es que ese mensaje se escriba en una función que será (o no) invocada desde `main()`.

Una vez que tenga su cuenta en Jutge, realice cuantos ejercicios sea capaz de programar y súbalos para su evaluación
por el juez, hasta obtener un veredicto de 
[AC](https://jutge.org/documentation/verdicts/AC)
(Accepted).
Cuantos más problemas resuelva, más incrementará sus capacidades como programadora.
