import { Link } from "react-router-dom"
import "./styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
            <img src="/images/Isotipo.png" alt="AlbumExpress Logo" />
              <img src="/images/letrablanca.png" alt="AlbumExpress Logo" />
            </Link>
            <p>Preservando tus recuerdos con estilo y calidad desde 2010.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Información</h3>
              <ul>
                <li>
                  <Link to="/nosotros">Acerca de Nosotros</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Productos</h3>
              <ul>
                <li>
                  <Link to="/productos/">Álbumes de Boda</Link>
                </li>
                <li>
                  <Link to="/productos/">Álbumes de Quinceañera</Link>
                </li>
                <li>
                  <Link to="/productos/">Álbumes Familiares</Link>
                </li>
                <li>
                  <Link to="/productos/">Álbumes Profesionales</Link>
                </li>
                <li>
                  <Link to="/productos/">Accesorios</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contacto</h3>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i> Donceles 90, Cuauhtémoc, 06020 Ciudad de México, CDMX
                </li>
                <li>
                  <i className="fas fa-phone"></i> +52 (56) 1924 1281
                </li>
                <li>
                  <i className="fas fa-envelope"></i> info@albumexpress.mx
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* footer-bottom contendrá el texto &copy; y el texto grande */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AlbumExpress. Todos los derechos reservados.</p>
          {/* Texto grande pegado al fondo */}
          <img src="/images/Brandbottom.png" alt="AlbumExpress Logo" className="footer-brand"></img>
        </div>
      </div>
    </footer>
  )
}

export default Footer
