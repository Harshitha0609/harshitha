// App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState('');
  const [bgClass, setBgClass] = useState('default');
  const [weatherIcon, setWeatherIcon] = useState('🌤️');

  async function handleWeather() {
    const API_KEY = '4400e6de8401c3611882a18f1dd5fdee';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`;
    const result = await fetch(url);
    const response = await result.json();

    if (response.cod === 200) {
      setWeather(response);
      updateBackgroundAndIcon(response.weather[0].main);
    } else {
      alert('City not found');
    }
  }

  function updateBackgroundAndIcon(condition) {
    const conditionLower = condition.toLowerCase();

    if (conditionLower.includes('cloud')) {
      setBgClass('cloudy');
      setWeatherIcon('☁️');
    } else if (conditionLower.includes('rain')) {
      setBgClass('rainy');
      setWeatherIcon('🌧️');
    } else if (conditionLower.includes('clear')) {
      setBgClass('sunny');
      setWeatherIcon('☀️');
    } else if (conditionLower.includes('snow')) {
      setBgClass('snowy');
      setWeatherIcon('❄️');
    } else if (
      conditionLower.includes('fog') ||
      conditionLower.includes('mist') ||
      conditionLower.includes('haze')
    ) {
      setBgClass('foggy');
      setWeatherIcon('🌫️');
    } else {
      setBgClass('default');
      setWeatherIcon('🌤️');
    }
  }

  return (
    <div className={`weather-container ${bgClass}`}>
      <div className="weather-box">
        <h1
          className="weather-heading"
          style={{ color: bgClass === 'snowy' ? '#000' : '#fff' }}
        >
          {weatherIcon} Weather App
        </h1>

        <input
          className="input-box"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter city name"
        />

        <button className="weather-button" onClick={handleWeather}>
          Get Weather
        </button>

        {weather && (
          <div className="weather-result">
            <p className="city-name">{weather.name}</p>
            <p className="temp">
              🌡️ Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C
            </p>
            <p className="desc">
              Weather: {weatherIcon} {weather.weather[0].description}
            </p>
            <p className="humidity">💧 Humidity: {weather.main.humidity}%</p>
            <p className="wind">💨 Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
