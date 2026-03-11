import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GrilleModeles from './components/GrilleModeles';
import Atelier from './components/Atelier';
import Boutique from './components/Boutique';
import Footer from './components/Footer';
import Recherche from './pages/Recherche';
import Contact from './pages/Contact';
import AvisClients from './pages/AvisClients';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <GrilleModeles />
            <Atelier />
            <Boutique />
          </>
        } />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/avis" element={<AvisClients />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;