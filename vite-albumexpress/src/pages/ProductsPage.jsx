"use client"

import { useState } from "react"
import ProductFilter from "../components/ProductFilter"
import ProductGrid from "../components/ProductGrid"
import "./styles/ProductsPage.css"

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeSort, setActiveSort] = useState("featured")

  return (
    <main className="products-page">
      <div className="products-hero">
        <div className="container">
          <h1>Nuestros Productos</h1>
          <p>Descubre nuestra colección de álbumes de alta calidad para cada ocasión</p>
        </div>
      </div>

      <section className="products-section section">
        <div className="container">
          <ProductFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeSort={activeSort}
            setActiveSort={setActiveSort}
          />
          <ProductGrid activeCategory={activeCategory} activeSort={activeSort} />
        </div>
      </section>
    </main>
  )
}

export default ProductsPage

