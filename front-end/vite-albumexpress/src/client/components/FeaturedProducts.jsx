"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { clientProductApi } from "../services/api"
import "./styles/FeaturedProducts.css"

const FeaturedProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true)
        const response = await clientProductApi.getFeatured()
        setProducts(response.data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching featured products:", err)
        setError("No se pudieron cargar los productos destacados")
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  if (loading) {
    return (
      <section className="featured-section section">
        <div className="container">
          <h2 className="section-title">Nuestros Productos Destacados</h2>
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Cargando productos destacados...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="featured-section section">
        <div className="container">
          <h2 className="section-title">Nuestros Productos Destacados</h2>
          <div className="error-container">
            <p>{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="featured-section section">
      <div className="container">
        <h2 className="section-title">Nuestros Productos Destacados</h2>
        <p className="section-subtitle text-center">Descubre nuestra selección de álbumes de alta calidad</p>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image || "/placeholder.svg"} alt={product.name} />
                <div className="product-category">{product.category_name || "Álbum"}</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">${Number.parseFloat(product.price).toFixed(2)} MXN</p>
                <div className="product-actions">
                  <Link to={`/productos/${product.slug}`} className="btn btn-primary">
                    Ver Detalles
                  </Link>
                  <button className="btn btn-outline">Agregar</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/productos" className="btn btn-outline">
            Ver Todos los Productos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts

