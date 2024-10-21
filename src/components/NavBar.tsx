import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const NavBar: React.FC = () => {
  return (
    <header>
      <nav>
        <h1>Basith.</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">My Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
