import { Link } from "react-router-dom"
import "./styles/CTASection.css"

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>¿Listo para crear tu álbum perfecto?</h2>
          <p>
            Contáctanos hoy mismo y te ayudaremos a preservar tus recuerdos más preciados con nuestros álbumes de alta
            calidad.
          </p>
          <div className="cta-buttons">
            <Link to="/productos" className="btn btn-primary">
              Ver Productos
            </Link>
            <Link to="/contacto" className="btn btn-outline">
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection

