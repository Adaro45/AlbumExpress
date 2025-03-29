"use client"

import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import { getProductsByCategory, sortProducts } from "../data/products"
import "./styles/ProductGrid.css"

const ProductGrid = ({ activeCategory, activeSort }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Obtener productos filtrados por categoría
    const filteredProducts = getProductsByCategory(activeCategory)

    // Ordenar productos
    const sortedProducts = sortProducts(filteredProducts, activeSort)

    setProducts(sortedProducts)
  }, [activeCategory, activeSort])

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

