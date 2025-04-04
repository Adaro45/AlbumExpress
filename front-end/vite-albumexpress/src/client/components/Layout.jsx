"use client"

import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

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

const Layout = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout

