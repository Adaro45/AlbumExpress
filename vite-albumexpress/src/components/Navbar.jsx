"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import "./styles/Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo || "/placeholder.svg"} alt="AlbumExpress Logo" />
          <span>AlbumExpress</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos" onClick={() => setIsMenuOpen(false)}>
                Productos
              </Link>
            </li>
            <li>
              <Link to="/nosotros" onClick={() => setIsMenuOpen(false)}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-actions">
          <Link to="/carrito" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <button className="btn btn-primary">Mi Cuenta</button>
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

