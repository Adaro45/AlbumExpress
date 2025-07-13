"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./styles/Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/images/Logo.png" alt="AlbumExpress Logo" />
          </Link>

          <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
            <ul className="navbar-links">
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/">
                  <i className="fas fa-home"></i>
                  <span>Inicio</span>
                </Link>
              </li>
              <li className={location.pathname.includes("/productos") ? "active" : ""}>
                <Link to="/productos">
                  <i className="fas fa-book"></i>
                  <span>Álbumes</span>
                </Link>
              </li>
              <li className={location.pathname === "/nosotros" ? "active" : ""}>
                <Link to="/nosotros">
                  <i className="fas fa-users"></i>
                  <span>Nosotros</span>
                </Link>
              </li>
              <li className={location.pathname === "/contacto" ? "active" : ""}>
                <Link to="/contacto">
                  <i className="fas fa-phone"></i>
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>

            {/* Botones de contacto en menú móvil */}
            <div className="mobile-contact-buttons">
              <a href="tel:+5212345678" className="mobile-contact-btn phone">
                <i className="fas fa-phone"></i>
                <span>Llamar Ahora</span>
              </a>
              <a
                href="https://wa.me/5212345678"
                className="mobile-contact-btn whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="navbar-actions">
            <a href="tel:+5212345678" className="contact-phone">
              <i className="fas fa-phone"></i>
              <span className="phone-text">Llamar</span>
            </a>
            <a href="https://wa.me/5212345678" className="contact-whatsapp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
              <span className="whatsapp-text">WhatsApp</span>
            </a>
          </div>

          <div className={`mobile-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Navegación rápida flotante */}
      <div className="quick-nav">
        <a href="tel:+5212345678" className="quick-nav-btn quick-nav-phone" title="Llamar">
          <i className="fas fa-phone"></i>
        </a>
        <a
          href="https://wa.me/5212345678"
          className="quick-nav-btn quick-nav-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </>
  )
}

export default Navbar
