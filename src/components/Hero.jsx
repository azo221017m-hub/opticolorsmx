import { motion } from 'framer-motion'
import './Hero.css'

function Hero({ scrollY }) {
  const parallaxOffset = scrollY * 0.5

  return (
    <section id="hero" className="hero">
      <div 
        className="hero-background" 
        style={{ 
          transform: `translateY(${parallaxOffset}px) scale(${1 + scrollY * 0.0002})`,
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Visión Clara,
            <br />
            <span className="highlight">Futuro Brillante</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Laboratorio óptico de alta precisión con tecnología de vanguardia.
            Expertos en lentes personalizados y tratamientos especializados.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="primary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Cotizar Ahora
            </motion.button>
            <motion.button
              className="secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Servicios
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="stat">
            <motion.div 
              className="stat-number"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              15+
            </motion.div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
          <div className="stat">
            <motion.div 
              className="stat-number"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              50K+
            </motion.div>
            <div className="stat-label">Clientes Satisfechos</div>
          </div>
          <div className="stat">
            <motion.div 
              className="stat-number"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              99%
            </motion.div>
            <div className="stat-label">Precisión Garantizada</div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
