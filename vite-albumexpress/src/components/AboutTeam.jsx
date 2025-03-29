import "./styles/AboutTeam.css"

const team = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "Fundador y CEO",
    image: "/images/place-holder-Carlos.jpg",
    bio: "Con más de 15 años de experiencia en la industria fotográfica, Carlos fundó AlbumExpress con la visión de ofrecer álbumes de la más alta calidad.",
  },
  {
    id: 2,
    name: "Ana Martínez",
    role: "Directora de Diseño",
    image: "/images/place-holder-Anna-Martinez.jpg",
    bio: "Ana lidera nuestro equipo de diseño, asegurando que cada álbum sea una obra de arte única que refleje la personalidad de nuestros clientes.",
  },
  {
    id: 3,
    name: "Miguel Sánchez",
    role: "Jefe de Producción",
    image: "/images/place-holder-Miguel.jpg",
    bio: "Miguel supervisa todo el proceso de producción, garantizando que cada álbum cumpla con nuestros estrictos estándares de calidad.",
  },
  {
    id: 4,
    name: "Laura Gómez",
    role: "Atención al Cliente",
    image: "/images/place-holder-Laura.jpg",
    bio: "Laura se asegura de que cada cliente reciba un servicio excepcional, desde la consulta inicial hasta la entrega del producto final.",
  },
]

const AboutTeam = () => {
  return (
    <section className="about-team section">
      <div className="container">
        <h2 className="section-title">Nuestro Equipo</h2>
        <p className="section-subtitle text-center">Conoce a las personas detrás de AlbumExpress</p>

        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-image">
                <img src={member.image || "/placeholder.svg"} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  <a href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTeam

