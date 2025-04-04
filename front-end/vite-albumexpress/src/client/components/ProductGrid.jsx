"use client"

import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import { clientProductApi } from "../services/api"
import "./styles/ProductGrid.css"

const ProductGrid = ({ activeCategory, activeSort }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)

        // Preparar parámetros para la API
        const params = {}
        if (activeCategory && activeCategory !== "all") {
          params.category = activeCategory
        }

        // Obtener productos
        const response = await clientProductApi.getAll(params)
        let fetchedProducts = Array.isArray(response.data)
          ? response.data
          : response.data.results
            ? response.data.results
            : []

        // Ordenar productos según el criterio seleccionado
        switch (activeSort) {
          case "price-low":
            fetchedProducts = fetchedProducts.sort((a, b) => Number.parseFloat(a.price) - Number.parseFloat(b.price))
            break
          case "price-high":
            fetchedProducts = fetchedProducts.sort((a, b) => Number.parseFloat(b.price) - Number.parseFloat(a.price))
            break
          case "newest":
            fetchedProducts = fetchedProducts.sort((a, b) => new Date(b.date_added) - new Date(a.date_added))
            break
          case "featured":
          default:
            // Si es "featured" o cualquier otro valor, mantener el orden predeterminado o priorizar destacados
            fetchedProducts = fetchedProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
            break
        }

        setProducts(fetchedProducts)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching products:", err)
        setError("No se pudieron cargar los productos")
        setLoading(false)
      }
    }

    fetchProducts()
  }, [activeCategory, activeSort])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <div className="no-products">
          <p>No se encontraron productos en esta categoría.</p>
        </div>
      )}
    </div>
  )
}

export default ProductGrid

