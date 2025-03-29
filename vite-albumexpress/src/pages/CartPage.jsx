"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "./styles/CartPage.css"

const CartPage = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart()
  const [isCartEmpty, setIsCartEmpty] = useState(true)

  useEffect(() => {
    // Scroll al inicio cuando se carga la página
    window.scrollTo(0, 0)

    // Verificar si el carrito está vacío
    setIsCartEmpty(cartItems.length === 0)
  }, [cartItems])

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity)
    }
  }

  return (
    <main className="cart-page">
      <div className="container">
        <h1 className="cart-title">Carrito de Compras</h1>

        {isCartEmpty ? (
          <div className="empty-cart">
            <i className="fas fa-shopping-cart empty-cart-icon"></i>
            <h2>Tu carrito está vacío</h2>
            <p>Parece que aún no has añadido ningún producto a tu carrito.</p>
            <Link to="/productos" className="btn btn-primary">
              Explorar Productos
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <div className="cart-header">
                <div className="cart-header-product">Producto</div>
                <div className="cart-header-price">Precio</div>
                <div className="cart-header-quantity">Cantidad</div>
                <div className="cart-header-total">Total</div>
                <div className="cart-header-actions"></div>
              </div>

              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-product">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p className="cart-item-category">
                        {item.category === "wedding"
                          ? "Bodas"
                          : item.category === "quinceanera"
                            ? "Quinceañeras"
                            : item.category === "family"
                              ? "Familias"
                              : item.category === "professional"
                                ? "Profesional"
                                : "Accesorios"}
                      </p>
                    </div>
                  </div>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                  <div className="cart-item-quantity">
                    <div className="quantity-selector">
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="quantity-btn">
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, Number.parseInt(e.target.value))}
                        className="quantity-input"
                      />
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="quantity-btn">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</div>
                  <div className="cart-item-actions">
                    <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              ))}

              <div className="cart-actions">
                <button className="btn btn-outline" onClick={clearCart}>
                  <i className="fas fa-trash"></i> Vaciar Carrito
                </button>
                <Link to="/productos" className="btn btn-outline">
                  <i className="fas fa-arrow-left"></i> Continuar Comprando
                </Link>
              </div>
            </div>

            <div className="cart-summary">
              <h2>Resumen del Pedido</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Envío</span>
                <span>Calculado en el checkout</span>
              </div>
              <div className="summary-row">
                <span>Impuestos</span>
                <span>Calculado en el checkout</span>
              </div>
              <div className="summary-total">
                <span>Total Estimado</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="btn btn-primary checkout-btn">
                Proceder al Checkout
              </Link>
              <div className="payment-methods">
                <p>Aceptamos</p>
                <div className="payment-icons">
                  <i className="fab fa-cc-visa"></i>
                  <i className="fab fa-cc-mastercard"></i>
                  <i className="fab fa-cc-amex"></i>
                  <i className="fab fa-cc-paypal"></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default CartPage

