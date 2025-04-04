"use client"

import { useState, useEffect } from "react"
import { clientCategoryApi } from "../services/api"
import "./styles/ProductFilter.css"

const sortOptions = [
  { id: "featured", name: "Destacados" },
  { id: "price-low", name: "Precio: Menor a Mayor" },
  { id: "price-high", name: "Precio: Mayor a Menor" },
  { id: "newest", name: "Más Recientes" },
]

const ProductFilter = ({ activeCategory, setActiveCategory, activeSort, setActiveSort }) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await clientCategoryApi.getAll()

        // Verificar la estructura de la respuesta
        if (Array.isArray(response.data)) {
          setCategories(response.data)
        } else if (response.data && Array.isArray(response.data.results)) {
          setCategories(response.data.results)
        } else {
          console.error("Formato de respuesta inesperado:", response.data)
          setCategories([])
        }
      } catch (err) {
        console.error("Error fetching categories:", err)
        setCategories([])
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className="product-filter">
      <button className="mobile-filter-toggle" onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
        <i className="fas fa-filter"></i> Filtrar y Ordenar
      </button>

      <div className={`filter-container ${isMobileFilterOpen ? "open" : ""}`}>
        <div className="filter-section">
          <h3>Categorías</h3>
          <ul className="category-list">
            <li>
              <button className={activeCategory === "all" ? "active" : ""} onClick={() => setActiveCategory("all")}>
                Todos los Productos
              </button>
            </li>

            {!loading &&
              categories.map((category) => (
                <li key={category.id}>
                  <button
                    className={activeCategory === category.code ? "active" : ""}
                    onClick={() => setActiveCategory(category.code)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <div className="filter-section">
          <h3>Ordenar por</h3>
          <div className="sort-options">
            <select value={activeSort} onChange={(e) => setActiveSort(e.target.value)}>
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter

