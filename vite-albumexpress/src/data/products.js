// Datos estandarizados para todos los productos
const products = [
    {
      id: 1,
      name: "Álbum Premium Boda",
      image: "/images/place-holder-boda-premium.jpg",
      price: 1299,
      category: "wedding",
      featured: true,
      date: "2023-05-15",
      description:
        "Álbum de lujo para bodas con cubierta de cuero genuino y páginas de alta calidad. Incluye caja protectora a juego.",
      details: {
        material: "Cuero genuino",
        pages: 30,
        size: "30x30 cm",
        extras: ["Caja protectora", "Grabado personalizado", "Papel fotográfico premium"],
      },
    },
    {
      id: 2,
      name: "Álbum Quinceañera Deluxe",
      image: "/images/place-holder-quinceanera-deluxe.jpg",
      price: 999,
      category: "quinceanera",
      featured: true,
      date: "2023-06-20",
      description:
        "Álbum especial para quinceañeras con detalles en rosa y dorado. Perfecto para preservar los recuerdos de este día tan especial.",
      details: {
        material: "Eco-cuero",
        pages: 25,
        size: "25x25 cm",
        extras: ["Detalles en dorado", "Páginas temáticas", "Espacio para dedicatorias"],
      },
    },
    {
      id: 3,
      name: "Álbum Familiar Rústico",
      image: "/images/place-holder-familiar-rustico.jpg",
      price: 899,
      category: "family",
      featured: false,
      date: "2023-04-10",
      description:
        "Álbum con estilo rústico ideal para fotos familiares. Diseño cálido y acogedor que realza tus recuerdos más preciados.",
      details: {
        material: "Madera y tela",
        pages: 20,
        size: "28x22 cm",
        extras: ["Acabado rústico", "Cordón decorativo", "Papel texturizado"],
      },
    },
    {
      id: 4,
      name: "Álbum Acrílico Profesional",
      image: "/images/place-holder-boda-acrilico.jpg",
      price: 1499,
      category: "professional",
      featured: true,
      date: "2023-07-05",
      description:
        "Álbum con portada de acrílico de alta transparencia, ideal para fotógrafos profesionales que buscan un acabado moderno y elegante.",
      details: {
        material: "Acrílico y aluminio",
        pages: 30,
        size: "30x30 cm",
        extras: ["Portada personalizable", "Acabado brillante", "Esquinas reforzadas"],
      },
    },
    {
      id: 5,
      name: "Álbum Boda Vintage",
      image: "/images/place-holder-boda-vintage.jpg",
      price: 1199,
      category: "wedding",
      featured: false,
      date: "2023-03-22",
      description:
        "Álbum con estilo vintage para bodas con un toque romántico y nostálgico. Perfecto para parejas que buscan un estilo clásico.",
      details: {
        material: "Tela y encaje",
        pages: 25,
        size: "28x28 cm",
        extras: ["Detalles en encaje", "Cintas decorativas", "Papel envejecido"],
      },
    },
    {
      id: 6,
      name: "Álbum Quinceañera Clásico",
      image: "/images/place-holder-quinceanera-clasico.jpg",
      price: 899,
      category: "quinceanera",
      featured: false,
      date: "2023-02-18",
      description:
        "Álbum clásico para quinceañeras con un diseño elegante y atemporal. La opción perfecta para un recuerdo duradero.",
      details: {
        material: "Tela satinada",
        pages: 20,
        size: "25x25 cm",
        extras: ["Detalles en plata", "Espacio para dedicatorias", "Diseño personalizable"],
      },
    },
    {
      id: 7,
      name: "Caja para Álbum Premium",
      image: "/images/place-holder-boda-caja.jpg",
      price: 499,
      category: "accessories",
      featured: false,
      date: "2023-01-30",
      description:
        "Caja protectora de lujo para álbumes, fabricada con materiales de alta calidad para preservar tus recuerdos por más tiempo.",
      details: {
        material: "Cartón rígido y tela",
        size: "Adaptable a álbumes de 30x30 cm",
        extras: ["Interior acolchado", "Cierre magnético", "Personalizable"],
      },
    },
    {
      id: 8,
      name: "Álbum Profesional Minimalista",
      image: "/images/place-holder-profesional-minimalista.jpg",
      price: 1299,
      category: "professional",
      featured: true,
      date: "2023-08-12",
      description:
        "Álbum con diseño minimalista para fotógrafos profesionales. Elegante, sobrio y con acabados de primera calidad.",
      details: {
        material: "Cuero sintético",
        pages: 30,
        size: "30x30 cm",
        extras: ["Acabado mate", "Esquinas reforzadas", "Papel fotográfico premium"],
      },
    },
  ]
  
  // Función para obtener todos los productos
  export const getAllProducts = () => products
  
  // Función para obtener productos destacados
  export const getFeaturedProducts = () => products.filter((product) => product.featured)
  
  // Función para obtener un producto por ID
  export const getProductById = (id) => products.find((product) => product.id === Number(id))
  
  // Función para obtener productos por categoría
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
  
  