"use client";

import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import CTASection from "../components/CTASection";
import "./styles/ContactPage.css";

const ContactPage = () => {
  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contáctanos</h1>
          <p>
            Estamos aquí para ayudarte a crear el álbum perfecto para tus
            momentos especiales
          </p>
        </div>
      </div>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-container">
            <ContactInfo />
            <ContactForm />
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

      <CTASection />
    </main>
  );
};

export default ContactPage;
