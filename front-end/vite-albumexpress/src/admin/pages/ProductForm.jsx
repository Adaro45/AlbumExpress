"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { productApi, categoryApi } from "../services/api"
import toast from "react-hot-toast"
import "../styles/ProductForm.css"

const ProductForm = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!slug

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    material: "",
    pages: "",
    size: "",
    extras: [""],
    featured: false,
    show_on_homepage: false,
    show_on_landing: false,
  })

  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState("")
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener categorías
        const categoriesResponse = await categoryApi.getAll()

        // Comprobar si la respuesta es un array o contiene un array en "results"
        if (Array.isArray(categoriesResponse.data)) {
          setCategories(categoriesResponse.data)
        } else if (categoriesResponse.data && Array.isArray(categoriesResponse.data.results)) {
          setCategories(categoriesResponse.data.results)
        } else {
          console.error("Formato de datos inesperado:", categoriesResponse.data)
          setCategories([])
          setError("Error al cargar las categorías")
        }

        // Si estamos en modo edición, cargar los datos del producto
        if (isEditMode && slug) {
          const productResponse = await productApi.getById(slug)
          const product = productResponse.data

          // Preparar los extras como array de strings
          let extrasArray = []
          if (product.details && Array.isArray(product.details.extras)) {
            extrasArray = product.details.extras
          } else if (Array.isArray(product.extras)) {
            extrasArray = product.extras
          }

          // Si no hay extras, inicializar con un string vacío
          if (extrasArray.length === 0) {
            extrasArray = [""]
          }

          setFormData({
            name: product.name || "",
            description: product.description || "",
            price: product.price || "",
            category: product.category || "",
            material: product.material || "",
            pages: product.pages || "",
            size: product.size || "",
            extras: extrasArray,
            featured: product.featured || false,
            show_on_homepage: product.show_on_homepage || false,
            show_on_landing: product.show_on_landing || false,
          })

          // Si hay imagen, mostrar preview
          if (product.image) {
            setImagePreview(product.image)
          }
        }

        setLoading(false)
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("Error al cargar los datos")
        setLoading(false)
      }
    }

    fetchData()
  }, [slug, isEditMode])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleExtraChange = (index, value) => {
    const newExtras = [...formData.extras]
    newExtras[index] = value
    setFormData({ ...formData, extras: newExtras })
  }

  const addExtra = () => {
    setFormData({ ...formData, extras: [...formData.extras, ""] })
  }

  const removeExtra = (index) => {
    const newExtras = formData.extras.filter((_, i) => i !== index)
    setFormData({ ...formData, extras: newExtras.length > 0 ? newExtras : [""] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const formDataToSend = new FormData()

      // Add all form fields
      formDataToSend.append("name", formData.name)
      formDataToSend.append("description", formData.description)
      formDataToSend.append("price", formData.price)
      formDataToSend.append("category", formData.category)
      formDataToSend.append("material", formData.material)
      if (formData.pages) formDataToSend.append("pages", formData.pages)
      formDataToSend.append("size", formData.size)

      // Añadir extras como array de strings
      formData.extras.forEach((extra, index) => {
        if (extra.trim()) formDataToSend.append(`extras[${index}]`, extra)
      })

      formDataToSend.append("featured", formData.featured.toString())
      formDataToSend.append("show_on_homepage", formData.show_on_homepage.toString())
      formDataToSend.append("show_on_landing", formData.show_on_landing.toString())

      // Add image if selected
      if (image) {
        formDataToSend.append("image", image)
      }

      if (isEditMode && slug) {
        await productApi.update(slug, formDataToSend)
        toast.success("Producto actualizado correctamente")
      } else {
        await productApi.create(formDataToSend)
        toast.success("Producto creado correctamente")
      }

      navigate("/admin/products")
    } catch (error) {
      console.error("Error saving product:", error)
      toast.error("Error al guardar el producto")
    }
  }

  if (loading) {
    return <div className="loading">Cargando...</div>
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={() => navigate("/admin/products")} className="btn btn-primary">
          Volver a Productos
        </button>
      </div>
    )
  }

  return (
    <div className="product-form-page">
      <h1>{isEditMode ? "Editar Producto" : "Nuevo Producto"}</h1>

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-grid">
          <div className="form-left">
            <div className="form-group">
              <label htmlFor="name">Nombre del Producto</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Precio</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Categoría</label>
                <select id="category" name="category" value={formData.category} onChange={handleChange} required>
                  <option value="">Seleccionar categoría</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-section">
              <h3>Detalles del Producto</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="material">Material</label>
                  <input
                    type="text"
                    id="material"
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pages">Páginas</label>
                  <input type="number" id="pages" name="pages" value={formData.pages} onChange={handleChange} min="0" />
                </div>

                <div className="form-group">
                  <label htmlFor="size">Tamaño</label>
                  <input type="text" id="size" name="size" value={formData.size} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label>Características Adicionales</label>
                {formData.extras.map((extra, index) => (
                  <div key={index} className="extra-input">
                    <input
                      type="text"
                      value={extra}
                      onChange={(e) => handleExtraChange(index, e.target.value)}
                      placeholder="Característica adicional"
                    />
                    <button
                      type="button"
                      className="remove-extra"
                      onClick={() => removeExtra(index)}
                      disabled={formData.extras.length <= 1}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ))}
                <button type="button" className="add-extra" onClick={addExtra}>
                  <i className="fas fa-plus"></i> Agregar Característica
                </button>
              </div>
            </div>
          </div>

          <div className="form-right">
            <div className="form-group">
              <label>Imagen del Producto</label>
              <div className="image-upload">
                <div className="image-preview">
                  {imagePreview ? (
                    <img src={imagePreview || "/placeholder.svg"} alt="Vista previa" />
                  ) : (
                    <div className="no-image">
                      <i className="fas fa-image"></i>
                      <p>Sin imagen</p>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="file-input"
                />
                <label htmlFor="image" className="file-label">
                  <i className="fas fa-upload"></i> {isEditMode ? "Cambiar Imagen" : "Subir Imagen"}
                </label>
              </div>
            </div>

            <div className="form-section">
              <h3>Opciones de Visualización</h3>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} />
                  <span>Producto Destacado</span>
                </label>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="show_on_homepage"
                    checked={formData.show_on_homepage}
                    onChange={handleChange}
                  />
                  <span>Mostrar en Página Principal</span>
                </label>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="show_on_landing"
                    checked={formData.show_on_landing}
                    onChange={handleChange}
                  />
                  <span>Mostrar en Landing Page</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={() => navigate("/admin/products")}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary">
            {isEditMode ? "Actualizar Producto" : "Crear Producto"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm

