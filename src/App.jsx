import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PersonalCard from './PersonalCard';
import WorkExperience from './WorkExperience';
import './App.css';

const Home = () => (
  <div className="home">
    <h1>Bienvenidos a mi Presentación Personal</h1>
    <Link to="/card">
      <button className="card-button">Ver mi Tarjeta de Presentación</button>
    </Link>
    <Link to="/experience">
      <button className="card-button">Ver mi Experiencia Laboral</button>
    </Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<PersonalCard />} />
        <Route path="/experience" element={<WorkExperience />} />
      </Routes>
    </Router>
  );
};

export default App;
