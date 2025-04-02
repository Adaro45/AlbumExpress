"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { categoryApi } from "../services/api"
import toast from "react-hot-toast"
import "../styles/CategoryList.css"

const CategoryList = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await categoryApi.getAll()

      // Verificar la estructura de la respuesta
      if (response.data && Array.isArray(response.data)) {
        setCategories(response.data)
      } else if (response.data && Array.isArray(response.data.results)) {
        // Si la API devuelve datos paginados
        setCategories(response.data.results)
      } else {
        console.error("Formato de respuesta inesperado:", response.data)
        setCategories([])
        setError("Formato de datos inesperado")
      }

      setLoading(false)
    } catch (error) {
      console.error("Error fetching categories:", error)
      toast.error("Error al cargar las categorías")
      setCategories([])
      setError("Error al cargar las categorías")
      setLoading(false)
    }
  }

  const handleDelete = async (slug) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta categoría?")) {
      try {
        await categoryApi.delete(slug)
        fetchCategories()
        toast.success("Categoría eliminada correctamente")
      } catch (error) {
        console.error("Error deleting category:", error)
        toast.error("Error al eliminar la categoría")
      }
    }
  }

  if (loading) {
    return <div className="loading">Cargando categorías...</div>
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={fetchCategories} className="btn btn-primary">
          Reintentar
        </button>
      </div>
    )
  }

  return (
    <div className="category-list-page">
      <div className="page-header">
        <h1>Categorías</h1>
        <Link to="/categories/new" className="btn btn-primary">
          <i className="fas fa-plus"></i> Nueva Categoría
        </Link>
      </div>

      {!categories || categories.length === 0 ? (
        <div className="no-results">
          <p>No se encontraron categorías</p>
        </div>
      ) : (
        <div className="category-table-container">
          <table className="category-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Código</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>{category.name}</td>
                  <td>{category.code}</td>
                  <td className="actions">
                    <Link to={`/categories/${category.slug}`} className="edit-btn">
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button className="delete-btn" onClick={() => handleDelete(category.slug)}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default CategoryList

