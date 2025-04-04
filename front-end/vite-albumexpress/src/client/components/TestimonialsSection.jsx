"use client"

import { useState } from "react"
import "./styles/TestimonialsSection.css"

const testimonials = [
  {
    id: 1,
    name: "María Fernández",
    role: "Novia",
    image: "/images/place-holder-Maria.jpg",
    text: "El álbum de mi boda quedó espectacular. La calidad de impresión y los materiales son de primera. Todos mis familiares quedaron impresionados.",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Fotógrafo Profesional",
    image: "/images/place-holder-CarlosMendoza.jpg",
    text: "Como fotógrafo, la calidad de los álbumes que ofrezco a mis clientes es crucial. AlbumExpress siempre cumple con mis expectativas y las de mis clientes.",
  },
  {
    id: 3,
    name: "Sofía Ramírez",
    role: "Quinceañera",
    image: "/images/place-holder-Sofia.jpg",
    text: "Mi álbum de quinceañera es hermoso, las fotos se ven increíbles y el diseño es justo lo que quería. ¡Lo recomiendo totalmente!",
  },
]

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials-section section">
      <div className="container">
        <h2 className="section-title">Lo que dicen nuestros clientes</h2>

        <div className="testimonials-container">
          <button className="testimonial-nav prev" onClick={prevTestimonial}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={testimonials[activeIndex].image || "/placeholder.svg"} alt={testimonials[activeIndex].name} />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
              <div className="testimonial-author">
                <h4>{testimonials[activeIndex].name}</h4>
                <p>{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          <button className="testimonial-nav next" onClick={nextTestimonial}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

