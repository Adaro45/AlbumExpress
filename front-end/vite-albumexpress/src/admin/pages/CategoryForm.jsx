"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { categoryApi } from "../services/api"
import toast from "react-hot-toast"
import "../styles/CategoryForm.css"

const CategoryForm = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!slug

  const [formData, setFormData] = useState({
    name: "",
    code: "",
  })

  const [loading, setLoading] = useState(isEditMode)

  useEffect(() => {
    const fetchCategory = async () => {
      if (isEditMode && slug) {
        try {
          const response = await categoryApi.getById(slug)
          setFormData({
            name: response.data.name,
            code: response.data.code,
          })
          setLoading(false)
        } catch (error) {
          console.error("Error fetching category:", error)
          toast.error("Error al cargar la categoría")
          setLoading(false)
        }
      }
    }

    fetchCategory()
  }, [slug, isEditMode])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (isEditMode && slug) {
        await categoryApi.update(slug, formData)
        toast.success("Categoría actualizada correctamente")
      } else {
        await categoryApi.create(formData)
        toast.success("Categoría creada correctamente")
      }

      navigate("/categories")
    } catch (error) {
      console.error("Error saving category:", error)
      toast.error("Error al guardar la categoría")
    }
  }

  if (loading) {
    return <div className="loading">Cargando...</div>
  }

  return (
    <div className="category-form-page">
      <h1>{isEditMode ? "Editar Categoría" : "Nueva Categoría"}</h1>

      <form onSubmit={handleSubmit} className="category-form">
        <div className="form-group">
          <label htmlFor="name">Nombre de la Categoría</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="code">Código</label>
          <select id="code" name="code" value={formData.code} onChange={handleChange} required>
            <option value="">Seleccionar código</option>
            <option value="wedding">Bodas (wedding)</option>
            <option value="quinceanera">Quinceañeras (quinceanera)</option>
            <option value="family">Familias (family)</option>
            <option value="professional">Profesional (professional)</option>
            <option value="accessories">Accesorios (accessories)</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={() => navigate("/categories")}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary">
            {isEditMode ? "Actualizar Categoría" : "Crear Categoría"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CategoryForm

