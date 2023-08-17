import React from 'react';
import WeatherCard from './componentes/WeatherCard';
import Header from './componentes/header';
import Footer from './componentes/footer';


function App() {
  return (
    <div className="app">
      <Header />
      <WeatherCard />
      <Footer/>
    </div>
  );
}

export default App;
