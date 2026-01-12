import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: '🏆',
      title: 'Calidad Premium',
      description: 'Materiales de la más alta calidad con certificaciones internacionales'
    },
    {
      icon: '⚙️',
      title: 'Tecnología Avanzada',
      description: 'Equipos de última generación para precisión milimétrica'
    },
    {
      icon: '👨‍⚕️',
      title: 'Expertos Certificados',
      description: 'Personal altamente capacitado con años de experiencia'
    },
    {
      icon: '💯',
      title: 'Garantía Total',
      description: 'Respaldamos nuestro trabajo con garantía completa'
    }
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Sobre Nosotros</h2>
            <p className="about-intro">
              Con más de 15 años de experiencia, Opticolorsmx se ha consolidado como 
              un laboratorio óptico líder en México, comprometido con la excelencia 
              y la innovación tecnológica.
            </p>
            <p className="about-description">
              Nuestro equipo de expertos utiliza tecnología de punta para garantizar 
              que cada lente sea fabricado con la máxima precisión y calidad. Desde 
              lentes progresivos hasta tratamientos especializados, cada producto 
              pasa por rigurosos controles de calidad.
            </p>

            <div className="about-stats-inline">
              <div className="stat-inline">
                <div className="stat-inline-number">15+</div>
                <div className="stat-inline-text">Años</div>
              </div>
              <div className="stat-inline">
                <div className="stat-inline-number">50K+</div>
                <div className="stat-inline-text">Clientes</div>
              </div>
              <div className="stat-inline">
                <div className="stat-inline-number">99%</div>
                <div className="stat-inline-text">Satisfacción</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="visual-card">
            <div className="visual-icon">🔬</div>
            <h3>Tecnología de Precisión</h3>
            <p>Equipos de medición láser y tallado digital para resultados perfectos</p>
          </div>
          <div className="visual-bg">
            <div className="floating-element element-1">👓</div>
            <div className="floating-element element-2">💎</div>
            <div className="floating-element element-3">⚡</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
