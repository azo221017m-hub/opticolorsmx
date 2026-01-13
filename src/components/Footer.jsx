import { motion } from 'framer-motion'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Servicios', id: 'services' },
    { name: 'Nosotros', id: 'about' },
    { name: 'Contacto', id: 'contact' }
  ]

  const services = [
    'Lentes Progresivos',
    'Lentes de Sol',
    'Tratamientos Premium',
    'Servicio Express'
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
                  
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© {currentYear} Opticolors. Todos los derechos reservados.</p>
                 </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
