import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import img16 from '../../assets/img/img-16.png'

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!name || !email || !comment) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Preparar el mensaje para WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*Consulta*\n\nNombre: ${name}\nEmail: ${email}\nComentario: ${comment}`
    );

    // Número de WhatsApp al que se enviará el mensaje
    const whatsappNumber = '5492612798075';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappURL, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='footer-container'>
      <div className='footer-fondo'>
        <img src={img16} alt='Fondo' />
      </div>

      {/* Mover list-footer arriba del form y aplicar estilos */}
      <div className='list-footer'>
        <ul className='list-item' onClick={scrollToTop}>
          <Link to='https://www.instagram.com/chp_autoestetica?igsh=MXBuNGZzdG8zcTMzMQ%3D%3D' target='__blank'>
            Instagram
            <li>
              <img src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png' width='30px' height='30px' alt='Instagram' />
            </li>
          </Link>
        </ul>
        <ul className='list-item' onClick={scrollToTop}>
          <Link to='https://www.google.com/maps?q=H.+Irigoyen+1541.+Luzuriaga,+Maip%C3%BA.+Mendoza' target='__blank'>
            Ubicación
            <li>
              <img src='https://cdn-icons-png.flaticon.com/128/854/854878.png' width='30px' height='30px' alt='Ubicación' />
            </li>
          </Link>
        </ul>
      </div>

      {/* Contenedor del formulario */}
      <div className='footer-content'>
        <div className='footer-title'>
          <h3>CONTACTANOS</h3>
          <img src='https://cdn-icons-png.flaticon.com/128/733/733585.png' width='30px' height='30px' alt='WhatsApp Icon' />
          <p>Dejanos tu mensaje predeterminado por WhatsApp</p>
        </div>

        <form className='footer-form' onSubmit={handleFormSubmit}>
          <input type='text' placeholder='Nombre' required value={name} onChange={(e) => setName(e.target.value)} />
          <input type='email' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea placeholder='Mensaje' required value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
