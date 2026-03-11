import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar, FaRegStar, FaUser, FaTrash } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext'; // Importer le contexte d'auth
import './AvisClients.css';

const AvisClients = () => {
  const { t } = useTranslation();
  const { user } = useAuth(); // Récupérer l'utilisateur connecté depuis AuthContext
  const [avis, setAvis] = useState([]);
  const [newAvis, setNewAvis] = useState({
    nom: '',
    note: 5,
    commentaire: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Charger les avis depuis localStorage au démarrage
  useEffect(() => {
    const savedAvis = localStorage.getItem('avis');
    if (savedAvis) {
      setAvis(JSON.parse(savedAvis));
    } else {
      // Pas d'avis par défaut - tableau vide
      setAvis([]);
      localStorage.setItem('avis', JSON.stringify([]));
    }
  }, []);

  // Sauvegarder les avis dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('avis', JSON.stringify(avis));
  }, [avis]);

  const handleChange = (e) => {
    setNewAvis({
      ...newAvis,
      [e.target.name]: e.target.value
    });
  };

  const handleNoteChange = (note) => {
    setNewAvis({
      ...newAvis,
      note: note
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi
    setTimeout(() => {
      const newAvisItem = {
        id: Date.now(),
        nom: user ? user.name : newAvis.nom || 'Anonyme',
        note: newAvis.note,
        commentaire: newAvis.commentaire,
        date: new Date().toISOString().split('T')[0],
        verified: user ? true : false, // Si connecté, avis vérifié
        userId: user ? user.id : null // Pour tracker qui a posté
      };

      setAvis([newAvisItem, ...avis]);
      setNewAvis({ nom: '', note: 5, commentaire: '' });
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1000);
  };

  const handleDelete = (id) => {
    // Seul l'admin ou l'utilisateur qui a posté peut supprimer
    const avisToDelete = avis.find(item => item.id === id);
    
    if (user && (user.isAdmin || avisToDelete.userId === user.id)) {
      if (window.confirm(t('avis.confirm_delete', 'Êtes-vous sûr de vouloir supprimer cet avis ?'))) {
        setAvis(avis.filter(item => item.id !== id));
      }
    }
  };

  const renderStars = (note, interactive = false) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (interactive) {
        stars.push(
          <span key={i} onClick={() => handleNoteChange(i)} style={{ cursor: 'pointer' }}>
            {i <= newAvis.note ? <FaStar className="star-filled" /> : <FaRegStar className="star-empty" />}
          </span>
        );
      } else {
        stars.push(
          i <= note ? <FaStar key={i} className="star-filled" /> : <FaRegStar key={i} className="star-empty" />
        );
      }
    }
    return stars;
  };

  // Calculer les statistiques
  const averageNote = avis.length > 0 
    ? (avis.reduce((acc, item) => acc + item.note, 0) / avis.length).toFixed(1)
    : 0;
  
  const recommendPercentage = avis.length > 0
    ? Math.round((avis.filter(item => item.note >= 4).length / avis.length) * 100)
    : 0;

  return (
    <div className="avis-page">
      <h1>{t('avis.title', 'Avis de nos clients')}</h1>
      
      {/* Statistiques - affichées seulement s'il y a des avis */}
      {avis.length > 0 ? (
        <div className="avis-stats">
          <div className="stat-item">
            <span className="stat-value">{averageNote}</span>
            <span className="stat-label">{t('avis.note_moyenne', 'Note moyenne')}</span>
            <div className="stat-stars">{renderStars(Math.round(averageNote))}</div>
          </div>
          <div className="stat-item">
            <span className="stat-value">{avis.length}</span>
            <span className="stat-label">{t('avis.total_avis', 'Avis')}</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{recommendPercentage}%</span>
            <span className="stat-label">{t('avis.recommandent', 'Recommandent')}</span>
          </div>
        </div>
      ) : (
        <div className="no-avis-message">
          <p>{t('avis.no_avis', 'Soyez le premier à donner votre avis !')}</p>
        </div>
      )}

      {/* Formulaire pour laisser un avis */}
      <div className="avis-form-section">
        <h2>{t('avis.laisser_avis', 'Laissez votre avis')}</h2>
        
        {submitSuccess && (
          <div className="success-message">
            {t('avis.success', 'Merci pour votre avis !')}
          </div>
        )}

        <form onSubmit={handleSubmit} className="avis-form">
          {!user && (
            <div className="form-group">
              <label htmlFor="nom">{t('avis.votre_nom', 'Votre nom')}</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={newAvis.nom}
                onChange={handleChange}
                placeholder={t('avis.nom_placeholder', 'Ex: Mohamed A.')}
                required={!user}
              />
            </div>
          )}

          <div className="form-group">
            <label>{t('avis.votre_note', 'Votre note')}</label>
            <div className="star-rating">
              {renderStars(newAvis.note, true)}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="commentaire">{t('avis.votre_commentaire', 'Votre commentaire')}</label>
            <textarea
              id="commentaire"
              name="commentaire"
              value={newAvis.commentaire}
              onChange={handleChange}
              rows="4"
              placeholder={t('avis.commentaire_placeholder', 'Partagez votre expérience...')}
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn-submit-avis"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('avis.sending', 'Envoi en cours...') : t('avis.envoyer', 'Envoyer mon avis')}
          </button>
        </form>
      </div>

      {/* Liste des avis */}
      {avis.length > 0 && (
        <div className="avis-list-section">
          <h2>{t('avis.avis_recents', 'Avis récents')}</h2>
          
          <div className="avis-list">
            {avis.map(avisItem => (
              <div key={avisItem.id} className="avis-card">
                <div className="avis-header">
                  <FaUser className="avatar-icon" />
                  <div className="avis-info">
                    <h3>{avisItem.nom}</h3>
                    <div className="avis-meta">
                      <div className="avis-stars">
                        {renderStars(avisItem.note)}
                      </div>
                      <span className="avis-date">{avisItem.date}</span>
                      {avisItem.verified && (
                        <span className="verified-badge">{t('avis.verified', 'Achat vérifié')}</span>
                      )}
                    </div>
                  </div>
                  {/* Bouton supprimer visible seulement pour l'auteur ou l'admin */}
                  {user && (user.isAdmin || avisItem.userId === user.id) && (
                    <button 
                      className="delete-avis"
                      onClick={() => handleDelete(avisItem.id)}
                      title={t('avis.delete', 'Supprimer')}
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
                <p className="avis-commentaire">{avisItem.commentaire}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AvisClients;