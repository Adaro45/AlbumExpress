"use client"

import { NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "../styles/Sidebar.css"

const Sidebar = ({ isOpen }) => {
  const { logout } = useAuth()

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2>AlbumExpress</h2>
        <p>Panel de Administración</p>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
              <i className="fas fa-box"></i>
              <span>Productos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" className={({ isActive }) => (isActive ? "active" : "")}>
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

