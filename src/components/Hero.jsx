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
            Dedicados a
            <br />
            <span className="highlight">tu salud visual.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Laboratorio óptico con tecnología de vanguardia,
            <br /> ofreciendo calidad, rapidez, atención y servicio personalizado.
          </motion.p>

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
              17+
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
              1 Hra.
            </motion.div>
            <div className="stat-label">Te entregamos tus lentes</div>
          </div>
          <div className="stat">
            <motion.div 
              className="stat-number"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              100%
            </motion.div>
            <div className="stat-label">Trabajos Garantizados
               </div>
          </div>
        </motion.div>
      </div>

          </section>
  )
}

export default Hero
