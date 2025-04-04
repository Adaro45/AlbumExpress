"use client"

import { useState } from "react"
import "./styles/ProductFilter.css"

const categories = [
  { id: "all", name: "Todos los Productos" },
  { id: "wedding", name: "Álbumes de Boda" },
  { id: "quinceanera", name: "Álbumes de Quinceañera" },
  { id: "family", name: "Álbumes Familiares" },
  { id: "professional", name: "Álbumes Profesionales" },
  { id: "accessories", name: "Accesorios" },
]

const sortOptions = [
  { id: "featured", name: "Destacados" },
  { id: "price-low", name: "Precio: Menor a Mayor" },
  { id: "price-high", name: "Precio: Mayor a Menor" },
  { id: "newest", name: "Más Recientes" },
]

const ProductFilter = ({ activeCategory, setActiveCategory, activeSort, setActiveSort }) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  return (
    <div className="product-filter">
      <button className="mobile-filter-toggle" onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
        <i className="fas fa-filter"></i> Filtrar y Ordenar
      </button>

      <div className={`filter-container ${isMobileFilterOpen ? "open" : ""}`}>
        <div className="filter-section">
          <h3>Categorías</h3>
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  className={activeCategory === category.id ? "active" : ""}
                  onClick={() => setActiveCategory(category.id)}
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

