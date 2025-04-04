import { Link } from "react-router-dom"
import { getFeaturedProducts } from "../data/products"
import "./styles/FeaturedProducts.css"

const FeaturedProducts = () => {
  const products = getFeaturedProducts()

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
                <div className="product-category">{product.category}</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)} MXN</p>
                <div className="product-actions">
                  <Link to={`/productos/${product.id}`} className="btn btn-primary">
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

