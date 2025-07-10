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
          <div className="hero-content">
            <h1>Álbumes Fotográficos Profesionales</h1>
            <p>5 tamaños disponibles • 3 variantes • Calidad premium • Entrega rápida</p>

            {/* Navegación rápida de tamaños */}
            <div className="size-quick-nav">
              <button
                onClick={() => setActiveCategory("12x12")}
                className={`size-btn ${activeCategory === "12x12" ? "active" : ""}`}
              >
                12x12"
              </button>
              <button
                onClick={() => setActiveCategory("10x10")}
                className={`size-btn ${activeCategory === "10x10" ? "active" : ""}`}
              >
                10x10"
              </button>
              <button
                onClick={() => setActiveCategory("8x12")}
                className={`size-btn ${activeCategory === "8x12" ? "active" : ""}`}
              >
                8x12"
              </button>
              <button
                onClick={() => setActiveCategory("11x14")}
                className={`size-btn ${activeCategory === "11x14" ? "active" : ""}`}
              >
                11x14"
              </button>
              <button
                onClick={() => setActiveCategory("12x16")}
                className={`size-btn ${activeCategory === "12x16" ? "active" : ""}`}
              >
                12x16"
              </button>
              <button
                onClick={() => setActiveCategory("all")}
                className={`size-btn ${activeCategory === "all" ? "active" : ""}`}
              >
                Todos
              </button>
            </div>

            <div className="hero-contact">
              <a href="tel:+5212345678" className="btn btn-primary">
                <i className="fas fa-phone"></i> Cotizar por Teléfono
              </a>
              <a
                href="https://wa.me/5212345678"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
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
