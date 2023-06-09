import React from "react";
import { Audio } from 'react-loader-spinner'
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };
    return (
      <div>
    <div className="Weather">
      <div className="weather-app">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              Last updated: {weatherData.date}
              <span></span>
            </li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img src={weatherData.imgUrl} alt={weatherData.description} />
              <div>
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <small>
        <a href="https://github.com/MikeI11/weather-app" target="_blank" rel="noopener noreferrer">
          Open-sourse code
        </a>
        by Mykhailo
      </small>
            </div>
            <p style={{ marginLeft: '100px' }}>
  <Audio
    height="100"
    width="100"
    color="orange"
    ariaLabel="audio-loading"
    wrapperStyle={{}}
    wrapperClass="wrapper-class"
    visible={true}
  />
</p>
            </div>
      
  );
}
