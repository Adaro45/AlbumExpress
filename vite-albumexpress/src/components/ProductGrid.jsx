"use client"

import { useState, useEffect } from "react"
import "./styles/ProductGrid.css"

// Datos de ejemplo para productos
const allProducts = [
  {
    id: 1,
    name: "Álbum Premium Boda",
    image: "/images/place-holder-boda-premium.jpg",
    price: 1299,
    category: "wedding",
    featured: true,
    date: "2023-05-15",
  },
  {
    id: 2,
    name: "Álbum Quinceañera Deluxe",
    image: "./images/place-holder-quinceanera-deluxe.jpg",
    price: 999,
    category: "quinceanera",
    featured: true,
    date: "2023-06-20",
  },
  {
    id: 3,
    name: "Álbum Familiar Rústico",
    image: "/images/place-holder-familiar-rustico.jpg",
    price: 899,
    category: "family",
    featured: false,
    date: "2023-04-10",
  },
  {
    id: 4,
    name: "Álbum Acrílico Profesional",
    image: "/images/place-holder-boda-acrilico.jpg",
    price: 1499,
    category: "professional",
    featured: true,
    date: "2023-07-05",
  },
  {
    id: 5,
    name: "Álbum Boda Vintage",
    image: "/images/place-holder-boda-vintage.jpg",
    price: 1199,
    category: "wedding",
    featured: false,
    date: "2023-03-22",
  },
  {
    id: 6,
    name: "Álbum Quinceañera Clásico",
    image: "/images/place-holder-quinceanera-clasico.jpg",
    price: 899,
    category: "quinceanera",
    featured: false,
    date: "2023-02-18",
  },
  {
    id: 7,
    name: "Caja para Álbum Premium",
    image: "./images/place-holder-boda-caja.jpg",
    price: 499,
    category: "accessories",
    featured: false,
    date: "2023-01-30",
  },
  {
    id: 8,
    name: "Álbum Profesional Minimalista",
    image: "/images/place-holder-profesional-minimalista.jpg",
    price: 1299,
    category: "professional",
    featured: true,
    date: "2023-08-12",
  },
]

const ProductGrid = ({ activeCategory, activeSort }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Filtrar productos por categoría
    const filteredProducts =
      activeCategory === "all" ? [...allProducts] : allProducts.filter((product) => product.category === activeCategory)

    // Ordenar productos
    switch (activeSort) {
      case "price-low":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "newest":
        filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date))
        break
      default: // featured
        filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    setProducts(filteredProducts)
  }, [activeCategory, activeSort])

  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image || "/placeholder.svg"} alt={product.name} />
              {product.featured && <div className="product-badge">Destacado</div>}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)} MXN</p>
              <div className="product-actions">
                <button className="btn btn-primary">Ver Detalles</button>
                <button className="btn btn-outline">Agregar</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="no-products">
          <p>No se encontraron productos en esta categoría.</p>
        </div>
      )}
    </div>
  )
}

export default ProductGrid

