import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Verifica que esto esté presente


import './Nosotros.css';

function Nosotros() {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.nosotros-img-izquierda, .nosotros-img-derecha');

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active'); // Se quita la clase al salir
        }
      });
    }, { threshold: 0.3 });

    fadeInElements.forEach((element) => fadeInObserver.observe(element));

    return () => fadeInObserver.disconnect();
  }, []);






  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Esta propiedad habilita el desplazamiento suave
    });
  };



  return (
    <div className='Nosotros-container'>
      <img className='img-1-nosotros' src='./assets/img-2-logo.png'></img>
      <div className='nosotros-title-portada'>
        <img src="./assets/img-24.jfif" alt="Nosotros" />
      </div>

      <div className='nosotros-img-izquierda'>
        <img src="./assets/img-21.jfif" alt="Trayectoria" />
        <div>
          <h3>Trayectoria</h3>
          <p>
              Somos una empresa familiar mendocina con más de 14 años de trayectoria en el mercado. Siempre enfocados en ofrecerte las mejores soluciones de detallado, abrillantados, tratamientos de pintura y sellados para tu vehículo 
          </p>
          <button><Link to="/galeria" onClick={scrollToTop}>Ir a Galería</Link></button>
        </div>
      </div>

      <div className='nosotros-img-derecha'>
        <img src="./assets/img-22.jfif" alt="Especialización" />
        <div>
          <h3>Especialización</h3>
          <p>
              Nos especializamos en tratamientos de pintura vehiculares, sacabollos y daño por granizo, limpieza de interiores, polarizados.
              También dictamos capacitaciones en Car Detail porque queremos que cada vez más personas puedan contar en sus autos con un "brillo perfecto".
          </p>
          <button><Link to="/servicios" onClick={scrollToTop}>Ir a Servicios</Link></button>
        </div>
      </div>

      <div className='nosotros-img-izquierda'>
        <img src="./assets/img-23.jfif" alt="Tienda Online" />
        <div>
          <h3>Tienda Online</h3>
          <p>
              Contamos además con un amplio stock en productos para tu vehículo que podés encontrar visitando nuestra tienda. Las mejores marcas junto a su respectivo asesoramiento personalizado. 
          </p>
          <button><Link to="/tienda" onClick={scrollToTop}>Ir a Tienda</Link></button>
        </div>
      </div>


      <div className='representantes'>
          <img className='representantes-img-fondo' src='./assets/img-30.jpg'></img>
          <div className='representantes-title'>
              <h3>REPRESENTANTES</h3>
              <p>Somos representantes de las siguientes marcas.</p>
          </div>
          <div className='representantes-cards'>
              <img src='./assets/marca-1.png'></img>
              <img src='./assets/marca-2.png'></img>
              <img src='./assets/marca-3.png'></img>
              <img src='./assets/marca-4.png'></img>
              <img src='./assets/marca-5.png'></img>
              <img src='./assets/marca-6.png'></img>
              <img src='./assets/marca-7.png'></img>
              <img src='./assets/marca-8.png'></img>
          </div>
          <div className='convenio'>
              <h3>Convenio Especial</h3>
              <img src='./assets/marca-9.png'></img>
          </div>
      </div>






    </div>
  );
}

export default Nosotros;
