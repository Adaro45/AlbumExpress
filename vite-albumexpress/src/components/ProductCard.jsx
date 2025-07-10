"use client"

import { Link } from "react-router-dom"
import "./styles/ProductCard.css"

const ProductCard = ({ product }) => {
  // Función para obtener el nombre del tamaño
  const getSizeName = (category) => {
    switch (category) {
      case "12x12":
        return "12x12 pulgadas"
      case "10x10":
        return "10x10 pulgadas"
      case "8x12":
        return "8x12 pulgadas"
      case "11x14":
        return "11x14 pulgadas"
      case "12x16":
        return "12x16 pulgadas"
      default:
        return category
    }
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image || "/placeholder.svg"} alt={product.name} />
        {product.featured && <div className="product-badge">Destacado</div>}
        <div className="product-category">{getSizeName(product.category)}</div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-variant">{product.details.variant}</p>
        <p className="product-price">${product.price.toFixed(2)} MXN</p>
        <div className="product-actions">
          <Link to={`/productos/${product.id}`} className="btn btn-primary">
            Ver Detalles
          </Link>
          <a href="tel:+5212345678" className="btn btn-secondary">
            Cotizar
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
