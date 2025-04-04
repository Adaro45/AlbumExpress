import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { productApi } from "../services/api"
import toast from "react-hot-toast"
import "../styles/ProductList.css"

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchParams] = useSearchParams()
  const [searchText, setSearchText] = useState("")
  

  useEffect(() => {
    fetchProducts()
  }, [searchParams])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)

  // Construir objeto de consulta a partir de searchParams
  const query = {}
  if (searchParams.get("category")) query.category = searchParams.get("category")
  if (searchParams.get("featured") === "true") query.featured = "true"
  if (searchParams.get("homepage") === "true") query.show_on_homepage = "true"
  if (searchParams.get("landing") === "true") query.show_on_landing = "true"

  const response = await productApi.getAll({ params: query })

      // Verificar la estructura de la respuesta
      if (response.data && Array.isArray(response.data)) {
        setProducts(response.data)
      } else if (response.data && response.data.results && Array.isArray(response.data.results)) {
        setProducts(response.data.results)
      } else {
        console.error("Formato de respuesta inesperado:", response.data)
        setProducts([])
        setError("Formato de datos inesperado")
      }

      setLoading(false)
    } catch (error) {
      console.error("Error fetching products:", error)
      toast.error("Error al cargar los productos")
      setProducts([])
      setError("Error al cargar los productos")
      setLoading(false)
    }
  }

  const handleToggleFeatured = async (slug) => {
    try {
      await productApi.toggleFeatured(slug)
      fetchProducts()
      toast.success("Estado destacado actualizado")
    } catch (error) {
      console.error("Error toggling featured status:", error)
      toast.error("Error al actualizar el estado destacado")
    }
  }

  const handleToggleHomepage = async (slug) => {
    try {
      await productApi.toggleHomepage(slug)
      fetchProducts()
      toast.success("Estado de página principal actualizado")
    } catch (error) {
      console.error("Error toggling homepage status:", error)
      toast.error("Error al actualizar el estado de página principal")
    }
  }

  const handleToggleLanding = async (slug) => {
    try {
      await productApi.toggleLanding(slug)
      fetchProducts()
      toast.success("Estado de landing page actualizado")
    } catch (error) {
      console.error("Error toggling landing status:", error)
      toast.error("Error al actualizar el estado de landing page")
    }
  }

  const handleDelete = async (slug) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      try {
        await productApi.delete(slug)
        fetchProducts()
        toast.success("Producto eliminado correctamente")
      } catch (error) {
        console.error("Error deleting product:", error)
        toast.error("Error al eliminar el producto")
      }
    }
  }

  const handleSearch = (e) => {
      setSearchText(e.target.value)
    }

    const filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase()) ||
          (product.category_name && product.category_name.toLowerCase().includes(searchText.toLowerCase()))
      )

  if (loading) {
    return <div className="loading">Cargando productos...</div>
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={fetchProducts} className="btn btn-primary">
          Reintentar
        </button>
      </div>
    )
  }

  return (
    <div className="product-list-page">
      <div className="page-header">
        <h1>Productos</h1>
        <Link to="/products/new" className="btn btn-primary">
          <i className="fas fa-plus"></i> Nuevo Producto
        </Link>
      </div>

      <div className="filters">
        <div className="search-box">
        <input type="text" placeholder="Buscar productos..." value={searchText} onChange={handleSearch} />
          <i className="fas fa-search"></i>
        </div>
      </div>

      {!products || filteredProducts.length === 0 ? (
        <div className="no-results">
          <p>No se encontraron productos</p>
        </div>
      ) : (
        <div className="product-table-container">
          <table className="product-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Destacado</th>
                <th>Página Principal</th>
                <th>Landing</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="product-image">
                    <img src={product.image || "/placeholder.svg"} alt={product.name} />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category_name || "Sin categoría"}</td>
                  <td>${!isNaN(parseFloat(product.price)) ? parseFloat(product.price).toFixed(2) : "0.00"}</td>
                  <td>
                    <button
                      className={`toggle-btn ${product.featured ? "active" : ""}`}
                      onClick={() => handleToggleFeatured(product.slug)}
                    >
                      {product.featured ? "Sí" : "No"}
                    </button>
                  </td>
                  <td>
                    <button
                      className={`toggle-btn ${product.show_on_homepage ? "active" : ""}`}
                      onClick={() => handleToggleHomepage(product.slug)}
                    >
                      {product.show_on_homepage ? "Sí" : "No"}
                    </button>
                  </td>
                  <td>
                    <button
                      className={`toggle-btn ${product.show_on_landing ? "active" : ""}`}
                      onClick={() => handleToggleLanding(product.slug)}
                    >
                      {product.show_on_landing ? "Sí" : "No"}
                    </button>
                  </td>
                  <td className="actions">
                    <Link to={`/products/${product.slug}`} className="edit-btn">
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button className="delete-btn" onClick={() => handleDelete(product.slug)}>
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

export default ProductList

