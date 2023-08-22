import React from 'react';
import logo from './logo-white.png';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <div className='logo'>
          <img src={logo} alt="Clima Tempo Logo" /> 
        </div>
      </nav>
      <div className='search-bar'>
          <input type='text' id='search' placeholder='Digite a localização'></input>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none" className='lupa'>
            <path d="M22.0179 19.3915C23.8335 16.9141 24.6467 13.8424 24.2948 10.7912C23.9429 7.73992 22.4518 4.93404 20.12 2.93489C17.7882 0.935753 14.7875 -0.109217 11.7183 0.00904516C8.64904 0.127307 5.73765 1.40008 3.56656 3.57273C1.39547 5.74538 0.124778 8.65767 0.00871225 11.727C-0.107354 14.7963 0.939763 17.7962 2.94057 20.1266C4.94138 22.457 7.74833 23.946 10.7998 24.2957C13.8514 24.6455 16.9224 23.8301 19.3986 22.0128H19.3967C19.4529 22.0878 19.5129 22.159 19.5804 22.2284L26.7992 29.4472C27.1508 29.799 27.6277 29.9967 28.1251 29.9969C28.6225 29.9971 29.0995 29.7997 29.4514 29.4481C29.8032 29.0965 30.001 28.6196 30.0011 28.1222C30.0013 27.6248 29.8039 27.1477 29.4523 26.7959L22.2336 19.5772C22.1665 19.5093 22.0944 19.4485 22.0179 19.3915ZM22.5017 12.184C22.5017 13.5383 22.2349 14.8793 21.7167 16.1304C21.1984 17.3816 20.4388 18.5185 19.4812 19.4761C18.5236 20.4337 17.3868 21.1933 16.1356 21.7115C14.8844 22.2298 13.5434 22.4965 12.1892 22.4965C10.8349 22.4965 9.49393 22.2298 8.24276 21.7115C6.99159 21.1933 5.85475 20.4337 4.89714 19.4761C3.93954 18.5185 3.17993 17.3816 2.66168 16.1304C2.14342 14.8793 1.87668 13.5383 1.87668 12.184C1.87668 9.44898 2.96318 6.82596 4.89715 4.89199C6.83111 2.95802 9.45414 1.87153 12.1892 1.87153C14.9242 1.87153 17.5473 2.95802 19.4812 4.89199C21.4152 6.82596 22.5017 9.44898 22.5017 12.184Z" fill="black"/>
            </svg>
    </header>
  );
}

export default Header;
