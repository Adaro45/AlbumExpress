import { Link } from "react-router-dom"
import "./styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img src="/images/logo.png" alt="AlbumExpress Logo" />
              <span>AlbumExpress</span>
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
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link>
                </li>
                <li>
                  <Link to="/politicas">Políticas de Privacidad</Link>
                </li>
                <li>
                  <Link to="/terminos">Términos y Condiciones</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Productos</h3>
              <ul>
                <li>
                  <Link to="/productos/bodas">Álbumes de Boda</Link>
                </li>
                <li>
                  <Link to="/productos/quinceaneras">Álbumes de Quinceañera</Link>
                </li>
                <li>
                  <Link to="/productos/familias">Álbumes Familiares</Link>
                </li>
                <li>
                  <Link to="/productos/profesionales">Álbumes Profesionales</Link>
                </li>
                <li>
                  <Link to="/productos/accesorios">Accesorios</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contacto</h3>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i> Av. Principal #123, Ciudad
                </li>
                <li>
                  <i className="fas fa-phone"></i> +52 123 456 7890
                </li>
                <li>
                  <i className="fas fa-envelope"></i> info@albumexpress.com
                </li>
              </ul>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AlbumExpress. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

