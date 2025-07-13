"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./styles/HeroSection.css"

const slides = [
  {
    id: 1,
    title: "Álbumes Fotográficos Profesionales",
    description:
      "Especialistas en álbumes fotográficos de alta calidad. Disponibles en 5 tamaños diferentes con 3 variantes: Portada y Vinil, Portada y Contraportada, y Guestbook.",
    images: [
      { src: "./images/albumboda.png", alt: "Álbum 12x12" },
      { src: "./images/guessbook2.png", alt: "Álbum 10x10" },
      { src: "./images/albumportadayvinil.png", alt: "Álbum 8x12" },
    ],
    buttons: [
      { text: "Ver Álbumes", link: "/productos", primary: true, icon: "fas fa-book" },
      { text: "Contactar", link: "/contacto", primary: false, icon: "fas fa-phone" },
    ],
  },
  {
    id: 2,
    title: "5 Tamaños Disponibles",
    description:
      "12x12, 10x10, 8x12, 11x14, 12x16 pulgadas. Encuentra el tamaño perfecto para tus fotografías con papel fotográfico premium y acabados de alta calidad.",
    images: [
      { src: "./images/albumportada.png", alt: "Diferentes tamaños" },
      { src: "./images/albumglobosrosa.png", alt: "Álbum grande" },
      { src: "./images/albumportadaacrilico.png", alt: "Álbum compacto" },
    ],
    buttons: [
      { text: "Ver Catálogo", link: "/productos", primary: true, icon: "fas fa-images" },
      { text: "WhatsApp", link: "https://wa.me/5212345678", primary: false, icon: "fab fa-whatsapp" },
    ],
  },
  {
    id: 3,
    title: "3 Variantes Disponibles",
    description:
      "Portada y Vinil, Portada y Contraportada, o Guestbook . Calidad garantizada.",
    images: [
      { src: "./images/guessbook.png", alt: "Portada y Vinil" },
      { src: "./images/albumportadacompleta.png", alt: "Portada y Contraportada" },
      { src: "./images/albumrosa.png", alt: "Guestbook" },
    ],
    buttons: [
      { text: "Cotizar", link: "tel:+5212345678", primary: true, icon: "fas fa-calculator" },
      { text: "Más Info", link: "/contacto", primary: false, icon: "fas fa-info-circle" },
    ],
  },
]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [albumOrder, setAlbumOrder] = useState([0, 1, 2])
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Efecto para cambiar de slide cada 5 segundos
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 10000)

    return () => clearInterval(slideInterval)
  }, [])

  // Efecto para rotar las imágenes dentro de cada slide
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setAlbumOrder((prevOrder) => {
        const newOrder = [...prevOrder]
        const last = newOrder.pop()
        newOrder.unshift(last)
        return newOrder
      })
    }, 2000)

    return () => clearInterval(rotateInterval)
  }, [])

  // Función para cambiar manualmente el slide
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const slide = slides[currentSlide]

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <div className="hero-buttons">
            {slide.buttons.map((button, index) => (
              <Link key={index} to={button.link} className={`btn ${button.primary ? "btn-primary" : "btn-secondary"}`}>
                <i className={button.icon}></i>
                <span>{button.text}</span>
              </Link>
            ))}
          </div>

          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slide-indicator ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="hero-image">
          <div className="album-stack">
            {albumOrder.map((position, index) => (
              <img
                key={`${slide.id}-${position}`}
                src={slide.images[position].src || "/placeholder.svg"}
                alt={slide.images[position].alt}
                className={`album album-${index + 1}`}
                style={{ transition: "all 0.5s ease-in-out" }}
              />
            ))}
          </div>
        </div>
      </div>
      {!isMobile && (
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" className="wave" viewBox="0 0 1440 180">
            <path
              fill="var(--secondary)"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      )}
    </section>
  )
}

export default HeroSection
