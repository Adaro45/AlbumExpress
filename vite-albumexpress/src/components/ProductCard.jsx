"use client"

import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "./styles/ProductCard.css"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product, 1)
  }

  // Función para obtener el nombre de la categoría en español
  const getCategoryName = (category) => {
    switch (category) {
      case "Bodas":
        return "Boda"
      case "Quinceañera":
        return "Quinceañera"
      case "Familiar":
        return "Familiar"
      case "Profesional":
        return "Profesional"
      case "Acrílico":
        return "Acrílico"
      case "Portaretratos":
        return "Portaretratos"
      case "Paquetes":
        return "Paquete"
      case "Impresión":
        return "Impresión"
      case "Accesorios":
        return "Accesorio"
      default:
        return category
    }
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image || "/placeholder.svg"} alt={product.name} />
        {product.featured && <div className="product-badge"></div>}
        <div className="product-category">{getCategoryName(product.category)}</div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)} MXN</p>
        <div className="product-actions">
          <Link to={`/productos/${product.id}`} className="btn btn-primary">
            Ver Detalles
          </Link>
          <button className="btn btn-outline" onClick={handleAddToCart}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
