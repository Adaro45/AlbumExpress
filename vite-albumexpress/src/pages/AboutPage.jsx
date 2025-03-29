import AboutHero from "../components/AboutHero"
import AboutStory from "../components/AboutStory"
import AboutTeam from "../components/AboutTeam"
import AboutValues from "../components/AboutValues"
import CTASection from "../components/CTASection"
import "./styles/AboutPage.css"

const AboutPage = () => {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <CTASection />
    </main>
  )
}

export default AboutPage

