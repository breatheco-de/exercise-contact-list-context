<!-- hide -->
# Aplicación de Gestión de Contactos
<!-- endhide -->

Tecnologías: HTML, CSS, JS, React, React Router y Context.

¡Hola! Es hora de empezar a hacer aplicaciones frontales profesionales. Esta vez
Crearemos una pequeña aplicación de gestión de contactos que permitirá a los usuarios:
Leer, crear, actualizar y eliminar contactos. 

Puedes usar este gif:
[Compruébalo aquí!](https://github.com/breatheco-de/exercise-contact-list/blob/master/preview.gif?raw=true)

O bien estas imágenes:
[Imagen 1](https://github.com/breatheco-de/exercise-contact-list-context/blob/master/src/img/contact-list-1.png?raw=true) y
[Imagen 2!](https://github.com/breatheco-de/exercise-contact-list-context/blob/master/src/img/contact-list-2.png?raw=true)


## 🌱 Cómo comenzar este proyecto

No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el `react boilerplate` usando una herramienta de aprovisionamiento como [Codespaces](https://4geeks.com/es/lesson/tutorial-de-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/es/lesson/como-utilizar-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir o clonar:

```
https://github.com/4GeeksAcademy/react-hello
```

**👉 Por favor sigue estos pasos** [cómo comenzar un proyecto de codificación](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).

💡 Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y subiendo el código a tu nuevo repositorio usando los comandos `add`, `commit` y `push` desde la terminal de git.

2. Instala  /nodes_modules
```
$ npm install
```
3. Ejecuta el servidor webpack development 
```
$ npm run start
```
Este boilerplate no tiene funcionalidades, pero sí tiene el 99.9 % del HTML/CSS que necesitarás en este proyecto, lo que te permitirá enfocarte en las funcionalidades.

**Por favor, use el Contexto para este proyecto:** La plantilla viene con el Contexto configurado. Verifique la carpeta ```/ store```.

**Nota: necesitarás codificar todas las funcionalidades.**

### :memo: El proyecto se divide en:

#### :two: vistas diferentes:

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

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Curso de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).
