import React from 'react';
import '../styles/App.css';
import internetIcon from '../img/internet.png'; 
import energiaIcon from '../img/energia.png'; 

function ServicesPage() {
  return (
    <div className="services-container">
      <h2>Nuestros Servicios</h2>
      <div className="service-card">
        <img src={internetIcon} alt="Internet" className="service-icon" /> 
        <h3>Internet</h3>
        <p>Ofrecemos servicios de internet de alta velocidad para hogares y empresas.</p>
      </div>
      <div className="service-card">
        <img src={energiaIcon} alt="Energía" className="service-icon" /> 
        <h3>Energía</h3>
        <p>Proveemos soluciones energéticas eficientes para residencias y comercios.</p>
      </div>
    </div>
  );
}

export default ServicesPage;
