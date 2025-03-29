import "./styles/AboutValues.css"

const values = [
  {
    id: 1,
    icon: "fas fa-gem",
    title: "Calidad",
    description: "Utilizamos los mejores materiales y técnicas para crear álbumes que durarán toda la vida.",
  },
  {
    id: 2,
    icon: "fas fa-heart",
    title: "Pasión",
    description: "Amamos lo que hacemos y ponemos nuestro corazón en cada álbum que creamos.",
  },
  {
    id: 3,
    icon: "fas fa-users",
    title: "Servicio",
    description: "Ofrecemos atención personalizada para asegurar que cada cliente reciba exactamente lo que necesita.",
  },
  {
    id: 4,
    icon: "fas fa-lightbulb",
    title: "Innovación",
    description: "Constantemente buscamos nuevas técnicas y materiales para mejorar nuestros productos.",
  },
]

const AboutValues = () => {
  return (
    <section className="about-values section">
      <div className="container">
        <h2 className="section-title">Nuestros Valores</h2>
        <p className="section-subtitle text-center">Los principios que guían nuestro trabajo diario</p>

        <div className="values-grid">
          {values.map((value) => (
            <div className="value-card" key={value.id}>
              <div className="value-icon">
                <i className={value.icon}></i>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutValues

