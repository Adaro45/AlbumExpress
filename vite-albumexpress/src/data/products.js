// // Datos estandarizados para todos los productos
// const products = [
//   {
//     id: 1,
//     name: "Álbum Premium Boda",
//     image: "/images/place-holder-boda-premium.jpg",
//     price: 2000,
//     category: "Bodas",
//     featured: true,
//     date: "2023-05-15",
//     description:
//       "Álbum de lujo para bodas con cubierta de cuero genuino y páginas de alta calidad. Incluye caja protectora a juego.",
//     details: {
//       material: "Cuero genuino",
//       pages: 20,
//       size: "12x12 pulgadas",
//       extras: ["Caja protectora", "Grabado personalizado", "Papel fotográfico premium"],
//     },
//   },
//   {
//     id: 2,
//     name: "Álbum Quinceañera Deluxe",
//     image: "/images/place-holder-quinceanera-deluxe.jpg",
//     price: 2500,
//     category: "Quinceañera",
//     featured: true,
//     date: "2023-06-20",
//     description:
//       "Álbum especial para quinceañeras con detalles en rosa y dorado. Perfecto para preservar los recuerdos de este día tan especial.",
//     details: {
//       material: "Eco-cuero",
//       pages: 25,
//       size: "14x14 pulgadas",
//       extras: ["Detalles en dorado", "Páginas temáticas", "Espacio para dedicatorias"],
//     },
//   },
//   {
//     id: 3,
//     name: "Álbum Familiar Rústico",
//     image: "/images/place-holder-familiar-rustico.jpg",
//     price: 2000,
//     category: "Familia",
//     featured: false,
//     date: "2023-04-10",
//     description:
//       "Álbum con estilo rústico ideal para fotos familiares. Diseño cálido y acogedor que realza tus recuerdos más preciados.",
//     details: {
//       material: "Madera y tela",
//       pages: 20,
//       size: "12x16 pulgadas",
//       extras: ["Acabado rústico", "Cordón decorativo", "Papel texturizado"],
//     },
//   },
//   {
//     id: 4,
//     name: "Cuadro Acrílico Premium",
//     image: "/images/placeholder_cuadro_acrilio.jpeg",
//     price: 5000,
//     category: "Acrilicos",
//     featured: true,
//     date: "2023-07-05",
//     description:
//       "Cuadro con portada de acrílico de alta transparencia, ideal para decoración moderna y elegante. Resalta tus fotografías con un acabado brillante y profesional.",
//     details: {
//       material: "Acrílico y aluminio",
//       size: "24x39 pulgadas",
//       extras: ["Soporte de pared incluido", "Acabado brillante", "Impresión de alta definición"],
//     },
//   },
//   {
//     id: 5,
//     name: "Álbum Boda Vintage",
//     image: "/images/place-holder-boda-vintage.jpg",
//     price: 2500,
//     category: "Bodas",
//     featured: false,
//     date: "2023-03-22",
//     description:
//       "Álbum con estilo vintage para bodas con un toque romántico y nostálgico. Perfecto para parejas que buscan un estilo clásico.",
//     details: {
//       material: "Tela y encaje",
//       pages: 25,
//       size: "14x14 pulgadas",
//       extras: ["Detalles en encaje", "Cintas decorativas", "Papel envejecido"],
//     },
//   },
//   {
//     id: 6,
//     name: "Álbum Quinceañera Clásico",
//     image: "/images/place-holder-quinceanera-clasico.jpg",
//     price: 1800,
//     category: "Quinceañera",
//     featured: false,
//     date: "2023-02-18",
//     description:
//       "Álbum clásico para quinceañeras con un diseño elegante y atemporal. La opción perfecta para un recuerdo duradero.",
//     details: {
//       material: "Tela satinada",
//       pages: 18,
//       size: "11x11 pulgadas",
//       extras: ["Detalles en plata", "Espacio para dedicatorias", "Diseño personalizable"],
//     },
//   },
//   {
//     id: 7,
//     name: "Caja para Álbum Premium",
//     image: "/images/place-holder-boda-caja.jpg",
//     price: 700,
//     category: "Accesorios",
//     featured: false,
//     date: "2023-01-30",
//     description:
//       "Caja protectora de lujo para álbumes, fabricada con materiales de alta calidad para preservar tus recuerdos por más tiempo.",
//     details: {
//       material: "Cartón rígido y tela",
//       size: "Adaptable a álbumes de 12x12 pulgadas",
//       extras: ["Interior acolchado", "Cierre magnético", "Personalizable"],
//     },
//   },
//   {
//     id: 8,
//     name: "Álbum Profesional Minimalista",
//     image: "/images/place-holder-profesional-minimalista.jpg",
//     price: 1600,
//     category: "Profesional",
//     featured: true,
//     date: "2023-08-12",
//     description:
//       "Álbum con diseño minimalista para fotógrafos profesionales. Elegante, sobrio y con acabados de primera calidad.",
//     details: {
//       material: "Cuero sintético",
//       pages: 16,
//       size: "10x12 pulgadas",
//       extras: ["Acabado mate", "Esquinas reforzadas", "Papel fotográfico premium"],
//     },
//   },
//   {
//     id: 9,
//     name: "Cuadro Acrílico Minimalista",
//     image: "/images/placeholder_cuadro_acrilico_minimalista.jpeg",
//     price: 4500,
//     category: "Acrilicos",
//     featured: true,
//     date: "2023-09-05",
//     description:
//       "Cuadro de acrílico con diseño minimalista, perfecto para decoraciones modernas. Resalta tus fotografías con un acabado elegante y contemporáneo.",
//     details: {
//       material: "Acrílico transparente",
//       size: "24x36 pulgadas",
//       extras: ["Soporte flotante", "Acabado brillante", "Fácil instalación"],
//     },
//   },
//   {
//     id: 10,
//     name: "Portaretratos Premium",
//     image: "/images/placeholder_portaretrato.jpeg",
//     price: 400,
//     category: "Portaretratos",
//     featured: false,
//     date: "2023-08-20",
//     description:
//       "Portaretratos de alta calidad con acabado elegante, ideal para decorar tu hogar u oficina con tus fotografías favoritas.",
//     details: {
//       material: "Madera y vidrio",
//       size: "8x10 pulgadas",
//       extras: ["Soporte de mesa", "Vidrio antirreflejo", "Marco resistente"],
//     },
//   },
//   {
//     id: 11,
//     name: "Set de Portaretratos Familiares",
//     image: "/images/placeholder_portaretrato_familia.jpeg",
//     price: 800,
//     category: "Portaretratos",
//     featured: true,
//     date: "2023-10-15",
//     description:
//       "Conjunto de 3 portaretratos de diferentes tamaños, perfectos para crear una composición familiar en tu pared o mesa.",
//     details: {
//       material: "Madera natural",
//       size: "Varios tamaños (15x20, 20x25, 25x30 cm)",
//       extras: ["Diseño combinable", "Instalación en pared", "Acabado artesanal"],
//     },
//   },
//   {
//     id: 12,
//     name: "Cuadro Acrílico Quinceañera",
//     image: "/images/placeholder_cuadro_acrilico_quinceanera.jpeg",
//     price: 3000,
//     category: "Acrilicos",
//     featured: false,
//     date: "2023-11-10",
//     description:
//       "Cuadro de acrílico especial para fotografías familiares. Su diseño moderno y elegante resaltará tus recuerdos más preciados.",
//     details: {
//       material: "Acrílico de alta transparencia",
//       size: "20x24 pulgadas",
//       extras: ["Soporte de pared", "Impresión de alta definición", "Resistente a rayos UV"],
//     },
//   },
//   {
//     id: 13,
//     name: "Paquete Recuerdos Premium",
//     image: "/images/placeholder_paquete_recuerdos.jpeg",
//     price: 7000,
//     category: "Paquetes",
//     featured: true,
//     date: "2023-12-01",
//     description:
//       "Paquete completo que incluye un álbum premium, un cuadro de acrílico y un portaretratos a juego. La combinación perfecta para preservar tus recuerdos más valiosos.",
//     details: {
//       material: "Varios materiales premium",
//       contents: "Álbum 12x12 pulgadas, Cuadro acrílico 20x24 pulgadas, Portaretratos 8x10 pulgadas",
//       extras: ["Diseño coordinado", "Descuento por paquete", "Envío gratuito"],
//     },
//   },
//   {
//     id: 15,
//     name: "Collage Acrílico Personalizado",
//     image: "/images/placeholder_cuadro_acrilio.jpeg",
//     price: 6000,
//     category: "Acrilicos",
//     featured: true,
//     date: "2023-12-15",
//     description:
//       "Collage de fotografías en acrílico, totalmente personalizable. Una forma moderna y elegante de mostrar múltiples recuerdos en un solo cuadro.",
//     details: {
//       material: "Acrílico premium",
//       size: "28x39 pulgadas",
//       extras: ["Diseño personalizado", "Hasta 8 fotografías", "Iluminación LED opcional"],
//     },
//   },
// ]

// // Función para obtener todos los productos
// export const getAllProducts = () => products

// // Función para obtener productos destacados
// export const getFeaturedProducts = () => products.filter((product) => product.featured)

// // Función para obtener un producto por ID
// export const getProductById = (id) => products.find((product) => product.id === Number(id))

// // Función para obtener productos por categoría
// export const getProductsByCategory = (category) => {
//   if (category === "all") return products
//   return products.filter((product) => product.category === category)
// }

// // Función para ordenar productos
// export const sortProducts = (products, sortType) => {
//   const sortedProducts = [...products]

//   switch (sortType) {
//     case "price-low":
//       return sortedProducts.sort((a, b) => a.price - b.price)
//     case "price-high":
//       return sortedProducts.sort((a, b) => b.price - a.price)
//     case "newest":
//       return sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date))
//     default: // featured
//       return sortedProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
//   }
// }

// export default products
// Datos de álbumes fotográficos únicamente
const products = [
  // Álbumes 12x12
  {
    id: 1,
    name: "Álbum 12x12 - Portada y Vinil",
    image: "/images/albumportadaacrilico.png",
    price: 1800,
    category: "12x12",
    featured: true,
    date: "2023-12-01",
    description:
      "Álbum fotográfico profesional de 12x12 pulgadas con portada personalizada y acabado en vinil de alta calidad.",
    details: {
      size: "12x12 pulgadas",
      variant: "Portada y Vinil",
      pages: "20 páginas internas",
      material: "Vinil premium",
      extras: ["Portada personalizada", "Acabado mate", "Papel fotográfico premium", "Encuadernación profesional"],
    },
  },
  {
    id: 2,
    name: "Álbum 12x12 - Portada y Contraportada",
    image: "/images/albumportada.png",
    price: 2200,
    category: "12x12",
    featured: true,
    date: "2023-12-01",
    description:
      "Álbum fotográfico de 12x12 pulgadas con portada y contraportada personalizadas para máxima presentación.",
    details: {
      size: "12x12 pulgadas",
      variant: "Portada y Contraportada",
      pages: "20 páginas internas",
      material: "Cartón rígido premium",
      extras: [
        "Portada personalizada",
        "Contraportada personalizada",
        "Acabado brillante",
        "Papel fotográfico premium",
      ],
    },
  },
  {
    id: 3,
    name: "Álbum 12x12 - Guestbook",
    image: "/images/guessbook.png",
    price: 2000,
    category: "12x12",
    featured: true,
    date: "2023-12-01",
    description: "Álbum guestbook de 12x12 pulgadas, perfecto para eventos especiales con espacio para dedicatorias.",
    details: {
      size: "12x12 pulgadas",
      variant: "Guestbook",
      pages: "30 páginas internas",
      material: "Papel especial para escritura",
      extras: ["Páginas para dedicatorias", "Portada personalizada", "Separadores temáticos", "Acabado elegante"],
    },
  },

  // Álbumes 10x10
  {
    id: 4,
    name: "Álbum 10x10 - Portada y Vinil",
    image: "/images/albumportadayvinil.png",
    price: 1500,
    category: "10x10",
    featured: true,
    date: "2023-12-01",
    description: "Álbum compacto de 10x10 pulgadas con portada personalizada y acabado en vinil.",
    details: {
      size: "10x10 pulgadas",
      variant: "Portada y Vinil",
      pages: "16 páginas internas",
      material: "Vinil premium",
      extras: ["Portada personalizada", "Acabado mate", "Papel fotográfico", "Diseño compacto"],
    },
  },
  {
    id: 5,
    name: "Álbum 10x10 - Portada y Contraportada",
    image: "/images/albumportadacompleta.png",
    price: 1800,
    category: "10x10",
    featured: false,
    date: "2023-12-01",
    description: "Álbum de 10x10 pulgadas con portada y contraportada personalizadas.",
    details: {
      size: "10x10 pulgadas",
      variant: "Portada y Contraportada",
      pages: "16 páginas internas",
      material: "Cartón rígido",
      extras: ["Portada personalizada", "Contraportada personalizada", "Acabado brillante", "Papel premium"],
    },
  },
  {
    id: 6,
    name: "Álbum 10x10 - Guestbook",
    image: "/images/guessbook2.png",
    price: 1650,
    category: "10x10",
    featured: false,
    date: "2023-12-01",
    description: "Guestbook compacto de 10x10 pulgadas para eventos íntimos.",
    details: {
      size: "10x10 pulgadas",
      variant: "Guestbook",
      pages: "24 páginas internas",
      material: "Papel especial",
      extras: ["Páginas para dedicatorias", "Portada personalizada", "Acabado elegante", "Tamaño compacto"],
    },
  },

  // Álbumes 8x12
  {
    id: 7,
    name: "Álbum 8x12 - Portada y Vinil",
    image: "/images/albumaama.png",
    price: 1400,
    category: "8x12",
    featured: false,
    date: "2023-12-01",
    description: "Álbum rectangular de 8x12 pulgadas con portada personalizada y vinil.",
    details: {
      size: "8x12 pulgadas",
      variant: "Portada y Vinil",
      pages: "16 páginas internas",
      material: "Vinil premium",
      extras: ["Formato rectangular", "Portada personalizada", "Acabado mate", "Papel fotográfico"],
    },
  },
  {
    id: 8,
    name: "Álbum 8x12 - Portada y Contraportada",
    image: "/images/albumboda.png",
    price: 1700,
    category: "8x12",
    featured: false,
    date: "2023-12-01",
    description: "Álbum rectangular de 8x12 pulgadas con portada y contraportada.",
    details: {
      size: "8x12 pulgadas",
      variant: "Portada y Contraportada",
      pages: "16 páginas internas",
      material: "Cartón rígido",
      extras: ["Formato rectangular", "Portada personalizada", "Contraportada personalizada", "Acabado brillante"],
    },
  },
  {
    id: 10,
    name: "Álbum 11x14 - Portada y Contraportada",
    image: "/images/albumrosa.png",
    price: 2600,
    category: "11x14",
    featured: true,
    date: "2023-12-01",
    description: "Álbum premium de 11x14 pulgadas con portada y contraportada personalizadas.",
    details: {
      size: "11x14 pulgadas",
      variant: "Portada y Contraportada",
      pages: "20 páginas internas",
      material: "Cartón rígido premium",
      extras: ["Formato grande", "Portada personalizada", "Contraportada personalizada", "Acabado brillante"],
    },
  },

  {
    id: 11,
    name: "Álbum 12x16 - Portada y Contraportada",
    image: "/images/albumglobosrosa.png",
    price: 2900,
    category: "12x16",
    featured: true,
    date: "2023-12-01",
    description: "Álbum panorámico premium de 12x16 pulgadas con portada y contraportada.",
    details: {
      size: "12x16 pulgadas",
      variant: "Portada y Contraportada",
      pages: "20 páginas internas",
      material: "Cartón rígido de lujo",
      extras: ["Formato panorámico", "Portada personalizada", "Contraportada personalizada", "Acabado brillante"],
    },
  },
]

// Función para obtener todos los productos
export const getAllProducts = () => products

// Función para obtener productos destacados
export const getFeaturedProducts = () => products.filter((product) => product.featured)

// Función para obtener un producto por ID
export const getProductById = (id) => products.find((product) => product.id === Number(id))

// Función para obtener productos por categoría (por tamaño)
export const getProductsByCategory = (category) => {
  if (category === "all") return products
  return products.filter((product) => product.category === category)
}

// Función para ordenar productos
export const sortProducts = (products, sortType) => {
  const sortedProducts = [...products]

  switch (sortType) {
    case "price-low":
      return sortedProducts.sort((a, b) => a.price - b.price)
    case "price-high":
      return sortedProducts.sort((a, b) => b.price - a.price)
    case "newest":
      return sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date))
    default: // featured
      return sortedProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }
}

export default products
