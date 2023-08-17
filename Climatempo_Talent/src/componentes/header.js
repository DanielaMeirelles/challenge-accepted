import React from 'react';
import logo from './logo-white.png'; // Importar a imagem
import './styles.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <div className='logo'>
          <img src={logo} alt="Clima Tempo Logo" /> 
        </div>
        <div className='search-bar'>
          <input type='text' id='search' placeholder='Digite a localização'></input>
          <button>Buscar</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
