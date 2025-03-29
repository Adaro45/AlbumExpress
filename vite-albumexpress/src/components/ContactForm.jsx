"use client"

import { useState } from "react"
import "./styles/ContactForm.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulación de envío de formulario
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "¡Gracias por contactarnos! Te responderemos a la brevedad.",
      })

      // Resetear el formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: "",
        })
      }, 5000)
    }, 1000)
  }

  return (
    <div className="contact-form">
      <h2>Envíanos un Mensaje</h2>
      <p>Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>

      {formStatus.submitted && (
        <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre Completo *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Asunto *</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar Mensaje
        </button>
      </form>
    </div>
  )
}

export default ContactForm

