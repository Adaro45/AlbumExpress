import { Link } from "react-router-dom"
import "./styles/HeroSection.css"

const HeroSection = () => {
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
            <img src="./images/place-holder-quinceanera-clasico.jpg" alt="Álbum de quinceañera" className="album album-1" />
            <img src="./images/place-holder-boda-premium.jpg" alt="Álbum de bodas" className="album album-2" />
            <img src="./images/place-holder-familiar-rustico.jpg" alt="Álbum familiar" className="album album-3" />
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection

