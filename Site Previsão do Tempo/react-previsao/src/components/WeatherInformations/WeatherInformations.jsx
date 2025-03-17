import React, { useState, useEffect } from "react";
import "../App.css"; // Importando os estilos

function WeatherInformations({ weather }) {
  const [bgColor, setBgColor] = useState("#ffffff");

  useEffect(() => {
    if (weather && weather.main) {
      const temp = weather.main.temp;

      if (temp >= 30) {
        setBgColor("linear-gradient(45deg, #ff6f61, #ff9a8b)"); // Quente
      } else if (temp >= 20) {
        setBgColor("linear-gradient(45deg, #ff9a8b, #ffd56d)"); // Ameno
      } else if (temp >= 10) {
        setBgColor("linear-gradient(45deg, #6db3f2, #1e69de)"); // Azul moderno
      } else {
        setBgColor("linear-gradient(45deg, #1e3c72, #2a5298)"); // Frio
      }
    }
  }, [weather]);

  if (!weather || !weather.weather) {
    return <p>Digite o nome de uma cidade para ver a previsão.</p>;
  }

  return (
    <div className="container" style={{ background: bgColor, transition: "0.5s ease" }}>
      <div className="content">
        <h2>Tempo em {weather.name}</h2>
        {weather.weather[0] && (
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Ícone do clima"
          />
        )}
        <p className="temperature">{Math.round(weather.main.temp)}°C</p>
        <p className="weather-description">{weather.weather[0].description}</p>

        {/* Cards separados para umidade, sensação térmica e pressão */}
        <div className="subcards">
          <div className="card">
            <p><strong>Sensação:</strong> {Math.round(weather.main.feels_like)}°C</p>
          </div>
          <div className="card">
            <p><strong>Umidade:</strong> {weather.main.humidity}%</p>
          </div>
          <div className="card">
            <p><strong>Pressão:</strong> {weather.main.pressure} hPa</p>
          </div>
        </div>

        {/* Subcard com vento e visibilidade */}
        <div className="subcard">
          <p><strong>Vento:</strong> {weather.wind.speed} m/s</p>
          <p><strong>Visibilidade:</strong> {weather.visibility / 1000} km</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherInformations;
