# Aplicativo encriptador/desencriptador de texto

Este proyecto es una aplicación web que permite convertir texto en un formato encriptado y luego revertirlo al texto original.

## Estructura del proyecto

El proyecto está compuesto por tres archivos principales:

- **index.html**: Define la estructura de la página web.
- **style.css**: Contiene los estilos que hacen que la aplicación se vea bonita.
- **funciones.js**: Contiene el código que hace que la aplicación funcione.

## Descripción del HTML

- **`<head>`**:
  - Configura el tipo de caracteres y el diseño para que la página se vea bien en diferentes dispositivos.
  - Incluye enlaces a los archivos de estilo y a una biblioteca de iconos.

- **`<body>`**:
  - **`<main>`**: Divide la página en dos secciones:
    - **container-informacion**:
      - Muestra un área de texto donde se puede escribir el texto que se desea encriptar o desencriptar.
      - Tiene botones para encriptar y desencriptar el texto.
    - **container-respuesta**:
      - Muestra el resultado después de encriptar o desencriptar el texto.
      - Incluye un botón para copiar el resultado.

  - **`<footer>`**: Muestra un pequeño mensaje al final de la página con información del desarrollador.

## Descripción del CSS

El archivo CSS se encarga de hacer que la página se vea bien.

- **@import**: Trae una fuente especial llamada Montserrat para que el texto se vea más bonito.
- **:root**: Define colores y fuentes que se usarán en todo el sitio.
- **body**: Configura el fondo de la página con una imagen y asegura que el contenido cubra toda la pantalla.
- **.container**: Organiza las dos secciones principales (información y respuesta) en una fila, pero las hace apilar en una columna en pantallas más pequeñas.
- **.container-informacion** y **.container-respuesta**: Estilizan las áreas donde se introduce el texto y donde se muestra el resultado.
- **.container-boton**: Da estilo a los botones para que sean fáciles de usar y cambien de color cuando se pasa el ratón sobre ellos.
- **#btnCopiar**: Estiliza el botón de copiar, que solo se muestra cuando hay texto para copiar.

## Descripción del JavaScript

El archivo JavaScript hace que la aplicación funcione.

- **Variables**:
  - **`strTexto`**: El área de texto donde se escribe el texto que se desea encriptar o desencriptar.
  - **`strRespuesta`**: El área de texto donde se muestra el texto encriptado o desencriptado.
  - **`divMsjAlternativo`** y **`divMensajeInfo`**: Mensajes que se muestran cuando no hay texto para mostrar.
  - **`placeholder`** y **`containerMensaje`**: Ayudan a ajustar el diseño de la página.

- **`btnEncriptar`**:
  - Llama a la función que convierte el texto encriptado.
  - Muestra el texto encriptado en el área de respuesta y oculta mensajes cuando hay texto.

- **`btnDesencriptar`**:
  - Llama a la función que convierte el texto desencriptado.
  - Muestra el texto desencriptado en el área de respuesta y oculta mensajes cuando hay texto.

- **`encriptarDesencriptar`**:
  - Esta función toma el texto y lo convierte usando una lista de reglas.
  - Si se desea encriptar, reemplaza letras por códigos especiales.
  - Si se desea desencriptar, reemplaza los códigos especiales por las letras originales.

- **`copiarInfo`**:
  - Copia el texto encriptado o desencriptado al área donde se puede volver a editarlo.

- **`permitirSoloLetrasMinusculasSinAcentos`**:
  - Asegura que solo se pueda ingresar letras minúsculas sin acentos en el área de texto.

- **Eventos**:
  - Se usa para evitar que se ingresen caracteres no permitidos en el área de texto.

## Cómo utilizar la aplicación

1. **Ingresar texto**: Escribe el texto que deseas encriptar o desencriptar en el área de texto "Ingrese el texto aquí...".

2. **Encriptar**: Haz click en el botón **Encriptar** para convertir el texto en su forma encriptada.

3. **Desencriptar**: Haz click en el botón **Desencriptar** para convertir el texto a su forma original.

4. **Copiar texto**: Utiliza el botón **Copiar** para copiar el resultado en el área donde se ingresa el texto.

## Requisitos

Para que la aplicación funcione correctamente, se necesita:

- **HTML**: La estructura básica de la página.
- **CSS**: Para el estilo y diseño de la página.
- **JavaScript**: Para que la aplicación haga su trabajo (encriptar, desencriptar, copiar).

## Instalación y ejecución

1. Clona o descarga el repositorio del proyecto.
2. Abre el archivo `index.html` en el navegador web para visualizar y utilizar la aplicación.

## Desarrollado por

Roxana María García Gamboa - 2024 - Costa Rica.

