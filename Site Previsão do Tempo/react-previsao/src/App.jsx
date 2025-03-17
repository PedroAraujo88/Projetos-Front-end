import { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import WeatherInformations from './components/WeatherInformations/WeatherInformations';

function App() {
  const [weather, setWeather] = useState();
  const inpuRef = useRef();

  async function searchCity() {
    const city = inpuRef.current.value;
    const key = "97c4c7343f468fd3e631ae874403b5ef";
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    setWeather(apiInfo.data);
  }

  return (
    <div className="app-container">
      <div className="titulo">
        <h1>PedroStack Previsão do Tempo</h1>

        <div className="input-container">
          <input ref={inpuRef} type="text" placeholder="Digite o nome da cidade" />
          <button onClick={searchCity}>Buscar</button>
        </div>

        {weather && <WeatherInformations weather={weather} />}
      </div>
    </div>
  );
}

export default App;
