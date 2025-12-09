import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import InicioPage from './pages/Inicio';
import RegalosPage from './pages/Regalos';
import VillancicosPage from './pages/Villancicos';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/chrismatesWeb" element={<InicioPage />} />
          <Route path="/regalos" element={<RegalosPage />} />
          <Route path="/villancicos" element={<VillancicosPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
