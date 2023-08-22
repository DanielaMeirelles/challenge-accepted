import React, { useState, useEffect } from 'react';
import Card from './card';
import './styles.css';
import axios from 'axios';

function WeatherCard() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await axios.get('https://climatempo-talent.rj.r.appspot.com/weatherforecast?city_id=3735&unit_temperature=celsius&unit_precipitation=mm');
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    fetchWeatherData();
  }, []);

  return (
    <div className="WeatherCard">
      {weatherData.map(day =>(
        <Card
        key={day.period.begin}
        title={`Previsão do Tempo em ${day.locale.name}, ${day.locale.state}`}
        content={day.weather.map(day => (
          <div key={day.date}>
            <p>Data: {day.date}</p>
            <p>Temperatura Máxima: {day.temperature.max}°C</p>
            <p>Temperatura Mínima: {day.temperature.min}°C</p>
            <p>Probabilidade de Chuva: {day.rain.probability}%</p>
            <p>Quantidade de Chuva: {day.rain.precipitation}mm</p>
            <p>Descrição: {day.text}</p>
            <hr />
            </div>
        ))}
        />
      ))}
      </div>
  );
};

export default WeatherCard;
