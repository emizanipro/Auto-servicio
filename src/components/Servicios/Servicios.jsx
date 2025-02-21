import React from 'react';


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
              <img src="./assets/img-31.jpg" alt="Servicios" />
              <h3>Nuestros Servicios</h3>
            </div>
            <img className='img-1-servicios' src='./assets/img-2-logo.png'></img>

            <div className='servicios-cards'>
                <div className='tipos-de-servicios'>
                    <img src='./assets/img-22.jfif'></img>
                    <h3>Daño por granizo y sacabollos</h3>
                    <p>Desabollado en frío sin dañar la pintura. Daños por granizo. Choques leves.</p>
                </div>
                <div className='tipos-de-servicios'>
                    <img src='./assets/img-13.png'></img>
                    <h3>Tratamiento Cerámico</h3>
                    <p>Tratamientos que garantizan un mayor brillo y protección de la pintura frente a polvo, lluvia, aves y rayos uv.</p>
                </div>
                <div className='tipos-de-servicios'>
                    <img src='./assets/img-7.jfif'></img>
                    <h3>Decoración de Interiores</h3>
                    <p>Limpieza profundo interior vehículos utilizando maquinaria y productos de la más alta calidad</p>
                </div>
                <div className='tipos-de-servicios'>
                    <img src='./assets/img-11.png'></img>
                    <h3>Capacitaciones Car Detail</h3>
                    <p>Cursos intensivos y personalizados desde hace más de 4 años. Consultar próximas fechas.</p>
                </div>
                
            </div>

        

    </div>
  );
};

export default Servicios;