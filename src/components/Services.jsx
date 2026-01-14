import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Services.css'

function Services({ scrollY }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Calculate parallax offset for background
  const parallaxOffset = scrollY ? scrollY * 0.3 : 0

  const services = [
    {
      icon: '🔬',
      title: 'Lentes Progresivos',
      description: 'Tecnología de última generación para una visión perfecta a todas las distancias.',
      features: ['Diseño personalizado', 'Transición suave', 'Anti-reflejo']
    },
    {
      icon: '🕶️',
      title: 'Lentes de Sol',
      description: 'Protección UV total con diseños modernos y tratamientos especializados.',
      features: ['Polarizados', 'Fotocromáticos', 'Graduados']
    },
    {
      icon: '💎',
      title: 'Tratamientos Premium',
      description: 'Aplicamos los mejores tratamientos para cuidar tus lentes y tu vista.',
      features: ['Anti-rayones', 'Hidrofóbico', 'Blue Light']
    },
    {
      icon: '👓',
      title: 'Lentes Deportivos',
      description: 'Resistencia y precisión para tu actividad física favorita.',
      features: ['Impacto resistente', 'Ventilación', 'Grip perfecto']
    },
    {
      icon: '📱',
      title: 'Lentes Blue Light',
      description: 'Protege tus ojos de pantallas digitales con tecnología avanzada.',
      features: ['Anti-fatiga', 'Mayor contraste', 'Descanso visual']
    },
    {
      icon: '⚡',
      title: 'Servicio Express',
      description: 'Entrega rápida sin comprometer la calidad de fabricación.',
      features: ['24-48 horas', 'Urgencias', 'Garantía total']
    }
  ]

  const handleWhatsAppClick = (serviceTitle) => {
    const phoneNumber = '5215515037150' // WhatsApp number (add 521 for Mexico format)
    const message = `Hola, me gustaría obtener más información sobre: ${serviceTitle}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="services" ref={ref}>
      <div 
        className="services-background" 
        style={{ 
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        <div className="services-overlay"></div>
      </div>
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Nuestros Servicios</h2>
          <p className="services-subtitle">
            Soluciones ópticas integrales con tecnología de vanguardia
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                className="service-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsAppClick(service.title)}
              >
                Me interesa
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
