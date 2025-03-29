import { Link } from "react-router-dom"
import "./styles/FeaturedProducts.css"

const products = [
  {
    id: 1,
    name: "Álbum Premium Boda",
    image: "./images/place-holder-boda-premium.jpg",
    price: 1299,
    category: "Bodas",
  },
  {
    id: 2,
    name: "Álbum Quinceañera Deluxe",
    image: "./images/place-holder-quinceanera-deluxe.jpg",
    price: 999,
    category: "Quinceañeras",
  },
  {
    id: 3,
    name: "Álbum Familiar Rústico",
    image: "./images/place-holder-familiar-rustico.jpg",
    price: 899,
    category: "Familias",
  },
  {
    id: 4,
    name: "Álbum Acrílico Profesional",
    image: "./images/place-holder-boda-acrilico.jpg",
    price: 1499,
    category: "Profesional",
  },
]

const FeaturedProducts = () => {
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
                  <button className="btn btn-primary">Ver Detalles</button>
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

