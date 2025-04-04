import "./styles/AboutStory.css"

const AboutStory = () => {
  return (
    <section className="about-story section">
      <div className="container">
        <div className="about-story-content">
          <div className="about-story-image">
            <img src="/images/place-holder-historia.jpg" alt="Historia de AlbumExpress" />
          </div>
          <div className="about-story-text">
            <h2>Nuestra Trayectoria</h2>
            <p>
              AlbumExpress nació en 2010 con una misión clara: ofrecer álbumes fotográficos de la más alta calidad que
              preserven los momentos más importantes de la vida.
            </p>
            <p>
              Lo que comenzó como un pequeño taller familiar se ha convertido en una empresa líder en la industria,
              sirviendo a fotógrafos profesionales y clientes directos en todo el país.
            </p>
            <p>
              A lo largo de estos años, hemos perfeccionado nuestras técnicas de producción y ampliado nuestra gama de
              productos, manteniendo siempre nuestro compromiso con la excelencia y la atención personalizada.
            </p>
            <div className="about-story-stats">
              <div className="stat">
                <h3>+10,000</h3>
                <p>Álbumes Entregados</p>
              </div>
              <div className="stat">
                <h3>+5,000</h3>
                <p>Clientes Satisfechos</p>
              </div>
              <div className="stat">
                <h3>+13</h3>
                <p>Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStory

