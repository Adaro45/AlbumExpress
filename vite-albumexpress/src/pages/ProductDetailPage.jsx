"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { getProductById } from "../data/products"
import "./styles/ProductDetailPage.css"

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
    const foundProduct = getProductById(id)

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

