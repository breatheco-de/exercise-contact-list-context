# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Contact Managment Application

Tecnologías: HTML, CSS, JS, React, React Router and Context.

¡Hola! Es hora de empezar a hacer aplicaciones frontales profesionales. Esta vez
Crearemos una pequeña aplicación de gestión de contactos que permitirá a los usuarios:
Leer, crear, actualizar y eliminar contactos. 

Puedes usar este gif:
[Compruébalo aquí!](https://github.com/breatheco-de/exercise-contact-list/blob/master/preview.gif?raw=true)

O bien estas imágenes:
[Imagen 1](https://github.com/breatheco-de/exercise-contact-list-context/blob/master/src/img/contact-list-1.png?raw=true) y
[Imagen 2!](https://github.com/breatheco-de/exercise-contact-list-context/blob/master/src/img/contact-list-2.png?raw=true)


## 🌱  Cómo iniciar este proyecto

1. No clones este repositorio. El primer paso para comenzar a codificar es clonar el [react.js boilerplate](https://github.com/4GeeksAcademy/react-hello) en tu compjutador local o con Gitpod.

a) Si usas Gitpod (recomendada) puedes clonar el boilerplate [clic aquí](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello).

b) Si trabajas localmente, escribe el siguiente comando en tu terminal: `git clone https://github.com/4GeeksAcademy/react-hello`.

💡 Importante: Recuerda actualizar el `remote` del proyecto con el de tu repositorio usando `git remote set-url origin <your new url>`, y luego guardar tu código en tu nuevo repositorio usando `add`, `commit` y `push`.

2. Instala  /nodes_modules
```
$ npm install
```
3. Ejecuta el servidor webpack development 
```
$ npm run start
```
Este boilerplate no tiene funcionalidades pero si tiene el 99.9 % del HTML/CSS que necesitarás en este proyecto, lo que te permitirá enfocarte en las funcionalidades.

***Por favor, use el Contexto para este proyecto:*** La plantilla viene con el Contexto configurado. Verifique la carpeta ```/ store```.

***Nota: necesitarás codificar todas las funcionalidades.***

### :memo: El proyecto se divide en:

#### 2 vistas diferentes:

1. Contacto: Contiene la lista de contactos.
2. AddContact: es solo un formulario utilizado para crear o actualizar contactos.

#### Un componente:
Tarjeta de contacto: muestra solo un contacto.

## TO-DO funcionalidades

- Debes agregar el código necesario para que su aplicación maneje los contactos, específicamente:
    - crea,
    - actualiza,
    - y elimina.
- (Opcional) Solicite al usuario una confirmación antes de eliminarla, use el componente modal para eso.

Todas las funcionalidades deben implementarse en el objeto ```actions``` (store.js).

Sugerencia: comience con algún contenido ficticio en la tienda (store.js).

```Fetch``` la data desde la API: https://assets.breatheco.de/apis/fake/contact/

Sugerencia: usa Postman para probar los puntos finales de la API antes de codificar.


