import React from 'react';
import { useTranslation } from 'react-i18next';
import './Atelier.css';

const Atelier = () => {
  const { t } = useTranslation();

  return (
    <section className="atelier">
      <div className="atelier-content">
        <h2>{t('atelier.title')}</h2>
        <div className="ornement"></div>
        <p className="atelier-texte">{t('atelier.text')}</p>
        <button className="btn-atelier">{t('atelier.cta')}</button>
      </div>
    </section>
  );
};

export default Atelier;