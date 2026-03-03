import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/mentions-legales">{t('footer.legal')}</a>
          <a href="/cgv">{t('footer.terms')}</a>
          <a href="/confidentialite">{t('footer.privacy')}</a>
          <a href="/contact">{t('footer.contact')}</a>
        </div>
        <div className="footer-social">
          <a href="https://www.tiktok.com/@myriellecollection" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://www.instagram.com/caftan_lamaa/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/61574210993283" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
        <div className="footer-copyright">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;