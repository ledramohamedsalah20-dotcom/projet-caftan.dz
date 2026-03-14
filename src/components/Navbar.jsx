import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTiktok, 
  FaWhatsapp,
  FaSearch, 
  FaUser, 
  FaShoppingCart, 
  FaTimes, 
  FaSignOutAlt, 
  FaUserCircle
} from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { cartCount, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Numéro de téléphone (caché mais utilisé pour les liens)
  const phoneNumber = "0555552255";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/recherche?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-DZ', {
      style: 'currency',
      currency: 'DZD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <nav className="navbar">
      {/* Partie gauche - Réseaux sociaux et WhatsApp uniquement */}
      <div className="navbar-left">
        <a href="https://www.tiktok.com/@myriellecollection" target="_blank" rel="noopener noreferrer" title="TikTok">
          <FaTiktok />
        </a>
        <a href="https://www.instagram.com/caftan_lamaa/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/61574210993283" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaFacebook />
        </a>
        {/* WhatsApp - seule icône de contact visible */}
        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" title="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
      
      {/* Centre - Logo */}
      <div className="navbar-center">
        <Link to="/" className="brand-link">
          <h1 className="brand">
            <span className="brand-caftan">{t('navbar.brand_caftan')}</span>{' '}
            <span className="brand-lamaa">{t('navbar.brand_lamaa')}</span>
          </h1>
        </Link>
      </div>
      
      {/* Partie droite - Actions */}
      <div className="navbar-right">
        {/* PAS D'AFFICHAGE DU TÉLÉPHONE ICI - J'AI ENLEVÉ LA SECTION phone-display */}

        {/* Bouton recherche */}
        <div className="nav-icon" onClick={() => setIsSearchOpen(true)}>
          <FaSearch title={t('navbar.search')} />
        </div>
        
        {/* Menu utilisateur */}
        <div className="user-menu-container">
          <div className="nav-icon" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
            <FaUser title={t('navbar.login')} />
          </div>
          
          {isUserMenuOpen && (
            <div className="user-dropdown">
              {user ? (
                // Utilisateur connecté
                <>
                  <div className="user-info">
                    <FaUserCircle className="user-avatar" />
                    <span className="user-name">{user.name}</span>
                    {user.isAdmin && <span className="admin-badge">Admin</span>}
                  </div>
                  <div className="dropdown-divider"></div>
                  <Link to="/profile" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                    Mon profil
                  </Link>
                  <Link to="/commandes" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                    Mes commandes
                  </Link>
                  {user.isAdmin && (
                    <Link to="/admin" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                      Dashboard Admin
                    </Link>
                  )}
                  <div className="dropdown-divider"></div>
                  <button onClick={handleLogout} className="dropdown-item logout-btn">
                    <FaSignOutAlt /> {t('auth.logout', 'Déconnexion')}
                  </button>
                </>
              ) : (
                // Utilisateur non connecté
                <>
                  <Link to="/login" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                    {t('auth.login', 'Se connecter')}
                  </Link>
                  <Link to="/register" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                    {t('auth.register', "S'inscrire")}
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/avis" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                    Avis clients
                  </Link>
                  <Link to="/contact" className="dropdown-item" onClick={() => setIsUserMenuOpen(false)}>
                    Contact
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
        
        {/* Panier */}
        <div className="nav-icon cart-icon-container" onClick={() => setIsCartOpen(true)}>
          <FaShoppingCart title={t('navbar.cart')} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
        
        {/* Sélecteur de langue */}
        <div className="language-selector">
          <button onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'active' : ''}>FR</button>
          <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
          <button onClick={() => changeLanguage('ar')} className={i18n.language === 'ar' ? 'active' : ''}>AR</button>
        </div>
      </div>

      {/* Barre de recherche coulissante */}
      {isSearchOpen && (
        <>
          <div className="search-overlay" onClick={() => setIsSearchOpen(false)}></div>
          <div className="search-drawer">
            <div className="search-drawer-header">
              <h2>{t('search.title', 'Rechercher')}</h2>
              <FaTimes className="close-search" onClick={() => setIsSearchOpen(false)} />
            </div>
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder={t('search.placeholder', 'Tapez votre recherche...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="btn-search">
                <FaSearch /> {t('search.search', 'Rechercher')}
              </button>
            </form>
            <div className="search-suggestions">
              <p>{t('search.suggestions', 'Suggestions')} :</p>
              <div className="suggestion-tags">
                <span onClick={() => {
                  navigate('/recherche?q=Rubis');
                  setIsSearchOpen(false);
                }}>Rubis</span>
                <span onClick={() => {
                  navigate('/recherche?q=Ivoire');
                  setIsSearchOpen(false);
                }}>Ivoire</span>
                <span onClick={() => {
                  navigate('/recherche?q=Saphir');
                  setIsSearchOpen(false);
                }}>Saphir</span>
                <span onClick={() => {
                  navigate('/recherche?q=Marron');
                  setIsSearchOpen(false);
                }}>Marron</span>
                <span onClick={() => {
                  navigate('/recherche?q=Émeraude');
                  setIsSearchOpen(false);
                }}>Émeraude</span>
                <span onClick={() => {
                  navigate('/recherche?q=Ébène');
                  setIsSearchOpen(false);
                }}>Ébène</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Panier coulissant */}
      {isCartOpen && (
        <>
          <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
          <div className="cart-drawer">
            <div className="cart-drawer-header">
              <h2>{t('cart.title', 'Votre Panier')}</h2>
              <FaTimes className="close-cart" onClick={() => setIsCartOpen(false)} />
            </div>
            
            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <p>{t('cart.empty', 'Votre panier est vide')}</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.nom} className="cart-item-image" />
                      <div className="cart-item-details">
                        <h4>{item.nom}</h4>
                        <p className="cart-item-price">{formatPrice(item.price)}</p>
                        <div className="cart-item-quantity">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </div>
                      <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                        <FaTimes />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="cart-total">
                    <span>{t('cart.total', 'Total')} :</span>
                    <span className="total-price">{formatPrice(cartTotal)}</span>
                  </div>
                  <button 
                    className="btn-checkout" 
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/checkout');
                    }}
                  >
                    {t('cart.checkout', 'Passer la commande')}
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;