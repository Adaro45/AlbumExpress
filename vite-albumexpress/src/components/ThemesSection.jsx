"use client"

import { useState } from "react"
import "./styles/ThemesSection.css"

const themes = [
  { id: "all", name: "Todos" },
  { id: "wedding", name: "Bodas" },
  { id: "quinceanera", name: "Quinceañeras" },
  { id: "family", name: "Familias" },
  { id: "travel", name: "Viajes" },
]

const themeItems = [
  {
    id: 1,
    name: "Elegancia Clásica",
    image: "./images/place-holder-profesional-minimalista.jpg",
    category: "wedding",
  },
  {
    id: 2,
    name: "Sueño de Quinceañera",
    image: "./images/place-holder-quinceanera-deluxe.jpg",
    category: "quinceanera",
  },
  {
    id: 3,
    name: "Momentos Familiares",
    image: "./images/place-holder-familiar-rustico.jpg",
    category: "family",
  },
  {
    id: 4,
    name: "Aventuras de Viaje",
    image: "./images/place-holder-viajes.jpg",
    category: "travel",
  },
  {
    id: 5,
    name: "Boda Rústica",
    image: "./images/place-holder-boda-vintage.jpg",
    category: "wedding",
  },
  {
    id: 6,
    name: "Quinceañera Moderna",
    image: "/images/place-holder-quinceanera-clasico.jpg",
    category: "quinceanera",
  },
]

const ThemesSection = () => {
  const [activeTheme, setActiveTheme] = useState("all")

  const filteredThemes = activeTheme === "all" ? themeItems : themeItems.filter((item) => item.category === activeTheme)

  return (
    <section className="themes-section section">
      <div className="container">
        <h2 className="section-title">Temas para todos tus recuerdos favoritos</h2>

        <div className="themes-filter">
          {themes.map((theme) => (
            <button
              key={theme.id}
              className={`theme-filter-btn ${activeTheme === theme.id ? "active" : ""}`}
              onClick={() => setActiveTheme(theme.id)}
            >
              {theme.name}
            </button>
          ))}
        </div>

        <div className="themes-grid">
          {filteredThemes.map((theme) => (
            <div className="theme-card" key={theme.id}>
              <div className="theme-image">
                <img src={theme.image || "/placeholder.svg"} alt={theme.name} />
              </div>
              <h3>{theme.name}</h3>
            </div>
          ))}
        </div>

        <div className="themes-cta">
          <button className="btn btn-primary">Explorar todos los temas</button>
        </div>
      </div>
    </section>
  )
}

export default ThemesSection

