"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem("albumExpressCart")
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])

  // Actualizar localStorage y contadores cuando cambia el carrito
  useEffect(() => {
    localStorage.setItem("albumExpressCart", JSON.stringify(cartItems))

    // Actualizar contador de items
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartCount(itemCount)

    // Actualizar total
    const total = cartItems.reduce((sum, item) => sum + Number.parseFloat(item.price) * item.quantity, 0)
    setCartTotal(total)
  }, [cartItems])

  // Añadir producto al carrito
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      // Verificar si el producto ya está en el carrito
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id)

      if (existingItemIndex >= 0) {
        // Actualizar cantidad si ya existe
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += quantity
        return updatedItems
      } else {
        // Añadir nuevo item si no existe
        return [...prevItems, { ...product, quantity }]
      }
    })
  }

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  // Actualizar cantidad de un producto
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCartItems((prevItems) => prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  // Vaciar carrito
  const clearCart = () => {
    setCartItems([])
  }

  const value = {
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

