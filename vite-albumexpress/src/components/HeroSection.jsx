"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./styles/HeroSection.css"

const slides = [
  {
    id: 1,
    title: "Captura tus momentos más especiales",
    description:
      "Álbumes de alta calidad para bodas, quinceañeras y todo tipo de eventos. Diseñados para preservar tus recuerdos con estilo y elegancia.",
    images: [
      { src: "./images/place-holder-quinceanera-clasico.jpg", alt: "Álbum de quinceañera" },
      { src: "./images/place-holder-boda-premium.jpg", alt: "Álbum de bodas" },
      { src: "./images/place-holder-familiar-rustico.jpg", alt: "Álbum familiar" },
    ],
    buttons: [
      { text: "Ver Productos", link: "/productos", primary: true },
      { text: "Contactar", link: "/contacto", primary: false },
    ],
  },
  {
    id: 2,
    title: "Paquete especial de recuerdos por solo 7000 MXN",
    description:
      "Llévate un álbum premium, un cuadro de acrílico y un portaretratos a un precio increíble. La combinación perfecta para preservar tus momentos más valiosos.",
    images: [
      { src: "./images/placeholder_cuadro_acrilico.jpeg", alt: "Cuadro de acrílico" },
      { src: "./images/place-holder-boda-premium.jpg", alt: "Álbum premium" },
      { src: "./images/placeholder_portaretrato.jpeg", alt: "Portaretratos" },
    ],
    buttons: [
      { text: "Ver Oferta", link: "/productos", primary: true },
      { text: "Más Información", link: "/contacto", primary: false },
    ],
  },
  {
    id: 3,
    title: "Decoración moderna con cuadros de acrílico",
    description:
      "Transforma tus espacios con nuestros elegantes cuadros de acrílico. Diseño minimalista y contemporáneo para dar vida a tus fotografías favoritas.",
    images: [
      { src: "./images/placeholder_cuadro_acrilio.jpeg", alt: "Cuadro de acrílico moderno" },
      { src: "./images/placeholder_cuadro_acrilicoboda.jpeg", alt: "Cuadro minimalista" },
      { src: "./images/placeholder_cuadro_acrilico_quinceanera.jpeg", alt: "Decoración con cuadros" },
    ],
    buttons: [
      { text: "Explorar Cuadros", link: "/productos", primary: true },
      { text: "Ver Galería", link: "/productos", primary: false },
    ],
  },
]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [albumOrder, setAlbumOrder] = useState([0, 1, 2])

  // Efecto para cambiar de slide cada 8 segundos
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 3000)

    return () => clearInterval(slideInterval)
  }, [])

  // Efecto para rotar las imágenes dentro de cada slide
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setAlbumOrder((prevOrder) => {
        // Rotar el orden: el último pasa al primero
        const newOrder = [...prevOrder]
        const last = newOrder.pop()
        newOrder.unshift(last)
        return newOrder
      })
    }, 14000)

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
              <Link key={index} to={button.link} className={`btn ${button.primary ? "btn-primary" : "btn-outline"}`}>
                {button.text}
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
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" className="wave" viewBox="0 0 1440 180">
          <path
            fill="#ebebeb"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
