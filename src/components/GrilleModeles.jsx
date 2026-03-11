import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext'; // Ajout
import './GrilleModeles.css';

const modeles = [
  { id: 1, nomKey: 'rubis', nom: 'Rubis', prix: 150000, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 2, nomKey: 'ivoire', nom: 'Ivoire', prix: 145000, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 3, nomKey: 'saphir', nom: 'Saphir', prix: 165000, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 4, nomKey: 'marron', nom: 'Marron', prix: 140000, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 5, nomKey: 'emeraude', nom: 'Émeraude', prix: 170000, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 6, nomKey: 'ebene', nom: 'Ébène', prix: 155000, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
];

const GrilleModeles = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart(); // Ajout

  const handleAddToCart = (modele) => {
    addToCart({
      id: modele.id,
      nom: modele.nom,
      price: modele.prix,
      image: modele.image
    });
    // Optionnel : ajouter une notification
    alert(`${modele.nom} ajouté au panier !`);
  };

  return (
    <section className="grille-modeles">
      <h2>{t('collections.title')}</h2>
      <div className="modele-grid">
        {modeles.map(modele => (
          <div key={modele.id} className="modele-card">
            <div className="modele-image-container">
              <img src={modele.image} alt={t(`collections.${modele.nomKey}`)} />
              <div className="modele-overlay">
                <button className="btn-voir">{t('collections.view_details', 'Voir détails')}</button>
              </div>
            </div>
            <h3>{t(`collections.${modele.nomKey}`)}</h3>
            <p className="modele-prix">{new Intl.NumberFormat('fr-DZ', { style: 'currency', currency: 'DZD', minimumFractionDigits: 0 }).format(modele.prix)}</p>
            <button className="btn-add-to-cart" onClick={() => handleAddToCart(modele)}>
              {t('collections.add_to_cart', 'Ajouter au panier')}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrilleModeles;