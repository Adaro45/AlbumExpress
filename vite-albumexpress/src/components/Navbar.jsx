"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useCart } from "../context/CartContext"
import logo from "../assets/images/logo.png"
import "./styles/Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cartCount } = useCart()
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
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo || "/placeholder.svg"} alt="AlbumExpress Logo" />
          <span>AlbumExpress</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={location.pathname.includes("/productos") ? "active" : ""}>
              <Link to="/productos">Productos</Link>
            </li>
            <li className={location.pathname === "/nosotros" ? "active" : ""}>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li className={location.pathname === "/contacto" ? "active" : ""}>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-actions">
          <Link to="/carrito" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <Link to="/checkout" className="btn btn-primary">
            Mi Cuenta
          </Link>
        </div>

        <div className="mobile-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

