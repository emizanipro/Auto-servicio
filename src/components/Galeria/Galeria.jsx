import React, { useState } from 'react';
import './Galeria.css';

function Galeria() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <div className='Galeria-container'>
      <div className='galeria-title'>
        <h3>Galería de Imágenes</h3>
        <img src="./assets/img-2-logo.png" alt="Logo" />
      </div>

      <div className='cards-galeria'>
        {[
          {
            title: "Tratamiento Cerámico",
            images: ["./assets/img-13.png", "./assets/img-13.png", "./assets/img-31.jpg", "./assets/img-31.jpg"]
          },
          {
            title: "Daño por granizo y sacabollos",
            images: ["./assets/img-22.jfif", "./assets/img-22.jfif", "./assets/img-12.png", "./assets/img-12.png"]
          },
          {
            title: "Decoración de Interiores",
            images: ["./assets/img-7.jfif", "./assets/img-7.jfif", "./assets/img-7.jfif", "./assets/img-7.jfif"]
          },
          {
            title: "Capacitaciones Car Detail",
            images: ["./assets/img-11.png", "./assets/img-11.png", "./assets/img-10.png", "./assets/img-10.png"]
          },
          {
            title: "¿ Quienes Somos ?",
            images: ["./assets/img-30.jpg", "./assets/img-30.jpg", "./assets/img-30.jpg", "./assets/img-30.jpg"]
          }
        ].map((card, index) => (
          <div className='cards-muestra' key={index}>
            <h3>{card.title}</h3>
            {card.images.map((imgSrc, imgIndex) => (
              <img 
                key={imgIndex} 
                src={imgSrc} 
                alt={card.title} 
                onClick={() => handleImageClick(imgSrc)} 
              />
            ))}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="overlay-click-img" onClick={closeOverlay}>
          <div className="overlay-content">
            <img src={selectedImage} alt="Ampliada" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Galeria;
