"use client"

import { NavLink, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "../styles/Sidebar.css"

const Sidebar = ({ isOpen }) => {
  const { logout } = useAuth()
  const location = useLocation()

  // Función para verificar si una ruta está activa
  const isActive = (path) => {
    if (path === "/admin" && location.pathname === "/admin") {
      return true
    }
    if (path !== "/admin" && location.pathname.startsWith(path)) {
      return true
    }
    return false
  }

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2>AlbumExpress</h2>
        <p>Panel de Administración</p>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/admin" className={isActive("/admin") ? "active" : ""}>
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/products" className={isActive("/admin/products") ? "active" : ""}>
              <i className="fas fa-box"></i>
              <span>Productos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/categories" className={isActive("/admin/categories") ? "active" : ""}>
              <i className="fas fa-tags"></i>
              <span>Categorías</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button onClick={logout} className="logout-btn">
          <i className="fas fa-sign-out-alt"></i>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar

