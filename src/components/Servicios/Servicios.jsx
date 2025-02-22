import React from 'react';
import img11 from '../../assets/img/img-11.png';
import img31 from "../../assets/img/img-31.jpg";
import img2logo from '../../assets/img/img-2-logo.png';
import img22 from '../../assets/img/img-22.jfif';
import img13 from '../../assets/img/img-13.png';
import img7 from '../../assets/img/img-7.jfif';
import './Servicios.css';

function Servicios() {




  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Esta propiedad habilita el desplazamiento suave
    });
  };


  return (
    <div className='Servicios-container'>
            <div className='servicios-title'>
              <img src={img31} alt="Servicios" />
              <h3>Nuestros Servicios</h3>
            </div>
            <img className='img-1-servicios' src={img2logo}></img>

            <div className='servicios-cards'>
                <div className='tipos-de-servicios'>
                    <img src={img22}></img>
                    <h3>Daño por granizo y sacabollos</h3>
                    <p>Desabollado en frío sin dañar la pintura. Daños por granizo. Choques leves.</p>
                </div>
                <div className='tipos-de-servicios'>
                    <img src={img13}></img>
                    <h3>Tratamiento Cerámico</h3>
                    <p>Tratamientos que garantizan un mayor brillo y protección de la pintura frente a polvo, lluvia, aves y rayos uv.</p>
                </div>
                <div className='tipos-de-servicios'>
                    <img src={img7}></img>
                    <h3>Decoración de Interiores</h3>
                    <p>Limpieza profundo interior vehículos utilizando maquinaria y productos de la más alta calidad</p>
                </div>
                <div className='tipos-de-servicios'>
                    <img src={img11}></img>
                    <h3>Capacitaciones Car Detail</h3>
                    <p>Cursos intensivos y personalizados desde hace más de 4 años. Consultar próximas fechas.</p>
                </div>
                
            </div>

        

    </div>
  );
};

export default Servicios;