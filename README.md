# Pizzería Mamma Mia!

Hito 3 - Renderización dinámica de componentes | Desafío Latam - Fullstack JS

## Accesos al proyecto

- Demo en vivo Hito 3 (Vercel): **[pizzeria-mama-mia-hito3.vercel.app](https://pizzeria-mama-mia-hito3.vercel.app/)**
- Repositorio: **[cesarscl/Pizzeria-Mama-Mia-Hito3](https://github.com/cesarscl/Pizzeria-Mama-Mia-Hito3)**

## Descripción

Landing page de una pizzería desarrollada con **React + Vite**. Muestra un menú de pizzas, un navbar con estado simulado de sesión y un footer institucional.

En el **Hito 2** se agregan los formularios de **registro** y **login**, manejados con el hook `useState` y el evento `onSubmit`, que validan los datos ingresados y muestran un mensaje de éxito o de error. La navegación entre vistas se controla con un estado en `App.jsx`.

En el **Hito 3** el menú pasa a renderizarse dinámicamente con `.map()` desde el archivo `pizzas.js`, y se agrega un **carrito de compras** simulado que permite aumentar y disminuir cantidades y calcula el total de la compra.

> El carrito se abre con el botón **🛒 Total** del Navbar. El monto de ese botón sigue siendo un valor fijo; el total real se muestra dentro del carrito.

## Componentes

```
App.jsx
├── Navbar.jsx      → menú de navegación, variables `total` y `token`
├── Home.jsx
│   ├── Header.jsx  → título y descripción de la pizzería
│   └── CardPizza.jsx (x6) → nombre, precio, ingredientes e imagen (vía props)
├── Register.jsx    → formulario de registro con validaciones (useState)
│   └── Message.jsx → alerta de éxito/error, visible solo cuando hay mensaje
├── Login.jsx       → formulario de login con validaciones (useState)
│   └── Message.jsx
├── Cart.jsx        → carrito de compras: cantidades y total (useState)
└── Footer.jsx      → derechos reservados
```

- **pizzas.js**: datos del proyecto. Exporta `pizzas` (menú de 6 pizzas) y `pizzaCart` (simulación del carrito).
- **Navbar.jsx**: botones Home y Total (siempre visibles) + Login/Register o Profile/Logout según la variable booleana `token`. El total se formatea con separador de miles usando `toLocaleString`. Recibe la prop `onNavigate` para cambiar la vista.
- **Home.jsx**: recorre `pizzas` con `.map()` y renderiza un `CardPizza` por cada pizza, pasándole sus props.
- **CardPizza.jsx**: recibe `name`, `price`, `ingredients` e `img` por props, y renderiza un `<li>` por cada ingrediente.
- **Cart.jsx**: guarda `pizzaCart` en el estado `cart` y muestra imagen, nombre, precio y cantidad de cada pizza. Los botones `+` y `-` cambian la cantidad y, al llegar a 0, la pizza se elimina del carrito. El total se calcula con `reduce`. El botón Pagar aún no tiene funcionalidad.
- **Register.jsx**: estados `email`, `password` y `confirmPassword`; valida campos obligatorios, largo mínimo de 6 caracteres y que ambas contraseñas coincidan.
- **Login.jsx**: estados `email` y `password`; valida campos obligatorios y largo mínimo de 6 caracteres.
- **Message.jsx**: alerta de Bootstrap (verde o roja) que solo se muestra cuando hay un mensaje.
- **utils/helpers.js**: función `formatPrice` reutilizada en `Navbar`, `CardPizza` y `Cart`.

## Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)

## Cómo correr el proyecto en local

```bash
git clone https://github.com/cesarscl/Pizzeria-Mama-Mia-Hito3.git
cd Pizzeria-Mama-Mia-Hito3
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.


## Requerimientos del Hito 1

- [x] `App.jsx` muestra `Navbar`, `Home` y `Footer`
- [x] `Header.jsx` con título y descripción, llamado desde `Home.jsx`
- [x] `Navbar.jsx` con menú Home, Profile, Logout, Login, Register y Total
- [x] Botones Home y Total visibles independientemente del `token`
- [x] `CardPizza.jsx` recibe nombre, precio, ingredientes e imagen por props
- [x] `Footer.jsx` con el texto de derechos reservados

## Requerimientos del Hito 2

- [x] `Register.jsx` con campos Email, Contraseña y Confirmar contraseña
  - Todos los campos obligatorios
  - Contraseña de al menos 6 caracteres
  - Contraseña y confirmación deben coincidir
  - Muestra mensaje de éxito o de error al enviar
- [x] `Login.jsx` con campos Email y Contraseña
  - Todos los campos obligatorios
  - Contraseña de al menos 6 caracteres
  - Muestra mensaje de éxito o de error al enviar
- [x] Los botones Home, Login y Register del `Navbar` cambian la vista mostrada en `App.jsx` (estado `view`)

## Requerimientos del Hito 3

- [x] `Home.jsx` recorre el array `pizzas` y renderiza un `CardPizza` por cada pizza (6 tarjetas)
- [x] `CardPizza.jsx` muestra la información de cada pizza utilizando props
- [x] `CardPizza.jsx` itera por los ingredientes y renderiza un `<li>` por cada uno
- [x] `Cart.jsx` recorre `pizzaCart` y muestra imagen, nombre, precio y cantidad de cada pizza
- [x] Botones para aumentar y disminuir la cantidad; con cantidad 0 la pizza se elimina del carrito
- [x] Cálculo del total de la compra y botón Pagar (sin funcionalidad por ahora)

### Notas de implementación

- `Home`, `Register`, `Login` y `Cart` se mantienen activos y se navega entre ellos desde el `Navbar` (estado `view`), en lugar de dejarlos comentados en `App.jsx` como en el ejemplo del hito.
- Las URLs de imágenes del material de apoyo responden error 402, por lo que en `pizzas.js` se reemplazaron por fotos de [Unsplash](https://unsplash.com/).

## Autor

Cesar — Desafío Latam, Fullstack JS, Módulo 04
