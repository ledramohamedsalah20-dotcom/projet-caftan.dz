import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  
  // Numéro de téléphone
  const phoneNumber = "0555552255";
  const formattedPhone = "05 55 55 22 55";

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Caftan Lamaa</h3>
          <p>{t('footer.tagline', 'Haute Couture Algérienne depuis 2025')}</p>
        </div>

        <div className="footer-section">
          <h4>{t('footer.contact', 'Contact')}</h4>
          <p>
            <a href={`tel:${phoneNumber}`} className="footer-phone">
              <FaPhone /> {formattedPhone}
            </a>
          </p>
          <p>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="footer-whatsapp">
              <FaWhatsapp /> {t('footer.whatsapp', 'WhatsApp')}
            </a>
          </p>
          <p>
            <a href="mailto:contact@caftanlamaa.dz">contact@caftanlamaa.dz</a>
          </p>
        </div>

        <div className="footer-section">
          <h4>{t('footer.links', 'Liens')}</h4>
          <div className="footer-links">
            <a href="/mentions-legales">{t('footer.legal', 'Mentions Légales')}</a>
            <a href="/cgv">{t('footer.terms', 'CGV')}</a>
            <a href="/confidentialite">{t('footer.privacy', 'Confidentialité')}</a>
            <a href="/contact">{t('footer.contact_link', 'Contact')}</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>{t('footer.social', 'Suivez-nous')}</h4>
          <div className="footer-social">
            <a href="https://www.tiktok.com/@myriellecollection" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://www.instagram.com/caftan_lamaa/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/61574210993283" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>{t('footer.copyright', '© 2025 Caftan Lamaa - Haute Couture Algérienne. Tous droits réservés.')}</p>
      </div>
    </footer>
  );
};

export default Footer;