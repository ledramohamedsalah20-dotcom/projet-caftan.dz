import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="hero-caftan">{t('hero.title_caftan')}</span>{' '}
          <span className="hero-lamaa">{t('hero.title_lamaa')}</span>
        </h1>
        <p className="hero-description">{t('hero.description')}</p>
        <button className="btn-hero">{t('hero.cta')}</button>
      </div>
    </section>
  );
};

export default Hero;