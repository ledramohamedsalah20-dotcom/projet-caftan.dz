import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, ShoppingCart, Search, User, Globe, X, Trash2, Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const IncognitoPasswordToggle = ({ showPassword, onClick }) => (
  <motion.div
    onClick={onClick}
    className="cursor-pointer select-none"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg width="36" height="36" viewBox="0 0 64 64" className="drop-shadow-lg">
      <motion.path
        d="M 8 20 Q 32 10 56 20 L 52 28 Q 32 22 12 28 Z"
        fill="#4A5568"
        animate={{ 
          d: showPassword 
            ? "M 8 20 Q 32 10 56 20 L 52 28 Q 32 22 12 28 Z"
            : "M 8 18 Q 32 8 56 18 L 52 26 Q 32 20 12 26 Z"
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.ellipse
        cx="32"
        cy="22"
        rx="28"
        ry="6"
        fill="#2D3748"
        animate={{ ry: showPassword ? 6 : 5 }}
        transition={{ duration: 0.3 }}
      />
      <motion.circle
        cx="32"
        cy="38"
        r="18"
        fill="#CBD5E0"
        animate={{ scale: showPassword ? 1 : 0.98 }}
        transition={{ duration: 0.3 }}
      />
      <g>
        <AnimatePresence mode="wait">
          {showPassword ? (
            <motion.g key="visible">
              <circle cx="24" cy="38" r="6" fill="#1A202C" opacity="0.8" />
              <motion.circle 
                cx="24" 
                cy="38" 
                r="3" 
                fill="#3B82F6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.g>
          ) : (
            <motion.g key="hidden">
              <motion.rect
                x="18"
                y="36"
                width="12"
                height="4"
                rx="2"
                fill="#1A202C"
                opacity="0.9"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
              />
            </motion.g>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {showPassword ? (
            <motion.g key="visible">
              <circle cx="40" cy="38" r="6" fill="#1A202C" opacity="0.8" />
              <motion.circle 
                cx="40" 
                cy="38" 
                r="3" 
                fill="#3B82F6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              />
            </motion.g>
          ) : (
            <motion.g key="hidden">
              <motion.rect
                x="34"
                y="36"
                width="12"
                height="4"
                rx="2"
                fill="#1A202C"
                opacity="0.9"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
              />
            </motion.g>
          )}
        </AnimatePresence>
        <rect x="30" y="37" width="4" height="2" rx="1" fill="#1A202C" />
      </g>
      <motion.path
        d="M 32 42 L 30 46 L 34 46 Z"
        fill="#A0AEC0"
        animate={{ d: showPassword ? "M 32 42 L 30 46 L 34 46 Z" : "M 32 42 L 31 45 L 33 45 Z" }}
      />
      <motion.line
        x1="26"
        y1="50"
        x2="38"
        y2="50"
        stroke="#718096"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ 
          y1: showPassword ? 50 : 51,
          y2: showPassword ? 50 : 51
        }}
      />
    </svg>
  </motion.div>
);

const messages = [
  { fr: "Livraison disponible en Algérie", ar: "التوصيل متاح في الجزائر" },
  { fr: "Expédition nationale avec soin", ar: "شحن وطني بعناية" }
];

// Traductions complètes
const translations = {
  fr: {
    cart: "Panier",
    emptyCart: "Votre panier est vide",
    search: "Rechercher un produit...",
    searchHelper: "Appuyez sur Entrée pour rechercher ou Échap pour fermer",
    welcome: "Bienvenue Chez Caftan Lamaa",
    createAccount: "Créer un compte",
    email: "Email",
    password: "Mot de passe",
    forgotPassword: "Mot de passe oublié ?",
    signin: "Se connecter",
    signup: "S'inscrire",
    newCustomer: "Nouveau client ?",
    alreadyRegistered: "Déjà inscrit ?",
    continueApple: "Continuer avec Apple",
    continueGoogle: "Continuer avec Google",
    connecting: "Connexion...",
    size: "Taille",
    color: "Couleur",
    total: "Total",
    order: "Commander",
    finalize: "Finaliser mes achats"
  },
  ar: {
    cart: "السلة",
    emptyCart: "سلة التسوق فارغة",
    search: "ابحث عن منتج...",
    searchHelper: "اضغط Enter للبحث أو Esc للإغلاق",
    welcome: "مرحبا بكم في قفطان لمى",
    createAccount: "إنشاء حساب",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    signin: "تسجيل الدخول",
    signup: "التسجيل",
    newCustomer: "عميل جديد؟",
    alreadyRegistered: "مسجل بالفعل؟",
    continueApple: "متابعة مع Apple",
    continueGoogle: "متابعة مع Google",
    connecting: "جاري الاتصال...",
    size: "المقاس",
    color: "اللون",
    total: "المجموع",
    order: "اطلب",
    finalize: "إتمام الطلب"
  }
};

function App() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr');
  
  const [cartItems, setCartItems] = useState([]);

  const { i18n } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const toggleLang = () => {
    const newLang = currentLang === 'fr' ? 'ar' : 'fr';
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const currentMsg = messages[msgIndex][currentLang];
  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-white" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* NAVBAR */}
      <nav className="bg-black text-white shadow-lg fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-8 py-2.5 flex items-center justify-between">
          
          <div className="flex items-center gap-8">
            <img 
              src="/logo.png"
              alt="Caftan Lamaa" 
              className="h-14 w-14 rounded-full object-contain bg-white/5 border border-white/20 hover:border-white/50 transition-all duration-300 shadow-md" 
            />
            <div className="flex items-center gap-6 border-l border-white/20 pl-8">
              <a href="https://www.instagram.com/caftan_lamaa/" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform duration-300">
                <Instagram size={22} strokeWidth={2} />
              </a>
              <a href="https://www.facebook.com/613852521806463/" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform duration-300">
                <Facebook size={22} strokeWidth={2} />
              </a>
              <a href="https://www.tiktok.com/@myriellecollection" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform duration-300">
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={msgIndex + currentLang}
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

          <div className="flex items-center gap-5">
            <button 
              onClick={() => setShowSearch(true)}
              className="text-white hover:scale-110 transition-transform p-2"
            >
              <Search size={22} strokeWidth={2} />
            </button>
            
            <button onClick={() => setShowLogin(true)} className="text-white hover:scale-110 transition-transform p-2">
              <User size={22} strokeWidth={2} />
            </button>

            <button 
              onClick={() => setShowCart(true)}
              className="text-white hover:scale-110 transition-transform p-2 relative"
            >
              <ShoppingCart size={22} strokeWidth={2} />
              {cartItems.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                >
                  {cartItems.length}
                </motion.span>
              )}
            </button>

            <button onClick={toggleLang} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-md transition-all text-xs font-bold uppercase text-white">
              <Globe size={15} strokeWidth={2} />
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentLang}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentLang.toUpperCase()}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* MODAL LOGIN */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setShowLogin(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <motion.button 
                onClick={() => setShowLogin(false)} 
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={32} />
              </motion.button>

              <div className="form-container">
                <motion.p 
                  className="title"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {isSignup ? t.createAccount : t.welcome}
                </motion.p>

                <form className="form" onSubmit={handleSubmit}>
                  <motion.input 
                    type="email" 
                    className="input" 
                    placeholder={t.email}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileFocus={{ scale: 1.02, borderColor: "#14b8a6" }}
                  />

                  <div className="relative">
                    <motion.input 
                      type={showPassword ? "text" : "password"}
                      className="input pr-14" 
                      placeholder={t.password}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      whileFocus={{ scale: 1.02, borderColor: "#14b8a6" }}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      <IncognitoPasswordToggle 
                        showPassword={showPassword} 
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                  </div>

                  {!isSignup && (
                    <motion.p 
                      className="page-link"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="page-link-label">{t.forgotPassword}</span>
                    </motion.p>
                  )}

                  <motion.button 
                    type="submit" 
                    className="form-btn relative overflow-hidden"
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <motion.div 
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          />
                          <span>{t.connecting}</span>
                        </motion.div>
                      ) : (
                        <motion.span
                          key="text"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                        >
                          {isSignup ? t.signup : t.signin}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>

                <motion.p 
                  className="sign-up-label"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {isSignup ? t.alreadyRegistered : t.newCustomer}
                  <span className="sign-up-link" onClick={() => setIsSignup(!isSignup)}>
                    {isSignup ? t.signin : t.createAccount}
                  </span>
                </motion.p>

                <motion.div 
                  className="buttons-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button 
                    className="apple-login-button"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="apple-icon" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
                    </svg>
                    <span className="font-semibold">{t.continueApple}</span>
                  </motion.button>
                  
                  <motion.button 
                    className="google-login-button"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    <span className="font-semibold">{t.continueGoogle}</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RECHERCHE */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            onClick={() => {
              setShowSearch(false);
              setSearchQuery('');
            }}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              onClick={() => {
                setShowSearch(false);
                setSearchQuery('');
              }}
              className="absolute top-8 right-8 text-white hover:text-gray-300 z-10"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={40} strokeWidth={1.5} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder={t.search}
                  className="w-full bg-transparent border-b-2 border-white/30 focus:border-white text-white text-3xl md:text-5xl font-light placeholder-white/50 outline-none py-6 px-4 transition-all duration-300"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      console.log('Recherche:', searchQuery);
                      setShowSearch(false);
                      setSearchQuery('');
                    }
                    if (e.key === 'Escape') {
                      setShowSearch(false);
                      setSearchQuery('');
                    }
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: searchQuery ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/60 text-sm mt-6 tracking-wide"
              >
                {t.searchHelper}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PANIER DRAWER */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[100]"
              onClick={() => setShowCart(false)}
            />

            <motion.div
              initial={{ x: currentLang === 'ar' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: currentLang === 'ar' ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className={`fixed ${currentLang === 'ar' ? 'left-0' : 'right-0'} top-0 h-full w-full max-w-md bg-white shadow-2xl z-[110] flex flex-col`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-2xl font-normal text-black">
                  {t.cart} {cartItems.length > 0 && `(${cartItems.length})`}
                </h2>
                <motion.button
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} className="text-gray-600" />
                </motion.button>
              </div>

              {/* Content */}
              {cartItems.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                  >
                    <ShoppingCart size={100} strokeWidth={1} className="text-gray-300" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl font-normal text-black mt-8"
                  >
                    {t.emptyCart}
                  </motion.h3>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          className="flex gap-4 pb-6 border-b"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-normal text-black">{item.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">
                              {t.size}: {item.size} | {t.color}: {item.color}
                            </p>
                            <p className="text-lg font-normal text-black mt-2">
                              {item.price.toLocaleString()} DZD
                            </p>

                            <div className="flex items-center gap-3 mt-3">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="font-normal w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition"
                              >
                                <Plus size={14} />
                              </button>

                              <button
                                onClick={() => removeItem(item.id)}
                                className="ml-auto text-red-500 hover:text-red-700 transition"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-normal text-gray-700 text-lg">{t.total}</span>
                      <span className="font-normal text-black text-2xl">
                        {totalPrice.toLocaleString()} DZD
                      </span>
                    </div>
                    
                    <button
                      onClick={() => setShowCart(false)}
                      className="w-full bg-black text-white py-4 font-normal text-base hover:bg-gray-800 transition"
                    >
                      {t.order}
                    </button>
                    
                    <button
                      className="w-full bg-gray-800 text-white py-4 font-normal text-base hover:bg-gray-700 transition"
                    >
                      {t.finalize}
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="pt-20"></main>
    </div>
  );
}

export default App;
