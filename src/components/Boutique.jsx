import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import './Boutique.css';

const Boutique = () => {
  const { t } = useTranslation();
  
  // Numéro de téléphone
  const phoneNumber = "0555552255";
  const formattedPhone = "05 55 55 22 55";

  const handleRdvClick = () => {
    // Message pré-formaté pour WhatsApp
    const message = encodeURIComponent(
      "Bonjour, je souhaite prendre rendez-vous pour visiter votre boutique et essayer des caftans. Merci de me confirmer une disponibilité."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="boutique" id="boutique">
      <h2>{t('boutique.title', 'Notre Boutique à Alger')}</h2>
      <div className="boutique-container">
        <div className="boutique-map">
          <iframe
            title="Boutique Caftan Lamaa Alger"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12792.5123456789!2d3.058678!3d36.753888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e4b123456789%3A0x123456789abcdef!2sAlger%20Centre%2C%20Alger!5e0!3m2!1sfr!2sdz!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="boutique-infos">
          <h3>{t('boutique.subtitle', 'Venez nous rencontrer')}</h3>
          <div className="info-item">
            <span className="info-label">{t('boutique.address_label', 'Adresse')} :</span>
            <span>123 Rue Didouche Mourad, Alger Centre, 16000</span>
          </div>
          <div className="info-item">
            <span className="info-label">{t('boutique.hours_label', 'Horaires')} :</span>
            <span>{t('boutique.hours', 'Lun - Sam : 10h - 19h')}</span>
          </div>
          <div className="info-item">
            <span className="info-label">{t('boutique.phone_label', 'Téléphone')} :</span>
            <div className="phone-numbers">
              <a href={`tel:${phoneNumber}`} className="phone-link">
                {formattedPhone}
              </a>
            </div>
          </div>
          <div className="info-item">
            <span className="info-label">WhatsApp :</span>
            <a 
              href={`https://wa.me/${phoneNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-link"
            >
              <FaWhatsapp /> {t('boutique.whatsapp', 'WhatsApp')}
            </a>
          </div>
          <div className="info-item">
            <span className="info-label">{t('boutique.email_label', 'Email')} :</span>
            <a href="mailto:boutique@caftanlamaa.dz" className="email-link">
              boutique@caftanlamaa.dz
            </a>
          </div>
          
          {/* Bouton de rendez-vous avec action réelle */}
          <button className="btn-rdv" onClick={handleRdvClick}>
            <FaCalendarAlt /> {t('boutique.rdv', 'Prendre rendez-vous')}
          </button>
          
          <p className="rdv-note">
            {t('boutique.rdv_note', 'Réservez votre créneau pour un essai personnalisé.')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Boutique;