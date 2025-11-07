# 🏡 Fill Your Home

**Fill Your Home** es una tienda de muebles de segunda mano con enfoque en la sostenibilidad y el diseño. Exploramos y restauramos piezas únicas para que cada hogar esté lleno de historia y carácter.

Esta aplicación web fue diseñada y construida con **Next.js** y **Tailwind CSS**.

## 🚀 Puesta en Marcha

Sigue estos pasos para levantar el proyecto en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18.18.0 o superior, compatible con la versión de Next.js utilizada) y npm (o Yarn, pnpm, o Bun).

### Instalación

1.  **Clona el repositorio** de GitHub:
    ```bash
    git clone [https://github.com/RoberVF/fillyourhome.git](https://github.com/RoberVF/fillyourhome.git)
    cd fillyourhome
    ```

2.  **Instala las dependencias:**
    Debido a que este proyecto utiliza una versión reciente de Next.js (Next.js 16) y algunas dependencias no han actualizado su compatibilidad (e.g., `vaul`), se recomienda usar el flag `--legacy-peer-deps` o el gestor de paquetes que uses:

    ```bash
    # Si usas npm (Recomendado para evitar el error ERESOLVE)
    npm install --legacy-peer-deps
    # o
    # Si usas pnpm (El gestor de paquetes de Vercel)
    pnpm install
    # o
    # Si usas Yarn
    yarn install
    ```

3.  **Añade las Imágenes Estáticas (¡Importante!)**
    Las imágenes de producto y héroe no se incluyen en la descarga del código. Para que la web se vea correctamente, debes descargar las imágenes y colocarlas en la carpeta `public/` con los nombres correctos. Las rutas necesarias se encuentran en los archivos de componentes (como `products-section.tsx` y `hero.tsx`).

    *Ejemplo de imágenes necesarias:*
    * `/elegant-second-hand-furniture-setup-minimal-aesthe.jpg`
    * `/vintage-gray-sofa-mid-century.jpg`
    * `/solid-oak-dining-table.jpg`
    * etc.

### Desarrollo Local

Una vez completada la instalación, puedes correr el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
