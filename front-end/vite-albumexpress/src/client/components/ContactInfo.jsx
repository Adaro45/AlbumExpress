import "./styles/ContactInfo.css"

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Información de Contacto</h2>
      <p>Estamos disponibles para atenderte de lunes a viernes de 9:00 a 18:00 horas.</p>

      <div className="info-items">
        <div className="info-item">
          <div className="info-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="info-content">
            <h3>Dirección</h3>
            <p>
              Av. Principal #123, Col. Centro
              <br />
              Ciudad de México, CP 12345
            </p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <i className="fas fa-phone"></i>
          </div>
          <div className="info-content">
            <h3>Teléfono</h3>
            <p>+52 (55) 1234 5678</p>
            <p>+52 (55) 8765 4321</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="info-content">
            <h3>Email</h3>
            <p>info@albumexpress.com</p>
            <p>ventas@albumexpress.com</p>
          </div>
        </div>
      </div>

      <div className="social-links">
        <h3>Síguenos</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

