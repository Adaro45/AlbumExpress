"use client"

import { useAuth } from "../context/AuthContext"
import "../styles/Navbar.css"

const Navbar = ({ toggleSidebar }) => {
  const { user } = useAuth()

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="toggle-sidebar" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div className="navbar-right">
        <div className="user-info">
          <span>{user?.username || "Admin"}</span>
          <img src="/placeholder.svg" alt="User Avatar" className="avatar" />
        </div>
      </div>
    </header>
  )
}

export default Navbar

