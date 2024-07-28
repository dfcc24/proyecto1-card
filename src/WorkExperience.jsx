import React from 'react';
import { Link } from 'react-router-dom';
import './WorkExperience.css';

const WorkExperience = () => {
  const experiences = [
    {
      image: "/img/company1.jpg",
      title: "Movistar",
      description: "Mantenimiento (correctivo y preventivo), configuración y solución de problemas de equipos de telecomunicaciones."
    },
    {
      image: "/img/company2.jpg",
      title: "Tigo",
      description: "Conocimiento en tecnologías de transmisión satelital, microondas, fibra óptica y radiofrecuencia."
    },
    {
      image: "/img/company3.jpg",
      title: "Claro",
      description: "Líder en telecomunicaciones con más de 20 años de experiencia en el campo."
    }
  ];

  return (
    <div className="work-experience">
      <h2>Experiencia Laboral</h2>
      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <div className="card" key={index}>
            <img src={exp.image} alt={exp.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{exp.title}</h3>
              <p className="card-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="return-button">Regresar a la Página Inicial</button>
      </Link>
    </div>
  );
};

export default WorkExperience;
