"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import "./styles/CheckoutPage.css"

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()
  //eslint-disable-next-line
  const [isCartEmpty, setIsCartEmpty] = useState(true)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "credit-card",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCVC: "",
  })
  const [errors, setErrors] = useState({})
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")

  useEffect(() => {
    // Scroll al inicio cuando se carga la página
    window.scrollTo(0, 0)

    // Verificar si el carrito está vacío
    setIsCartEmpty(cartItems.length === 0)

    // Redirigir si el carrito está vacío
    if (cartItems.length === 0 && !orderPlaced) {
      navigate("/carrito")
    }
  }, [cartItems, navigate, orderPlaced])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validaciones básicas
    if (!formData.firstName.trim()) newErrors.firstName = "El nombre es requerido"
    if (!formData.lastName.trim()) newErrors.lastName = "El apellido es requerido"
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es requerido"
    if (!formData.address.trim()) newErrors.address = "La dirección es requerida"
    if (!formData.city.trim()) newErrors.city = "La ciudad es requerida"
    if (!formData.state.trim()) newErrors.state = "El estado es requerido"
    if (!formData.zipCode.trim()) newErrors.zipCode = "El código postal es requerido"

    // Validaciones para tarjeta de crédito
    if (formData.paymentMethod === "credit-card") {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "El número de tarjeta es requerido"
      if (!formData.cardName.trim()) newErrors.cardName = "El nombre en la tarjeta es requerido"
      if (!formData.cardExpiry.trim()) newErrors.cardExpiry = "La fecha de expiración es requerida"
      if (!formData.cardCVC.trim()) newErrors.cardCVC = "El código de seguridad es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    // Simular procesamiento de pago
    setOrderPlaced(true)

    // Generar número de orden aleatorio
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000)
    setOrderNumber(randomOrderNumber.toString())

    // Limpiar carrito después de la compra exitosa
    clearCart()
  }

  if (orderPlaced) {
    return (
      <main className="checkout-page">
        <div className="container">
          <div className="order-success">
            <div className="order-success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h1>¡Gracias por tu compra!</h1>
            <p>Tu pedido ha sido procesado correctamente.</p>
            <div className="order-details">
              <p>
                <strong>Número de Orden:</strong> #{orderNumber}
              </p>
              <p>
                <strong>Total:</strong> ${cartTotal.toFixed(2)} MXN
              </p>
              <p>Hemos enviado un correo electrónico con los detalles de tu compra a {formData.email}</p>
            </div>
            <div className="order-actions">
              <Link to="/" className="btn btn-primary">
                Volver al Inicio
              </Link>
              <Link to="/productos" className="btn btn-outline">
                Seguir Comprando
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="checkout-page">
      <div className="container">
        <h1 className="checkout-title">Finalizar Compra</h1>

        <div className="checkout-content">
          <div className="checkout-form-container">
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-section">
                <h2>Información Personal</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Nombre *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={errors.firstName ? "error" : ""}
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Apellido *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={errors.lastName ? "error" : ""}
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "error" : ""}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2>Dirección de Envío</h2>
                <div className="form-group">
                  <label htmlFor="address">Dirección *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? "error" : ""}
                  />
                  {errors.address && <span className="error-message">{errors.address}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">Ciudad *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={errors.city ? "error" : ""}
                    />
                    {errors.city && <span className="error-message">{errors.city}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">Estado *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={errors.state ? "error" : ""}
                    />
                    {errors.state && <span className="error-message">{errors.state}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">Código Postal *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={errors.zipCode ? "error" : ""}
                    />
                    {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2>Método de Pago</h2>
                <div className="payment-methods-selector">
                  <div className="payment-method">
                    <input
                      type="radio"
                      id="credit-card"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === "credit-card"}
                      onChange={handleChange}
                    />
                    <label htmlFor="credit-card">
                      <i className="far fa-credit-card"></i> Tarjeta de Crédito/Débito
                    </label>
                  </div>
                  <div className="payment-method">
                    <input
                      type="radio"
                      id="paypal"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === "paypal"}
                      onChange={handleChange}
                    />
                    <label htmlFor="paypal">
                      <i className="fab fa-paypal"></i> PayPal
                    </label>
                  </div>
                </div>

                {formData.paymentMethod === "credit-card" && (
                  <div className="credit-card-form">
                    <div className="form-group">
                      <label htmlFor="cardNumber">Número de Tarjeta *</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        className={errors.cardNumber ? "error" : ""}
                      />
                      {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="cardName">Nombre en la Tarjeta *</label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        className={errors.cardName ? "error" : ""}
                      />
                      {errors.cardName && <span className="error-message">{errors.cardName}</span>}
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="cardExpiry">Fecha de Expiración *</label>
                        <input
                          type="text"
                          id="cardExpiry"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          placeholder="MM/AA"
                          className={errors.cardExpiry ? "error" : ""}
                        />
                        {errors.cardExpiry && <span className="error-message">{errors.cardExpiry}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="cardCVC">CVC/CVV *</label>
                        <input
                          type="text"
                          id="cardCVC"
                          name="cardCVC"
                          value={formData.cardCVC}
                          onChange={handleChange}
                          placeholder="123"
                          className={errors.cardCVC ? "error" : ""}
                        />
                        {errors.cardCVC && <span className="error-message">{errors.cardCVC}</span>}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="checkout-actions">
                <Link to="/carrito" className="btn btn-outline">
                  <i className="fas fa-arrow-left"></i> Volver al Carrito
                </Link>
                <button type="submit" className="btn btn-primary">
                  Completar Compra
                </button>
              </div>
            </form>
          </div>

          <div className="checkout-summary">
            <h2>Resumen del Pedido</h2>
            <div className="checkout-items">
              {cartItems.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <div className="checkout-item-image">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} />
                    <span className="checkout-item-quantity">{item.quantity}</span>
                  </div>
                  <div className="checkout-item-details">
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)} MXN</p>
                  </div>
                  <div className="checkout-item-total">${(item.price * item.quantity).toFixed(2)} MXN</div>
                </div>
              ))}
            </div>

            <div className="checkout-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)} MXN</span>
              </div>
              <div className="summary-row">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="summary-row">
                <span>Impuestos (16%)</span>
                <span>${(cartTotal * 0.16).toFixed(2)} MXN</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>${(cartTotal * 1.16).toFixed(2)} MXN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CheckoutPage

