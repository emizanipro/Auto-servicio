import React, { useState } from 'react';
import './Galeria.css';
import img2logo from "../../assets/img/img-2-logo.png";
import img13 from "../../assets/img/img-13.png";
import img22 from "../../assets/img/img-22.jfif";
import img7 from "../../assets/img/img-7.jfif";
import img11 from "../../assets/img/img-11.png";
import img10 from "../../assets/img/img-10.png";
import img30 from "../../assets/img/img-30.jpg";

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
        <img src={img2logo} alt="Logo" />
      </div>

      <div className='cards-galeria'>
        {[
          {
            title: "Tratamiento Cerámico",
            images: [img13, img13, img13, img13]
          },
          {
            title: "Daño por granizo y sacabollos",
            images: [img22, img22, img22, img22]
          },
          {
            title: "Decoración de Interiores",
            images: [img7, img7, img7, img7]
          },
          {
            title: "Capacitaciones Car Detail",
            images: [img11, img11, img10, img10]
          },
          {
            title: "¿ Quienes Somos ?",
            images: [img30, img30, img30, img30]
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
