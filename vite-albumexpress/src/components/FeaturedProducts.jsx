import { Link } from "react-router-dom"
import { getFeaturedProducts } from "../data/products"
import "./styles/FeaturedProducts.css"

const FeaturedProducts = () => {
  const products = getFeaturedProducts()

  return (
    <section className="featured-section section">
      <div className="container">
        <h2 className="section-title">Nuestros Álbumes Fotográficos</h2>
        <p className="section-subtitle text-center">
          Álbumes profesionales en 5 tamaños diferentes con 3 variantes disponibles
        </p>
        <div className="size-info">
          <div className="size-badges">
            <span className="size-badge">12x12"</span>
            <span className="size-badge">10x10"</span>
            <span className="size-badge">8x12"</span>
            <span className="size-badge">11x14"</span>
            <span className="size-badge">12x16"</span>
          </div>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image || "/placeholder.svg"} alt={product.name} />
                <div className="product-category">{product.category}</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-variant">{product.details.variant}</p>
                <div className="product-actions">
                  <Link to={`/productos/${product.id}`} className="btn btn-primary">
                    Ver Detalles
                  </Link>
                  <a href="tel:+5212345678" className="btn btn-outline">
                    Cotizar
                  </a>
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
