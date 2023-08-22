import React from 'react';
import WeatherCard from './componentes/WeatherCard';
import Header from './componentes/header';
import Footer from './componentes/footer';
import './App.css'


function App() {
  return (
    <div className="app">
      <body>
      <Header />
      <WeatherCard />
      <Footer/>
      </body>
    </div>
    
  );
}

export default App;
