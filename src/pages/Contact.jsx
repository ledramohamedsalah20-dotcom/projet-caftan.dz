import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Cacher le message après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <h1>{t('contact.title', 'Contactez-nous')}</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>{t('contact.info_title', 'Nos coordonnées')}</h2>
          
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>{t('contact.address_label', 'Adresse')}</h3>
              <p>123 Rue Didouche Mourad, Alger Centre, 16000</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>{t('contact.phone_label', 'Téléphone')}</h3>
              <p>+213 (0) 21 23 45 67</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>{t('contact.email_label', 'Email')}</h3>
              <p>contact@caftanlamaa.dz</p>
            </div>
          </div>
          
          <div className="contact-hours">
            <h3>{t('contact.hours_label', 'Horaires d\'ouverture')}</h3>
            <p>{t('contact.hours', 'Lundi - Samedi : 10h - 19h')}</p>
            <p>{t('contact.hours_sunday', 'Dimanche : Fermé')}</p>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>{t('contact.form_title', 'Envoyez-nous un message')}</h2>
          
          {isSubmitted && (
            <div className="success-message">
              {t('contact.success', 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t('contact.name', 'Nom complet')} *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.name_placeholder', 'Votre nom')}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('contact.email', 'Email')} *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.email_placeholder', 'votre@email.com')}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('contact.message', 'Message')} *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder={t('contact.message_placeholder', 'Votre message...')}
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-submit"
              disabled={isLoading}
            >
              {isLoading ? t('contact.sending', 'Envoi en cours...') : t('contact.send', 'Envoyer le message')}
            </button>
          </form>
        </div>
      </div>
      
      <div className="contact-map">
        <h2>{t('contact.map_title', 'Nous trouver')}</h2>
        <div className="map-container">
          <iframe
            title="Caftan Lamaa Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12792.5123456789!2d3.058678!3d36.753888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e4b123456789%3A0x123456789abcdef!2sAlger%20Centre%2C%20Alger!5e0!3m2!1sfr!2sdz!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;