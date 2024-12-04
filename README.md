# Proyecto Ionic con AngularJS

Este proyecto es una aplicación creada con el framework **Ionic** y **AngularJS**. A continuación, te explico cómo inicializar el proyecto y cómo interactuar con las funcionalidades principales.

## 1. Inicializar el proyecto

Para empezar a trabajar con este proyecto, sigue estos pasos:

1. **Clona el repositorio** desde GitHub a tu máquina local:
    git clone https://github.com/mxttw3/prova.git

2. **Instala las dependencias** necesarias utilizando `npm`:
    cd tu_repositorio
    npm install

3. **Ejecuta el proyecto** usando el siguiente comando:
    ionic serve

    Esto abrirá la aplicación en tu navegador. Por defecto, estará disponible en `http://localhost:8100`.

## 2. Página de Usuarios

Al abrir la aplicación, **la primera página que se carga es la de "Usuarios"**, donde verás una lista de usuarios cargados desde un archivo JSON por defecto. 

- **Añadir nuevos usuarios**: En la página de "New Users", puedes añadir nuevos usuarios. Para hacerlo, completa el formulario y haz clic en el botón correspondiente para agregar el usuario.
- **Recargar la página**: Para ver los cambios de los usuarios añadidos, necesitarás recargar la página de "Usuarios", ya que los datos se almacenan en el `localStorage`.

## 3. Almacenamiento Local

- Los usuarios **se guardan en el `localStorage`** del navegador. Si borras el `localStorage`, los usuarios se recargarán desde el archivo JSON por defecto.

## 4. Exportar Usuarios

Puedes **descargar la lista de usuarios en formato PDF o XLSX** (para abrirlo en Excel):

- **Descargar en PDF**: Se generará un archivo PDF con la lista completa de usuarios.
- **Descargar en XLSX**: Los usuarios también se pueden exportar a un archivo en formato Excel (`.xlsx`).

## 5. Compatibilidad

Este proyecto está basado en **Ionic**, por lo que la aplicación es **compatible con dispositivos móviles (iOS y Android)**, además de poder visualizarla en la web.

¡Listo! Muchas gracias :)
