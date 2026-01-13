import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Contact.css'

function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    appointmentType: 'Primera cita'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Send form data via WhatsApp
    const phoneNumber = '5215515037150' // WhatsApp number (add 521 for Mexico format)
    const message = `*Nuevo mensaje de contacto*
    
📋 *Tipo de Cita:* ${formData.appointmentType}
👤 *Nombre:* ${formData.name}
 *Mensaje:* ${formData.message}`
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({ name: '', message: '', appointmentType: 'Primera cita' })
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Ubicación',
      info: 'Ciudad de México, México',
      detail: 'Calle Tacuba 37 cuarto piso consultorio 413-A',
      isMap: true
    },
    {
      icon: '📞',
      title: 'Teléfono',
      info: '55 1503 7150',
      detail: 'Lun - Vie: 9:00 - 18:00'
    }
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Contáctanos</h2>
          <p className="contact-subtitle">
            Estamos listos para ayudarte con tus necesidades ópticas
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="info-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="info-icon">{item.icon}</div>
                <div className="info-content">
                  <h3>{item.title}</h3>
                  <p className="info-main">{item.info}</p>
                  <p className="info-detail">{item.detail}</p>
                  {item.isMap && (
                    <div className="map-container" style={{ marginTop: '15px', borderRadius: '10px', overflow: 'hidden', height: '200px' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5677!2d-99.1405!3d19.4358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92c5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sCalle%20Tacuba%2037%2C%20Centro%20Hist%C3%B3rico%2C%20Cuauht%C3%A9moc%2C%2006000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación Opticolorsmx"
                      ></iframe>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3>Síguenos</h3>
              <div className="social-icons">
                <motion.a
                  href="#"
                  className="social-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  📘
                </motion.a>
                <motion.a
                  href="#"
                  className="social-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  📷
                </motion.a>
                <motion.a
                  href="#"
                  className="social-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  🐦
                </motion.a>
                <motion.a
                  href="#"
                  className="social-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  💼
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Juan Pérez"
                />
              </div>

              <div className="form-group">
                <label htmlFor="appointmentType">Tipo de Cita</label>
                <div className="appointment-selector">
                  {['Primera cita', 'Cita de seguimiento', 'Reservar espacio'].map((type) => (
                    <motion.label
                      key={type}
                      className={`appointment-option ${formData.appointmentType === type ? 'selected' : ''}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="appointmentType"
                        value={type}
                        checked={formData.appointmentType === type}
                        onChange={handleChange}
                      />
                      <span className="appointment-label">{type}</span>
                    </motion.label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
