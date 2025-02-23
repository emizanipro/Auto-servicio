import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chatbot.css";

function Chatbot() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (url) => {
    scrollToTop();
    setTimeout(() => {
      navigate(url);
      closeModal();
    }, 500);
  };

  return (
    <div className="chatbotContainer">
      <img
        src="https://cdn-icons-png.flaticon.com/128/6231/6231228.png"
        width="50px"
        height="50px"
        onClick={openModal}
        alt="Chatbot Icon"
      />
      {isModalOpen && (
        <div className="modal">
          <div className="modalContent">
            <span className="closeButton" onClick={closeModal}>
              ❌
            </span>
            <img
              src="https://cdn-icons-gif.flaticon.com/12205/12205168.gif"
              width="100px"
              height="100px"
            ></img>
            <p>Hola, Bienvenidos al Chatbot de CHP Auto-Estética</p>
            <h2>¿Qué acción desea realizar?</h2>
            <ul>
              <li>
                <b onClick={() => handleLinkClick("/nosotros")}>
                  {" "}
                  Saber Quienes Somos
                </b>
              </li>
              <li>
                <b onClick={() => handleLinkClick("/servicios")}>
                  {" "}
                  Ver nuestros Servicios
                </b>
              </li>
              <li>
                <b onClick={() => handleLinkClick("/galeria")}>
                  {" "}
                  Visitar nuestra Galería
                </b>
              </li>
              <li>
                <b onClick={() => handleLinkClick("/tienda")}>
                  {" "}
                  Conocer nuestra Tienda
                </b>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5492612798075"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <b className="tu-clase">Chatear con Nosotros</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
