import React from 'react';
import { useTranslation } from 'react-i18next';
import './GrilleModeles.css';

const modeles = [
  { id: 1, nomKey: 'rubis', prix: 150000, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 2, nomKey: 'ivoire', prix: 145000, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 3, nomKey: 'saphir', prix: 165000, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 4, nomKey: 'marron', prix: 140000, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 5, nomKey: 'emeraude', prix: 170000, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 6, nomKey: 'ebene', prix: 155000, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
];

const GrilleModeles = () => {
  const { t } = useTranslation();

  return (
    <section className="grille-modeles">
      <h2>{t('collections.title')}</h2>
      <div className="modele-grid">
        {modeles.map(modele => (
          <div key={modele.id} className="modele-card">
            <div className="modele-image-container">
              <img src={modele.image} alt={t(`collections.${modele.nomKey}`)} />
              <div className="modele-overlay">
                <button className="btn-voir">{t('collections.view_details')}</button>
              </div>
            </div>
            <h3>{t(`collections.${modele.nomKey}`)}</h3>
            <p className="modele-prix">{t('common.price', { prix: modele.prix.toLocaleString() })}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrilleModeles;