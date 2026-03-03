import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaTiktok, FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="https://www.tiktok.com/@myriellecollection" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        <a href="https://www.instagram.com/caftan_lamaa/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/61574210993283" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      </div>
      <div className="navbar-center">
        <h1 className="brand">
          <span className="brand-caftan">{t('navbar.brand_caftan')}</span>{' '}
          <span className="brand-lamaa">{t('navbar.brand_lamaa')}</span>
        </h1>
      </div>
      <div className="navbar-right">
        <FaSearch title={t('navbar.search')} />
        <FaUser title={t('navbar.login')} />
        <FaShoppingCart title={t('navbar.cart')} />
        <div className="language-selector">
          <button onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'active' : ''}>FR</button>
          <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
          <button onClick={() => changeLanguage('ar')} className={i18n.language === 'ar' ? 'active' : ''}>AR</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;