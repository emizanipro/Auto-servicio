import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Seccion1.css';

function Seccion1() {

  // Función para agregar la clase 'visible' cuando un card entra en la vista
  useEffect(() => {
    const cards = document.querySelectorAll('.cards');

    // Crear un observer para observar la intersección de los cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Añadir la clase 'visible' cuando el card entra en la vista
          } else {
            entry.target.classList.remove('visible'); // Remover la clase 'visible' cuando el card sale de la vista
          }
        });
      },
      {
        threshold: 0.3, // Cuando al menos el 50% del card sea visible
      }
    );

    // Observar todos los cards
    cards.forEach((card) => {
      observer.observe(card);
    });

    // Limpiar el observer cuando el componente se desmonte
    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);








  const productListRef = useRef(null);

  // Función para mover la lista de productos hacia la derecha
const moveRight = () => {
    if (productListRef.current) {
      const productWidth = productListRef.current.querySelector('.producto-list').offsetWidth; // Ancho de un solo producto
      productListRef.current.scrollBy({ left: productWidth, behavior: 'smooth' });
    }
  };
  
  // Función para mover la lista de productos hacia la izquierda
  const moveLeft = () => {
    if (productListRef.current) {
      const productWidth = productListRef.current.querySelector('.producto-list').offsetWidth; // Ancho de un solo producto
      productListRef.current.scrollBy({ left: -productWidth, behavior: 'smooth' });
    }
  };
  



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Esta propiedad habilita el desplazamiento suave
    });
  };






  return (
    <div className='seccion1-container'>
        <div className='portada'>
            <div className='portada-fondo'>
                    <Link to="/" onClick={scrollToTop}>
                            <img src='./assets/img-1.png'></img>
                     </Link> 
            </div>
            <div className='portada-title'>
                <h3>Bienvenidos!</h3>
                <p>Vas a encontrar los mejores servicios, productos de primera calidad y las mejores marcas para garantizar siempre un “brillo perfecto” en tu vehículo</p>
            </div>
        </div>

        <div className='sobre-nosotros'>
                <h3>"Brillo Perfecto" para tu Vehículo!</h3>
                <div className='nosotros-title'>
                    <img src='./assets/img-2-logo.png'></img>
                    <p>Somos una empresa familiar mendocina con más de 10 años de trayectoria en el mercado. Siempre enfocados en ofrecerte las mejores soluciones para tu vehículo.
                        <Link to="/nosotros" onClick={scrollToTop}>
                        <button>Sobre Nosotros</button>
                        </Link>                    
                    </p>
                </div>
        </div>

        <div className='servicios'>
                <div className='servicios-title'>
                    <img src='./assets/img-3.jpg'></img>
                    <h1>SERVICIOS</h1>
                </div>
                <div className='servicios-cards'>
                    <div className='cards'>
                        <img src='./assets/img-4.jfif'></img>
                        <h3>Tratamiento Cerámico</h3>
                        <Link to="/servicios" onClick={scrollToTop}> 
                             <button>Conocer más...</button>
                        </Link>   
                    </div>
                    <div className='cards'>
                    <img src='./assets/img-5.jfif'></img>
                        <h3>Capacitaciones</h3>
                        <Link to="/servicios" onClick={scrollToTop}> 
                             <button>Conocer más...</button>
                        </Link>   
                    </div>
                    <div className='cards'>
                    <img src='./assets/img-6.jfif'></img>
                        <h3>Sacabollos</h3>
                        <Link to="/servicios" onClick={scrollToTop}> 
                             <button>Conocer más...</button>
                        </Link>   
                    </div>
                    <div className='cards'>
                    <img src='./assets/img-7.jfif'></img>
                        <h3>Limpieza Interior</h3>
                        <Link to="/servicios" onClick={scrollToTop}> 
                             <button>Conocer más...</button>
                        </Link>   
                    </div>
                </div>
        </div>





        <div className='productos-destacados'>
                <div className='destacados-title'>
                    <h3>DESTACADOS</h3>
                    <p>Conocé todos los productos que tenemos para vos!</p>
                </div>

                <div className='btn-flechas'>
                    <button onClick={moveLeft}>
                        <img src='https://cdn-icons-png.flaticon.com/128/4509/4509811.png' alt='flecha Izquierda'></img>
                    </button>
                    <button onClick={moveRight}>
                        <img src='https://cdn-icons-png.flaticon.com/128/4509/4509836.png' alt='Flecha Derecha'></img>
                    </button>
                </div>

                <div className="destacados-list" ref={productListRef}>
                    <div className='producto-list'>
                        <img src='../assets/img-9.webp'></img>
                        <h3>Nombre del Producto</h3>
                        <p>Todos los detalles del Producto</p>
                        <h5>$ 25.000</h5>
                    </div>
                    <div className='producto-list'>
                        <img src='./assets/img-9.webp'></img>
                        <h3>Nombre del Producto</h3>
                        <p>Todos los detalles del Producto</p>
                        <h5>$ 25.000</h5>
                    </div>
                    <div className='producto-list'>
                        <img src='./assets/img-9.webp'></img>
                        <h3>Nombre del Producto</h3>
                        <p>Todos los detalles del Producto</p>
                        <h5>$ 25.000</h5>
                    </div>
                    <div className='producto-list'>
                        <img src='./assets/img-9.webp'></img>
                        <h3>Nombre del Producto</h3>
                        <p>Todos los detalles del Producto</p>
                        <h5>$ 25.000</h5>
                    </div>
                    <div className='producto-list'>
                        <img src='./assets/img-9.webp'></img>
                        <h3>Nombre del Producto</h3>
                        <p>Todos los detalles del Producto</p>
                        <h5>$ 25.000</h5>
                    </div>
                    <div className='producto-list'>
                        <img src='./assets/img-9.webp'></img>
                        <h3>Nombre del Producto</h3>
                        <p>Todos los detalles del Producto</p>
                        <h5>$ 25.000</h5>
                    </div>
                    <div className='producto-list'>
                        <img src='./assets/img-9.webp'></img>
                        <h3>Nombre del Producto</h3>
                        <p>Todos los detalles del Producto</p>
                        <h5>$ 25.000</h5>
                    </div>
                    <div className='producto-list'>
                        <img src='./assets/img-9.webp'></img>
                        <h3>Nombre del Producto</h3>
                        <p>Todos los detalles del Producto</p>
                        <h5>$ 25.000</h5>
                    </div>
                    <div className='producto-list'>
                        <img src='./assets/img-9.webp'></img>
                        <h3>Nombre del Producto</h3>
                        <p>Todos los detalles del Producto</p>
                        <h5>$ 25.000</h5>
                    </div>
                    <div className='producto-list'>
                        <img src='./assets/img-9.webp'></img>
                        <h3>Nombre del Producto</h3>
                        <p>Todos los detalles del Producto</p>
                        <h5>$ 25.000</h5>
                    </div>
                </div>
        </div>


        <div className='redes-sociales'>
                <div className='redes-list'>
                    <h3>LO ÚLTIMO EN REDES</h3>
                    <img src='https://cdn-icons-png.flaticon.com/128/174/174855.png'></img>
                </div>

                <div className='redes-post'>
                        <button onClick={() => window.open("https://www.instagram.com/p/CJKrI3xJoMW/", "_blank")}>
                            <img src='./assets/img-10.png' alt='Post 1' />
                        </button>
                        <button onClick={() => window.open("https://www.instagram.com/p/CHZALPgp4Af/", "_blank")}>
                            <img src='./assets/img-11.png' alt='Post 2' />
                        </button>
                        <button onClick={() => window.open("https://www.instagram.com/p/CHTPBbxJGjT/", "_blank")}>
                            <img src='./assets/img-12.png' alt='Post 3' />
                        </button>
                        
                </div>

                <div className='redes-post'>
                        <button onClick={() => window.open("https://www.instagram.com/p/CJHByuVpCI1/", "_blank")}>
                            <img src='./assets/img-13.png' alt='Post 1' />
                        </button>
                        <button onClick={() => window.open("https://www.instagram.com/p/CIGt4gaJdf3/", "_blank")}>
                            <img src='./assets/img-14.png' alt='Post 2' />
                        </button>
                        <button onClick={() => window.open("https://www.instagram.com/p/CIGtdUKptkG/", "_blank")}>
                            <img src='./assets/img-15.png' alt='Post 3' />
                        </button>
                        
                </div>
        </div>


        
    </div>
  );
};

export default Seccion1;
