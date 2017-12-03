Proyecto website Opa! Francisco Santoro y Pablo Smart
--------------------
El sitio es una combinación de conceptos de otros sitios como "wow" o "mercadolibre".


Guia de folder/archivos
-----------------------
Cada tipo de archivo, excepto index.html, está organizado en una carpeta separada por formatos.
Ejemplo:
- resources
	- images // Contiene las imágenes del sitio
	- fonts  // Contiene las tipografías del sitio
	- js // Contiene todos los scripts utilizados en el sitio
        -login.js: Es el encargado de las funciones de registro de usuario e inicio de sesión.
        -main.js: Se encarga de la funcionalidad del slider y de los efectos de aparición de productos.
        -menu.js: Controla la funcionalidad del menú panorámico (pc tableta).
        -menumov.js: Maneja el funcionamiento del menú mobile.
        -modal.js: Permite generar y utilizar ventanas del tipo modal que se emplean en el registro y login.
        
	-css // Contiene todos los estilos del sitio
        -main.css: Estilo principal de la página, controla el estilado de los elementos mas globales.
        -form.css: Controla el estilado de los formularios usados en el login y el registro.
        -menu.css: Le da estilo al menú panorámico.
        -menumov.css: Le da estilo al menú para mobile.
        -modal.css: Es el encargado del estilado del elemento modal, usado en el login y registro.
        -producto.css: Estilo utilizado por cada uno de los productos, se pensó de forma modular para que se adapte a cualquier producto y tamaño de pantalla.
        -slider.css: Maneja el estilado del slider.
        
	-json // Contiene el único archivo json utilizado en el proyecto
        -inicio.json: almacena los datos ingresados por el usuario al registrarse, también contiene un catálogo que no fue utilizado por diversas dificultades técnicas. 
        

Funcionalidades 
---------------
Las principales funcionalidades están relacionadas con la capacidad que tiene el sitio de generar un usuario nuevo al registrarse y de permitir iniciar sesión utilizando ese mismo usuario. Todo esto se realiza a través de llamadas ayax. Además, el inicio de sesión queda registrado en localstorage y se muestra en el header en forma del nombre del usuario logueado. Este usuario también tendrá la posibilidad de cerrar la sesión al hacer click en el botón "salir". 


Recursos internos
-----------------
Ejemplo:
	JSON : inicio.json es utilizado junto con json-server (IMPORTANTE) tanto en el proceso de inicio de sesión como en el login.

	Ajax : en el archivo login.js se aprecia que se hicieron llamadas ajax tanto en el registro de usuario, a través de localhost con json-server como en el login, donde se comparan los datos ingresados por el usuario en el formulario con los datos del archivo json a travex de una llamada ajax.

	localstorage : en localstorage se guarda una copia del nombre de usuario en el caso de que el proceso de login sea exitoso. De ser así, la página se refresca y una función cargada al inicio coloca ese contenido de localstorage en el header de la página, indicando todo fue exitoso.
    De mismo modo, en caso de ser exitoso, se agrega un pequeño botón debajo del nombre con la finalidad de borrar el localstorage y recargar la página. Quedando nuevamente "deslogueado".

Librerías utilizadas
--------------------
-Jquery
-Font-Awesome

Recursos Externos utilizados 
-----------------------------
Es difícil de enumerar, pero diría que la mayoría de los recursos fueron sacados de W3school y la mayoría de los atascos fueron solucionados gracias a stackoverflow.com 
Muchas de las imágenes fueron tomadas de otras webs locales como loi, mercadolibre o wow.
Los iconos forman parte de font-Awesome, por lo que son en realidad tipografías vectoriales. 

Otros
-----
Ciertas funcionalidades como el buscador o el carrito no fueron implementadas debido a factores de estructuración de la página.
    Por ejemplo, podrán observar que tanto el json como el archivo "carrito.js" cuentan con un prototipo de lo que tenía pensado ser el carrito. Pero al haber cargado los productos de forma estática en el html, interactuar con ellos de forma individual se volvía casi imposible.
    Por lo que se requeriría de una reestructura importante del proyecto. Y en lugar arriesgarnos a no llegar a tiempo con la reestructura y terminar con un producto incluso menos terminado, preferimos ir por lo seguro y agregar las funcionalidades que sabíamos iban a funcionar.
