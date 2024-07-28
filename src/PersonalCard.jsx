import React from 'react';
import { Link } from 'react-router-dom';
import './PersonalCard.css';

const PersonalCard = () => {
  return (
    <div className="personal-card-container">
      <div className="personal-card">
        <img src="/img/profile.jpg" alt="Deyvis Fabiany Cruz" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Deyvis Fabiany Cruz</h2>
          <p className="card-info"><strong>Ciudad de Residencia:</strong> Rionegro-Antioquia</p>
          <p className="card-info"><strong>Teléfono:</strong> 3153411850</p>
          <p className="card-info"><strong>Email:</strong> dfcc24@gmail.com</p>
          <p className="card-info"><strong>Estudios:</strong> Ing. de Telecomunicaciones, Técnico electricista, Actualmente estudiando Análisis y desarrollo de Software</p>
          <p className="card-info"><strong>Conocimientos:</strong> HTML=Bueno, Java=Bajos, React=Bajos, Base de Datos MySQL=Medio</p>
          <p className="card-info"><strong>Trabajo Actual:</strong> Líder telecomunicaciones</p>
          <p className="card-info"><strong>Expectativas del Curso:</strong> Adquirir mayores conocimientos para desenvolverme laboralmente como FullStack</p>
          <Link to="/">
        <button className="return-button">Regresar a la Página Inicial</button>
      </Link>
        </div>
      </div>
      
    </div>
  );
};

export default PersonalCard;
