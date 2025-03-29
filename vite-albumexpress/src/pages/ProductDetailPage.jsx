"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "./styles/ProductDetailPage.css"

// Datos de ejemplo para productos (importados de ProductGrid)
const allProducts = [
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
    image: "./images/place-holder-quinceanera-deluxe.jpg",
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
    image: "./images/place-holder-boda-caja.jpg",
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

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()

  useEffect(() => {
    // Scroll al inicio cuando se carga la página
    window.scrollTo(0, 0)

    // Simular carga de datos
    setLoading(true)

    // Buscar el producto por ID
    const foundProduct = allProducts.find((p) => p.id === Number.parseInt(id))

    if (foundProduct) {
      setProduct(foundProduct)
    }

    setLoading(false)
  }, [id])

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity)
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando producto...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h2>Producto no encontrado</h2>
          <p>Lo sentimos, el producto que buscas no existe o ha sido eliminado.</p>
          <Link to="/productos" className="btn btn-primary">
            Ver todos los productos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Inicio</Link> / <Link to="/productos">Productos</Link> / <span>{product.name}</span>
        </div>

        <div className="product-detail-container">
          <div className="product-detail-image">
            <img src={product.image || "/placeholder.svg"} alt={product.name} />
          </div>

          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="product-detail-price">${product.price.toFixed(2)} MXN</p>
            <div className="product-detail-description">
              <p>{product.description}</p>
            </div>

            <div className="product-detail-specs">
              <h3>Especificaciones</h3>
              <ul>
                <li>
                  <strong>Material:</strong> {product.details.material}
                </li>
                {product.details.pages && (
                  <li>
                    <strong>Páginas:</strong> {product.details.pages}
                  </li>
                )}
                <li>
                  <strong>Tamaño:</strong> {product.details.size}
                </li>
              </ul>
            </div>

            <div className="product-detail-extras">
              <h3>Características</h3>
              <ul>
                {product.details.extras.map((extra, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i> {extra}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-detail-actions">
              <div className="quantity-selector">
                <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="quantity-btn">
                  <i className="fas fa-minus"></i>
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="quantity-input"
                />
                <button onClick={() => setQuantity(quantity + 1)} className="quantity-btn">
                  <i className="fas fa-plus"></i>
                </button>
              </div>

              <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
                <i className="fas fa-shopping-cart"></i> Agregar al Carrito
              </button>
            </div>

            <div className="product-detail-meta">
              <p>
                <strong>Categoría:</strong>{" "}
                {product.category === "wedding"
                  ? "Bodas"
                  : product.category === "quinceanera"
                    ? "Quinceañeras"
                    : product.category === "family"
                      ? "Familias"
                      : product.category === "professional"
                        ? "Profesional"
                        : "Accesorios"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetailPage

