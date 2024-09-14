# Google Reviews Fetcher App

## Descripción

Este proyecto es una API que permite obtener automáticamente las reseñas de Google de una compañía mediante la API de Google Places y almacenarlas en una base de datos MongoDB. La API se ejecuta periódicamente, utilizando un cron job que corre una vez por semana para hacer la solicitud de reseñas y guardarlas en MongoDB.

## Funcionalidades

- Obtiene reseñas de Google Places API utilizando el place_id de una compañía.
- Almacena las reseñas en MongoDB, incluyendo el nombre del autor, rating, texto de la reseña, tiempo y foto de perfil.
- La API permite realizar una petición GET para actualizar manualmente las reseñas.
- Un cron job se ejecuta semanalmente para actualizar automáticamente las reseñas.

### Requisitos

- Node.js (v16 o superior recomendado)
- MongoDB Atlas (o cualquier instancia de MongoDB)
- Google Places API Key con acceso a la API de Detalles del lugar.

### Variables de Entorno

Este proyecto utiliza variables de entorno para almacenar las credenciales de la base de datos y la clave de la API de Google. Las siguientes variables de entorno deben ser definidas:

- MONGO_URI: URI de conexión de MongoDB Atlas.
- GOOGLE_API_KEY: Clave API de Google.
- PLACE_ID: El place_id de la compañía cuyas reseñas se quieren obtener.

## Instalación

- Clona el repositorio:

`git clone https://github.com/Codereggs/biodentric-server.git`
`cd biodentric-server`

- Instala las dependencias:

`npm install`

- Configura las variables de entorno:

- Crea un archivo .env.local en la raíz del proyecto y agrega las variables mencionadas en la sección de "Variables de Entorno".

## Iniciarlo

Para iniciar el server debes ejecutar el server-cron.js

`node server/server-cron.js`
