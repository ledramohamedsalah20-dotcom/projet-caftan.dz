import React from 'react';
import { useTranslation } from 'react-i18next';
import './Boutique.css';

const Boutique = () => {
  const { t } = useTranslation();

  return (
    <section className="boutique" id="boutique">
      <h2>{t('boutique.title')}</h2>
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
          <h3>{t('boutique.subtitle')}</h3>
          <div className="info-item">
            <span className="info-label">{t('boutique.address_label')}</span>
            <span>{t('boutique.address')}</span>
          </div>
          <div className="info-item">
            <span className="info-label">{t('boutique.hours_label')}</span>
            <span>{t('boutique.hours')}</span>
          </div>
          <div className="info-item">
            <span className="info-label">{t('boutique.phone_label')}</span>
            <span>{t('boutique.phone')}</span>
          </div>
          <div className="info-item">
            <span className="info-label">{t('boutique.email_label')}</span>
            <span>{t('boutique.email')}</span>
          </div>
          <button className="btn-rdv">{t('boutique.rdv')}</button>
        </div>
      </div>
    </section>
  );
};

export default Boutique;