import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./styles/HeroSection.css"

const HeroSection = () => {
  const [albumOrder, setAlbumOrder] = useState([1, 2, 3])

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setAlbumOrder((prevOrder) => {
        const newOrder = [...prevOrder]
        const last = newOrder.pop()
        newOrder.unshift(last)
        return newOrder
      })
    }, 5000)

    return () => clearInterval(rotateInterval)
  }, [])

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Captura tus momentos más especiales</h1>
          <p>
            Álbumes de alta calidad para bodas, quinceañeras y todo tipo de eventos. Diseñados para preservar tus
            recuerdos con estilo y elegancia.
          </p>
          <div className="hero-buttons">
            <Link to="/productos" className="btn btn-primary">
              Ver Productos
            </Link>
            <Link to="/contacto" className="btn btn-outline">
              Contactar
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="album-stack">
            {albumOrder.map((position, index) => (
              <img
                key={position}
                src={`./images/place-holder-${position === 1 ? "quinceanera-clasico" : position === 2 ? "boda-premium" : "familiar-rustico"}.jpg`}
                alt={position === 1 ? "Álbum de quinceañera" : position === 2 ? "Álbum de bodas" : "Álbum familiar"}
                className={`album album-${index + 1}`}
                style={{ transition: "all 0.5s ease-in-out" }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" className="wave" viewBox="0 0 1440 200">
          <path
            fill="#ebebeb"
            fillOpacity="1"
            z={"0" }
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection

