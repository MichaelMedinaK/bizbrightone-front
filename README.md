BizBrightOne Front
Proyecto frontend hecho con React, Vite y Firebase Auth.

Requisitos
Node.js >= 18.x

npm o yarn

Instalación
Clona el repositorio:

bash
Copiar
Editar
git clone https://github.com/MichaelMedinaK/bizbrightone-front.git
cd bizbrightone-front
Instala dependencias:

bash
Copiar
Editar
npm install
o

bash
Copiar
Editar
yarn install
Configura Firebase:
Crea un archivo .env en la raíz con tus variables de Firebase (puedes pedirle al admin un ejemplo o usar tus propias credenciales).

env
Copiar
Editar
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...
Inicia el proyecto:

bash
Copiar
Editar
npm run dev
o

bash
Copiar
Editar
yarn dev
Notas
El login está integrado con Firebase Auth.

Si tienes problemas con las variables de entorno, revisa la documentación de Firebase.

