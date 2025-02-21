import React from 'react';
import { Link } from 'react-router-dom'; // Verifica que esto esté presente

import './Navbar.css';

const Navbar = () => {

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Esta propiedad habilita el desplazamiento suave
    });
  };

  return (
    <div className='Navbar-container'>
      <div className='navbar'>
        <div className='navbar-parte-1'>
          <Link to="/" onClick={scrollToTop}>
            <img
              src='https://ss-static-01.esmsv.com/id/145920/galeriaimagenes/obtenerimagen/?width=176&height=64&id=sitio_logo&ultimaModificacion=2025-02-16+12%3A12%3A14'
              width='200px'
              height='100px'
              alt='Logo'
            />
          </Link>
        </div>

        <div className='navbar-parte-2'>
          <button><Link to="/nosotros" onClick={scrollToTop}>Nosotros</Link></button>
          <button><Link to="/servicios" onClick={scrollToTop}>Servicios</Link></button>
          <button><Link to="/tienda" onClick={scrollToTop}>Tienda</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
