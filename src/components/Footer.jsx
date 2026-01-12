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
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">👓</div>
              <span className="footer-logo-text">Opticolorsmx</span>
            </div>
            <p className="footer-description">
              Laboratorio óptico de alta precisión comprometido con tu visión y bienestar.
            </p>
            <div className="footer-social">
              <motion.a
                href="#"
                className="footer-social-icon"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                📘
              </motion.a>
              <motion.a
                href="#"
                className="footer-social-icon"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                📷
              </motion.a>
              <motion.a
                href="#"
                className="footer-social-icon"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                🐦
              </motion.a>
              <motion.a
                href="#"
                className="footer-social-icon"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                💼
              </motion.a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a onClick={() => scrollToSection(link.id)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Servicios</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contacto</h3>
            <div className="footer-contact">
              <p>
                <span className="contact-icon">📍</span>
                Ciudad de México, México
              </p>
              <p>
                <span className="contact-icon">📞</span>
                +52 55 1234 5678
              </p>
              <p>
                <span className="contact-icon">✉️</span>
                contacto@opticolorsmx.com
              </p>
              <p className="footer-hours">
                <span className="contact-icon">🕒</span>
                Lun - Vie: 9:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© {currentYear} Opticolorsmx. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacidad</a>
              <span>|</span>
              <a href="#">Términos</a>
              <span>|</span>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>

        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ↑
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
