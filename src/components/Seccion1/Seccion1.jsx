import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/img/img-1.png";
import img2logo from "../../assets/img/img-2-logo.png";
import img15 from "../../assets/img/img-15.png";
import img14 from "../../assets/img/img-14.png";
import img13 from "../../assets/img/img-13.png";
import img12 from "../../assets/img/img-12.png";
import img11 from "../../assets/img/img-11.png";
import img10 from "../../assets/img/img-10.png";
import img9 from "../../assets/img/img-9.webp";
import img3 from "../../assets/img/img-3.jpg";
import img4 from "../../assets/img/img-4.jfif";
import img5 from "../../assets/img/img-5.jfif";
import img6 from "../../assets/img/img-6.jfif";
import img7 from "../../assets/img/img-7.jfif";
import img31 from "../../assets/img/img-31.jpg";
import "./Seccion1.css";

function Seccion1() {
  // Función para agregar la clase 'visible' cuando un card entra en la vista
  useEffect(() => {
    const cards = document.querySelectorAll(".cards");

    // Crear un observer para observar la intersección de los cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Añadir la clase 'visible' cuando el card entra en la vista
          } else {
            entry.target.classList.remove("visible"); // Remover la clase 'visible' cuando el card sale de la vista
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
      const productWidth =
        productListRef.current.querySelector(".producto-list").offsetWidth; // Ancho de un solo producto
      productListRef.current.scrollBy({
        left: productWidth,
        behavior: "smooth",
      });
    }
  };

  // Función para mover la lista de productos hacia la izquierda
  const moveLeft = () => {
    if (productListRef.current) {
      const productWidth =
        productListRef.current.querySelector(".producto-list").offsetWidth; // Ancho de un solo producto
      productListRef.current.scrollBy({
        left: -productWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Esta propiedad habilita el desplazamiento suave
    });
  };

  return (
    <div className="seccion1-container">
      <div className="portada">
        <div className="portada-fondo">
          <Link to="/" onClick={scrollToTop}>
            <img src={img1}></img>
          </Link>
        </div>
        <div className="portada-title">
          <h3>Bienvenidos</h3>
          <p>
            Vas a encontrar los mejores servicios, productos de primera calidad
            y las mejores marcas para garantizar siempre un “brillo perfecto” en
            tu vehículo
          </p>
        </div>
      </div>
      <div className="sobre-nosotros">
        <h3>"Brillo Perfecto" para tu Vehículo!</h3>
        <div className="nosotros-title">
          <img src={img2logo}></img>
          <p>
            Somos una empresa familiar mendocina con más de 10 años de
            trayectoria en el mercado. Siempre enfocados en ofrecerte las
            mejores soluciones para tu vehículo.
            <Link to="/nosotros" onClick={scrollToTop}>
              <button>Sobre Nosotros</button>
            </Link>
          </p>
        </div>
      </div>
      <div className="servicios">
        <div className="servicios-title">
          <img src={img3}></img>
          <h1>SERVICIOS</h1>
        </div>
        <div className="servicios-cards">
          <div className="cards">
            <img src={img4}></img>
            <h3>Tratamiento Cerámico</h3>
            <Link to="/servicios" onClick={scrollToTop}>
              <button>Conocer más...</button>
            </Link>
          </div>
          <div className="cards">
            <img src={img5}></img>
            <h3>Capacitaciones</h3>
            <Link to="/servicios" onClick={scrollToTop}>
              <button>Conocer más...</button>
            </Link>
          </div>
          <div className="cards">
            <img src={img6}></img>
            <h3>Sacabollos</h3>
            <Link to="/servicios" onClick={scrollToTop}>
              <button>Conocer más...</button>
            </Link>
          </div>
          <div className="cards">
            <img src={img7}></img>
            <h3>Limpieza Interior</h3>
            <Link to="/servicios" onClick={scrollToTop}>
              <button>Conocer más...</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="sobre-nosotros">
        <h3>"Visita Nuestra Galeria de Imágenes"</h3>
        <div className="nosotros-title">
          <img src={img31}></img>
          <p>
            Podrás conocer más sobre quiénes somos, ver nuestros cursos en
            acción y descubrir los trabajos que realizamos. Capturamos cada
            detalle para que puedas ver nuestro compromiso y pasión en cada
            proyecto.
            <Link to="/galeria" onClick={scrollToTop}>
              <button>Ir a Galería</button>
            </Link>
          </p>
        </div>
      </div>
      <div className="productos-destacados">
        <div className="destacados-title">
          <h3>DESTACADOS</h3>
          <p>Conocé todos los productos que tenemos para vos!</p>
          <button>
            <Link to="/tienda" onClick={scrollToTop}>
              Visitar Tienda
            </Link>
          </button>
        </div>
        <div className="btn-flechas">
          <button onClick={moveLeft}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4509/4509811.png"
              alt="flecha Izquierda"
            ></img>
          </button>
          <button onClick={moveRight}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4509/4509836.png"
              alt="Flecha Derecha"
            ></img>
          </button>
        </div>
        <div className="destacados-list" ref={productListRef}>
          <div className="producto-list">
            <img src={img9}></img>
            <h3>Nombre del Producto</h3>
            <p>Todos los detalles del Producto</p>
            <h5>$ 25.000</h5>
          </div>
          <div className="producto-list">
            <img src={img9}></img>
            <h3>Nombre del Producto</h3>
            <p>Todos los detalles del Producto</p>
            <h5>$ 25.000</h5>
          </div>
          <div className="producto-list">
            <img src={img9}></img>
            <h3>Nombre del Producto</h3>
            <p>Todos los detalles del Producto</p>
            <h5>$ 25.000</h5>
          </div>
          <div className="producto-list">
            <img src={img9}></img>
            <h3>Nombre del Producto</h3>
            <p>Todos los detalles del Producto</p>
            <h5>$ 25.000</h5>
          </div>
          <div className="producto-list">
            <img src={img9}></img>
            <h3>Nombre del Producto</h3>
            <p>Todos los detalles del Producto</p>
            <h5>$ 25.000</h5>
          </div>
          <div className="producto-list">
            <img src={img9}></img>
            <h3>Nombre del Producto</h3>
            <p>Todos los detalles del Producto</p>
            <h5>$ 25.000</h5>
          </div>
          <div className="producto-list">
            <img src={img9}></img>
            <h3>Nombre del Producto</h3>
            <p>Todos los detalles del Producto</p>
            <h5>$ 25.000</h5>
          </div>
          <div className="producto-list">
            <img src={img9}></img>
            <h3>Nombre del Producto</h3>
            <p>Todos los detalles del Producto</p>
            <h5>$ 25.000</h5>
          </div>
          <div className="producto-list">
            <img src={img9}></img>
            <h3>Nombre del Producto</h3>
            <p>Todos los detalles del Producto</p>
            <h5>$ 25.000</h5>
          </div>
          <div className="producto-list">
            <img src={img9}></img>
            <h3>Nombre del Producto</h3>
            <p>Todos los detalles del Producto</p>
            <h5>$ 25.000</h5>
          </div>
        </div>
      </div>
      <div className="redes-sociales">
        <div className="redes-list">
          <h3>LO ÚLTIMO EN REDES</h3>
          <img src="https://cdn-icons-png.flaticon.com/128/174/174855.png"></img>
        </div>
        <div className="redes-post">
          <button
            onClick={() =>
              window.open("https://www.instagram.com/p/CJKrI3xJoMW/", "_blank")
            }
          >
            <img src={img10} alt="Post 1" />
          </button>
          <button
            onClick={() =>
              window.open("https://www.instagram.com/p/CHZALPgp4Af/", "_blank")
            }
          >
            <img src={img11} alt="Post 2" />
          </button>
          <button
            onClick={() =>
              window.open("https://www.instagram.com/p/CHTPBbxJGjT/", "_blank")
            }
          >
            <img src={img12} alt="Post 3" />
          </button>
        </div>
        <div className="redes-post">
          <button
            onClick={() =>
              window.open("https://www.instagram.com/p/CJHByuVpCI1/", "_blank")
            }
          >
            <img src={img13} alt="Post 1" />
          </button>
          <button
            onClick={() =>
              window.open("https://www.instagram.com/p/CIGt4gaJdf3/", "_blank")
            }
          >
            <img src={img14} alt="Post 2" />
          </button>
          <button
            onClick={() =>
              window.open("https://www.instagram.com/p/CIGtdUKptkG/", "_blank")
            }
          >
            <img src={img15} alt="Post 3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Seccion1;
