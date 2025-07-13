import "./styles/CTASection.css"

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>¿Listo para crear tu álbum fotográfico?</h2>
          <p>
            Contáctanos directamente para cotizar tu álbum. Te ayudamos a elegir el tamaño y variante perfecta para tus
            fotografías.
          </p>
          <div className="cta-buttons">
            <a href="tel:+525619241281" className="btn btn-primary">
              <i className="fas fa-phone"></i> Llamar Ahora
            </a>
            <a href="https://wa.me/+525619241281" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="mailto:info@albumexpress.mx" className="btn btn-secondary">
              <i className="fas fa-envelope"></i> Email
            </a>
          </div>
          <div className="contact-info-quick">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>
                <strong>Teléfono:</strong> +52 (56) 1924 1281
              </span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>
                <strong>Email:</strong> info@albumexpress.mx
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
