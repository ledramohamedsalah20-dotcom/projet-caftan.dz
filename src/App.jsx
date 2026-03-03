import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GrilleModeles from './components/GrilleModeles';
import Atelier from './components/Atelier';
import Boutique from './components/Boutique';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <GrilleModeles />
      <Atelier />
      <Boutique />
      <Footer />
    </div>
  );
}

export default App;