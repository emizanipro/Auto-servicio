import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Verifica que esto esté presente
import img1 from '../../assets/img/marca-1.png';
import img2 from '../../assets/img/marca-2.png';
import img3 from '../../assets/img/marca-3.png';
import img4 from '../../assets/img/marca-4.png';
import img5 from '../../assets/img/marca-5.png';
import img6 from '../../assets/img/marca-6.png';
import img7 from '../../assets/img/marca-7.png';
import img8 from '../../assets/img/marca-8.png';
import img9 from '../../assets/img/marca-9.png';
import img21 from "../../assets/img/img-21.jfif"
import img22 from "../../assets/img/img-22.jfif"
import img23 from "../../assets/img/img-23.jfif"
import img24 from "../../assets/img/img-24.jfif"
import img30 from '../../assets/img/img-30.jpg';
import img2logo from '../../assets/img/img-2-logo.png';
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
      <img className='img-1-nosotros' src={img2logo}></img>
      <div className='nosotros-title-portada'>
        <img src={img24} alt="Nosotros" />
      </div>

      <div className='nosotros-img-izquierda'>
        <img src={img21} alt="Trayectoria" />
        <div>
          <h3>Trayectoria</h3>
          <p>
              Somos una empresa familiar mendocina con más de 14 años de trayectoria en el mercado. Siempre enfocados en ofrecerte las mejores soluciones de detallado, abrillantados, tratamientos de pintura y sellados para tu vehículo 
          </p>
          <button><Link to="/galeria" onClick={scrollToTop}>Ir a Galería</Link></button>
        </div>
      </div>

      <div className='nosotros-img-derecha'>
        <img src={img22} alt="Especialización" />
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
        <img src={img23} alt="Tienda Online" />
        <div>
          <h3>Tienda Online</h3>
          <p>
              Contamos además con un amplio stock en productos para tu vehículo que podés encontrar visitando nuestra tienda. Las mejores marcas junto a su respectivo asesoramiento personalizado. 
          </p>
          <button><Link to="/tienda" onClick={scrollToTop}>Ir a Tienda</Link></button>
        </div>
      </div>


      <div className='representantes'>
          <img className='representantes-img-fondo' src={img30}></img>
          <div className='representantes-title'>
              <h3>REPRESENTANTES</h3>
              <p>Somos representantes de las siguientes marcas.</p>
          </div>
          <div className='representantes-cards'>
              <img src={img1}></img>
              <img src={img2}></img>
              <img src={img3}></img>
              <img src={img4}></img>
              <img src={img5}></img>
              <img src={img6}></img>
              <img src={img7}></img>
              <img src={img8}></img>
          </div>
          <div className='convenio'>
              <h3>Convenio Especial</h3>
              <img src={img9}></img>
          </div>
      </div>






    </div>
  );
}

export default Nosotros;
