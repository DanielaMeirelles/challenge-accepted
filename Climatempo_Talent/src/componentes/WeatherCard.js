import React from 'react';
import Card from './card';
import './styles.css';
import weatherData from './weather.json';

const WeatherCard = () => {

  return (
    <div className="WeatherCard">
      {weatherData.map(day =>(
        <Card
        key={day.period.begin}
        title={`Previsão do Tempo em ${day.locale.name}, ${day.locale.state}`}
        content={`Mínima: ${day.weather[0].temperature.min}°C | Máxima: ${day.weather[0].temperature.max}°C | ${day.weather[0].text}`}
        />
      ))}
    </div>
  );
};

export default WeatherCard;
