import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, ShoppingCart, Search, User, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const messages = [
  { fr: "Livraison disponible en Algérie", ar: "التوصيل متاح في الجزائر" },
  { fr: "Expédition nationale avec soin", ar: "شحن وطني بعناية" }
];

function App() {
  const [msgIndex, setMsgIndex] = useState(0);
  const { i18n } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'ar' : 'fr');
  };

  const currentMsg = messages[msgIndex][i18n.language];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR PRO */}
      <nav className="bg-black text-white shadow-lg fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-8 py-2.5 flex items-center justify-between">
          
          {/* GAUCHE: Logo centré vertical + Socials blancs purs */}
          <div className="flex items-center gap-8">
            <img 
              src="/image.png"
              alt="Caftan Lamaa" 
              className="h-14 w-14 rounded-full object-contain bg-white/5 border border-white/20 hover:border-white/50 transition-all duration-300 shadow-md" 
            />
            <div className="flex items-center gap-6 border-l border-white/20 pl-8">
              <a 
                href="https://www.instagram.com/caftan_lamaa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={22} strokeWidth={2} />
              </a>
              <a 
                href="https://www.facebook.com/613852521806463/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-transform duration-300"
              >
                <Facebook size={22} strokeWidth={2} />
              </a>
              <a 
                href="https://www.tiktok.com/@myriellecollection" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-transform duration-300"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* CENTRE: Messages */}
          <div className="flex-1 flex justify-center px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={msgIndex + i18n.language}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium text-white text-center tracking-wide"
              >
                {currentMsg}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DROITE: Actions */}
          <div className="flex items-center gap-5">
            <button className="text-white hover:scale-110 transition-transform p-2">
              <Search size={22} strokeWidth={2} />
            </button>
            
            <button className="text-white hover:scale-110 transition-transform p-2">
              <User size={22} strokeWidth={2} />
            </button>

            <button className="text-white hover:scale-110 transition-transform p-2">
              <ShoppingCart size={22} strokeWidth={2} />
            </button>

            <button 
              onClick={toggleLang} 
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-md transition-all text-xs font-bold uppercase text-white"
            >
              <Globe size={15} strokeWidth={2} />
              {i18n.language}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO VIDE */}
      <main className="pt-20">
        {/* Contenu vide */}
      </main>
    </div>
  );
}

export default App;
