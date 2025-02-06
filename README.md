# PochoTienda

PochoTienda es una aplicación de e-commerce desarrollada con React JS. Este proyecto es la entrega final del curso de React JS de Coderhouse.

## Acceso al Deploy

Puedes acceder a la aplicación desplegada en el siguiente enlace: [PochoTienda](https://pochotienda.vercel.app/)

## Características

- Navegación entre diferentes categorías de productos.
- Detalle de producto con información completa.
- Carrito de compras con funcionalidad para agregar y eliminar productos.
- Proceso de checkout con formulario de compra.
- Integración con Firebase para la gestión de productos y órdenes.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/PochoTienda.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd PochoTienda
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

Para iniciar la aplicación en modo de desarrollo, ejecuta:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173/`.

## Estructura del Proyecto

```
PochoTienda/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── Item.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemList.jsx
│   │   └── ...
│   ├── context/
│   ├── firebase/
│   ├── App.jsx
│   ├── index.jsx
│   └── ...
├── package.json
└── README.md
```

## Dependencias

- React
- React Router DOM
- Firebase
- Bootstrap

## Autor

Desarrollado por Cris Ramonda.

## Licencia

Este proyecto está bajo la Licencia MIT.