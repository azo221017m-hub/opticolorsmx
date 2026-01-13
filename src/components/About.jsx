import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import './About.css'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Carousel state
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    '/opticolorsimg1.jpeg',
    '/opticolorsimg2.jpeg',
    '/opticolorsimg3.jpeg',
    '/opticolorsimg4.jpeg',
    '/opticolorsimg5.jpeg'
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(timer)
  }, [images.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index) => {
    setCurrentImage(index)
  }

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
              Con más de 17 años de experiencia, Opticolors es una empresa mexicana que se ha consolidado como 
              un laboratorio óptico de confianza, comprometido con la excelencia 
              y la innovación tecnológica para cuidar la salud visual de todas y todos los mexicanos.
            </p>
            <p className="about-description">
              Nuestro equipo de expertos utiliza tecnología de punta para garantizar 
              que cada lente sea fabricado con la máxima precisión y calidad. Desde 
              lentes progresivos hasta servicios especializados, cada producto 
              pasa por un control de calidad.
            </p>
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
            <div className="carousel-container">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt={`Opticolors ${currentImage + 1}`}
                  className="carousel-image"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              <button className="carousel-btn prev" onClick={prevImage}>
                ‹
              </button>
              <button className="carousel-btn next" onClick={nextImage}>
                ›
              </button>

              <div className="carousel-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentImage ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
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
