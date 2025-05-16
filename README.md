# 📝 Tasks App

Aplicación de tareas desarrollada con **Vue 3**, **Vite**, **TailwindCSS** y **PrimeVue**. Este proyecto forma parte del reto técnico de Nextline.

## 🚀 Requisitos

Asegúrate de tener instalado lo siguiente:

- **Node.js** `>=20.9`
- **npm** `>=10.8`

## ⚙️ Instalación

Sigue los siguientes pasos para levantar el entorno de desarrollo:

1. Clona el repositorio:

   ```bash
   git clone <url-del-repo>
   cd tasks-app
   ```
2. Copia el archivo de entorno de ejemplo:

    ```bash
   cp .env.example .env
   ```

3. En el archivo .env, agrega el Bearer token asignado en la tarea con terminación ```977b3fcbb064179ecd```:

    ```env
   VITE_API_TOKEN=token_asignado
   ```
   El archivo .env.example ya incluye la URL base, no es necesario modificarla:
    ```env
   VITE_API_BASE_URL=https://ecsdevapi.nextline.mx/vdev/tasks-challenge
   ```

4. Instala las dependencias del proyecto:

    ```bash
   npm install
   ```

5. Inicia el servidor de desarrollo:

    ```bash
   npm run dev
   ```

## 📜 Scripts disponibles

- `npm run dev` – Inicia el servidor de desarrollo.
- `npm run build` – Genera el build para producción.
- `npm run preview` – Sirve el build generado.
- `npm run fix` – Aplica ESLint y Prettier para formatear el código automáticamente.

## 🧱 Tecnologías utilizadas

- **Vue 3**
- **Vite**
- **TailwindCSS**
- **PrimeVue**
- **FontAwesome**
- **ESLint + Prettier**
- **ky** como cliente HTTP

## 📌 Notas

- El proyecto utiliza `ky` como cliente para consumir la API. No es necesario instalar ni configurar Axios.
- La configuración de estilos combina utilidades de TailwindCSS y componentes de PrimeVue.
- Asegúrate de mantener el archivo `.env` actualizado con el token correcto antes de levantar el entorno.