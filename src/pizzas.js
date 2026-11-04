// Las URLs de img originales (Firebase) dejaron de funcionar: responden 402.
export const pizzas = [
  {
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
    id: "P001",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=640&q=80",
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    name: "napolitana",
    price: 5950,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P002",
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=640&q=80",
    ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
    name: "española",
    price: 7250,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P003",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=640&q=80",
    ingredients: ["mozzarella", "tomates", "salame", "orégano"],
    name: "salame",
    price: 5990,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P004",
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=640&q=80",
    ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
    name: "cuatro estaciones",
    price: 9590,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P005",
    img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=640&q=80",
    ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
    name: "bacon",
    price: 6450,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P006",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=640&q=80",
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    name: "pollo picante",
    price: 8500,
  },
];

// Simulación de un carrito de compras
export const pizzaCart = [
  {
    id: "P001",
    name: "napolitana",
    price: 5950,
    count: 1,
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=640&q=80",
  },
  {
    id: "P002",
    name: "española",
    price: 7250,
    count: 1,
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=640&q=80",
  },
  {
    id: "P003",
    name: "salame",
    price: 5990,
    count: 1,
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=640&q=80",
  },
];
