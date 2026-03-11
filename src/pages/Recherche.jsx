import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Recherche.css';

const Recherche = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Tous les produits (à mettre dans un fichier séparé plus tard)
  const allProducts = [
    { id: 1, nom: 'Rubis', prix: 150000, categorie: 'Collection Marrakech', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b' },
    { id: 2, nom: 'Ivoire', prix: 145000, categorie: 'Collection Fès', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b' },
    { id: 3, nom: 'Saphir', prix: 165000, categorie: 'Collection Casablanca', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b' },
    { id: 4, nom: 'Marron', prix: 140000, categorie: 'Collection Marrakech', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b' },
    { id: 5, nom: 'Émeraude', prix: 170000, categorie: 'Collection Fès', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b' },
    { id: 6, nom: 'Ébène', prix: 155000, categorie: 'Collection Casablanca', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b' },
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [location.search]);

  const performSearch = (query) => {
    setLoading(true);
    // Simulation de recherche (filtrage côté client)
    setTimeout(() => {
      const filtered = allProducts.filter(product =>
        product.nom.toLowerCase().includes(query.toLowerCase()) ||
        product.categorie.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
    }, 500);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-DZ', {
      style: 'currency',
      currency: 'DZD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="recherche-page">
      <h1>{t('search.results_for', 'Résultats pour')} "{searchQuery}"</h1>
      
      {loading ? (
        <div className="loading-spinner">{t('search.loading', 'Recherche en cours...')}</div>
      ) : (
        <>
          <p className="results-count">
            {results.length} {results.length > 1 ? t('search.results', 'résultats') : t('search.result', 'résultat')}
          </p>
          
          {results.length === 0 ? (
            <div className="no-results">
              <p>{t('search.no_results', 'Aucun résultat trouvé.')}</p>
              <p>{t('search.try_again', 'Essayez avec d\'autres mots-clés.')}</p>
            </div>
          ) : (
            <div className="results-grid">
              {results.map(product => (
                <div key={product.id} className="result-card">
                  <img src={product.image} alt={product.nom} />
                  <h3>{product.nom}</h3>
                  <p className="product-category">{product.categorie}</p>
                  <p className="product-price">{formatPrice(product.prix)}</p>
                  <button 
                    className="btn-add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    {t('collections.add_to_cart', 'Ajouter au panier')}
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Recherche;