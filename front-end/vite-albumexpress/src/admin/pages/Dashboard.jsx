"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { productApi, categoryApi } from "../services/api"
import "../styles/Dashboard.css"

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    featuredProducts: 0,
    homepageProducts: 0,
    landingProducts: 0,
    categories: 0,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [products, featured, homepage, landing, categories] = await Promise.all([
          productApi.getAll(),
          productApi.getFeatured(),
          productApi.getHomepage(),
          productApi.getLanding(),
          categoryApi.getAll(),
        ])

        setStats({
          totalProducts: products.data.count,
          featuredProducts: featured.data.length,
          homepageProducts: homepage.data.length,
          landingProducts: landing.data.length,
          categories: categories.data.length,
        })

        setLoading(false)
      } catch (error) {
        console.error("Error fetching dashboard stats:", error)
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return <div className="loading">Cargando estadísticas...</div>
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-box"></i>
          </div>
          <div className="stat-content">
            <h3>Total de Productos</h3>
            <p className="stat-value">{stats.totalProducts}</p>
            <Link to="/admin/products" className="stat-link">
              Ver todos
            </Link>
          </div>
        </div>

        <div className="stats-card">
        <div className="stat-card">
          <div className="stat-icon featured">
            <i className="fas fa-star"></i>
          </div>
          <div className="stat-content">
            <h3>Productos Destacados</h3>
            <p className="stat-value">{stats.featuredProducts}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon homepage">
            <i className="fas fa-home"></i>
          </div>
          <div className="stat-content">
            <h3>En Página Principal</h3>
            <p className="stat-value">{stats.homepageProducts}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon landing">
            <i className="fas fa-rocket"></i>
          </div>
          <div className="stat-content">
            <h3>En Landing Page</h3>
            <p className="stat-value">{stats.landingProducts}</p>
          </div>
        </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon categories">
            <i className="fas fa-tags"></i>
          </div>
          <div className="stat-content">
            <h3>Categorías</h3>
            <p className="stat-value">{stats.categories}</p>
            <Link to="/admin/categories" className="stat-link">
              Ver categorías
            </Link>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Acciones Rápidas</h2>
        <div className="actions-grid">
          <Link to="/admin/products/new" className="action-card">
            <i className="fas fa-plus"></i>
            <span>Nuevo Producto</span>
          </Link>

          <Link to="/admin/categories/new" className="action-card">
            <i className="fas fa-folder-plus"></i>
            <span>Nueva Categoría</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

