import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar/Navbar.jsx';
import Seccion1 from './components/Seccion1/Seccion1.jsx';
import Nosotros from './components/Nosotros/Nosotros.jsx';
import Servicios from './components/Servicios/Servicios.jsx';
import Galeria from './components/Galeria/Galeria.jsx';
import Tienda from './components/Tienda/Tienda.jsx';
import Footer from './components/Footer/Footer.jsx';
import Chatbot from './components/Chatbot/Chatbot.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path="/" element={<Seccion1 />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/tienda" element={<Tienda />} />
          </Routes>
          <Chatbot/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
