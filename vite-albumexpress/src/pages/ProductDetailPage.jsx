"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getProductById } from "../data/products"
import "./styles/ProductDetailPage.css"

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Scroll al inicio cuando se carga la página
    window.scrollTo(0, 0)

    // Simular carga de datos
    setLoading(true)

    // Buscar el producto por ID
    const foundProduct = getProductById(id)

    if (foundProduct) {
      setProduct(foundProduct)
    }

    setLoading(false)
  }, [id])

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
            <div className="product-detail-description">
              <p>{product.description}</p>
            </div>

            <div className="product-detail-specs">
              <h3>Especificaciones</h3>
              <ul>
                <li>
                  <strong>Tamaño:</strong> {product.details.size}
                </li>
                <li>
                  <strong>Variante:</strong> {product.details.variant}
                </li>
                <li>
                  <strong>Páginas:</strong> {product.details.pages}
                </li>
                <li>
                  <strong>Material:</strong> {product.details.material}
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
              <a href="tel:+5212345678" className="btn btn-primary btn-lg">
                <i className="fas fa-phone"></i> Cotizar por Teléfono
              </a>
              <a
                href="https://wa.me/5212345678"
                className="btn btn-secondary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>

            <div className="product-detail-meta">
              <p>
                <strong>Categoría:</strong> {product.category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetailPage
