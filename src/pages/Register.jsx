import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import './Login.css'; // On réutilise le même CSS

const Register = () => {
  const { t } = useTranslation();
  const { register } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError(t('auth.password_mismatch', 'Les mots de passe ne correspondent pas'));
      return;
    }

    if (formData.password.length < 6) {
      setError(t('auth.password_short', 'Le mot de passe doit contenir au moins 6 caractères'));
      return;
    }

    setIsLoading(true);

    try {
      await register(formData.name, formData.email, formData.password);
      navigate('/'); // Rediriger vers la page d'accueil
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>{t('auth.register_title', 'Inscription')}</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">{t('auth.name', 'Nom complet')}</label>
            <div className="input-with-icon">
              <FaUser className="input-icon" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('auth.name_placeholder', 'Votre nom')}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">{t('auth.email', 'Email')}</label>
            <div className="input-with-icon">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('auth.email_placeholder', 'votre@email.com')}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">{t('auth.password', 'Mot de passe')}</label>
            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder={t('auth.password_placeholder', '********')}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">{t('auth.confirm_password', 'Confirmer le mot de passe')}</label>
            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder={t('auth.confirm_password_placeholder', '********')}
              />
            </div>
          </div>

         <button 
            type="submit" 
            className="btn-auth"
            disabled={isLoading}
          >
            {isLoading ? t('auth.registering', 'Inscription en cours...') : t('auth.register', "S'inscrire")}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/login">{t('auth.has_account', 'Déjà un compte ? Connectez-vous')}</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;