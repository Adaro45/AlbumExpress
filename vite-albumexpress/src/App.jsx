"use client"

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import { CartProvider } from "./context/CartContext"
import "./App.css"

// Componente para restaurar el scroll en cada cambio de ruta
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    // Asegurar que el scroll esté habilitado
    document.body.style.overflow = ""
  }, [pathname])

  return null
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/productos/:id" element={<ProductDetailPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/carrito" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App

