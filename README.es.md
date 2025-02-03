<!-- hide -->
# Aplicación de Gestión de Contactos
<!-- endhide -->

Tecnologías: HTML, CSS, JS, React, React Router y Context.API.

¡Hola! Es hora de empezar a hacer aplicaciones de front-end profesionales. Esta vez
Crearemos una pequeña aplicación de gestión de contactos que permitirá a los usuarios:
Leer, crear, actualizar y eliminar contactos. 

Puedes usar este gif:
[¡Mira el ejemplo aquí!](https://github.com/breatheco-de/exercise-contact-list/blob/master/preview.gif?raw=true)

O bien estas imágenes:
[Imagen 1](https://github.com/breatheco-de/exercise-contact-list-context/blob/master/src/img/contact-list-1.png?raw=true) e
[Imagen 2](https://github.com/breatheco-de/exercise-contact-list-context/blob/master/src/img/contact-list-2.png?raw=true)

<onlyfor saas="false" withBanner="false">

## 🌱 Cómo comenzar este proyecto?

No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el `react boilerplate` usando un entorno de desarrollo como [Codespaces](https://4geeks.com/es/lesson/tutorial-de-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/es/lesson/como-utilizar-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir o clonar:

```text
https://github.com/4GeeksAcademy/react-hello-webapp
```

**👉 Por favor sigue estos pasos sobre** [cómo comenzar un proyecto de programación](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).

> 💡 Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y subiendo el código a tu nuevo repositorio usando los comandos `add`, `commit` y `push` desde la terminal de git.

1. Instala `/node_modules`
   
```bash
$ npm install
```

2. Ejecuta el servidor development

```bash
$ npm run start
```

**Por favor, use el Context.API para este proyecto:** La plantilla viene con el Contexto configurado.

</onlyfor>

## 📝 Instrucciones:

- Debes agregar el código necesario para que su aplicación maneje los contactos, a través del tipico CRUD(Cread Read Update Borrar) específicamente:
    - Crear
    - leer contactos
    - Actualizar
    - Eliminar
- (Opcional) Solicite al usuario una confirmación antes de eliminar un contacto, usa un componente Modal para eso.

Todas las funcionalidades deben implementarse bajo en el concepto del Context.API.

`fetch` la data desde la API: https://playground.4geeks.com/contact/docs

## El proyecto deberia tener 2 vistas diferentes:

1. Contact: Esta vista debe contiener la lista de contactos.
2. AddContact: Deberá tener el formulario utilizado para crear o actualizar contactos.

### Un componente:

1. ContactCard: Muestra un solo contacto.

## 💡 Pistas: 

+ Usa Postman para probar los *endpoints* de la API antes de codificar.

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Cursos de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).
