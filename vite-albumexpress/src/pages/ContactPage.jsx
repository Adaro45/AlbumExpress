"use client"

import { useEffect } from "react"
import "./styles/ContactPage.css"

const ContactPage = () => {
  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contáctanos</h1>
          <p>Estamos listos para ayudarte a crear el álbum fotográfico perfecto</p>
        </div>
      </div>

      <section className="contact-section section">
        <div className="container contac-grid-container">
          <div className="contact-grid">
            {/* Información de contacto principal */}
            <div className="contact-card main-contact">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Llámanos Directamente</h3>
              <p>Habla con nuestros especialistas para cotizar tu álbum</p>
              <div className="contact-details">
                <p>
                  <strong>+52 (56) 1924 1281</strong>
                </p>
              </div>
              <a href="tel:+525619241281" className="btn btn-primary">
                <i className="fas fa-phone"></i> Llamar Ahora
              </a>
            </div>

            {/* WhatsApp */}
            <div className="contact-card whatsapp-contact">
              <div className="contact-icon whatsapp">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3>WhatsApp</h3>
              <p>Envíanos un mensaje y te respondemos al instante</p>
              <div className="contact-details">
                <p>
                  <strong>+52 (56) 1924 1281</strong>
                </p>
                <p>Disponible 24/7</p>
              </div>
              <a href="https://wa.me/5619241281" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> Abrir WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="contact-card email-contact">
              <div className="contact-icon email">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>Envíanos tu consulta y te respondemos en menos de 24 horas</p>
              <div className="contact-details">
                <p>
                  <strong>info@albumexpress.mx</strong>
                </p>
              </div>
              <a href="mailto:info@albumexpress.mx" className="btn btn-secondary">
                <i className="fas fa-envelope"></i> Enviar Email
              </a>
            </div>

            {/* Ubicación */}
            <div className="contact-card location-contact">
              <div className="contact-icon location">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Nuestra Ubicación</h3>
              <p>Visítanos en nuestro showroom</p>
              <div className="contact-details">
                <p>
                  <strong>Calle Donceles 90</strong>
                </p>
                <p>Cuauhtémoc, Ciudad de México</p>
                <p>CP 06020</p>
              </div>
              <a href="https://maps.app.goo.gl/rBF3oqXbZN4ir4y4A" className="btn btn-earth" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-map-marker-alt"></i> Ver en Mapa
              </a>
            </div>
          </div>

          {/* Horarios */}
          <div className="schedule-section">
            <h2>Horarios de Atención</h2>
            <div className="schedule-grid">
              <div className="schedule-item">
                <h4>Lunes a Viernes</h4>
                <p>10:00 AM - 7:00 PM</p>
              </div>
              <div className="schedule-item">
                <h4>Sábados</h4>
                <p>10:00 AM - 4:00 PM</p>
              </div>
              <div className="schedule-item">
                <h4>Domingos</h4>
                <p>Cerrado</p>
              </div>
            </div>
          </div>

          {/* Acciones rápidas */}
          <div className="quick-actions">
            <h2>Acciones Rápidas</h2>
            <div className="actions-grid">
              <a href="tel:+525619241281" className="action-btn phone-action">
                <i className="fas fa-phone"></i>
                <span>Llamada Directa</span>
              </a>
              <a
                href="https://wa.me/5619241281"
                className="action-btn whatsapp-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
                <span>Chat WhatsApp</span>
              </a>
              <a href="mailto:info@albumexpress.mx" className="action-btn email-action">
                <i className="fas fa-envelope"></i>
                <span>Enviar Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7524.910201891927!2d-99.1285931!3d19.4359357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9328b5b2fdf%3A0x190e4857bda7b9d0!2sDonceles%2090%2C%20Centro%20Hist%C3%B3rico%20de%20la%20Cdad.%20de%20M%C3%A9xico%2C%20Centro%2C%20Cuauht%C3%A9moc%2C%2006020%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1743230458106!5m2!1ses!2smx"
          width="100%"
          height="400px"
          style={{ border: 0, display: "block", margin: "0 auto" }}
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  )
}

export default ContactPage
