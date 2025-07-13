// Datos de álbumes fotográficos únicamente
const products = [
  // Álbumes 12x12
  {
    id: 1,
    name: "Álbum 12x12 - Portada y Vinil",
    image: "/images/albumportadaacrilico.png",
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
    case "newest":
      return sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date))
    default: // featured
      return sortedProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }
}

export default products
