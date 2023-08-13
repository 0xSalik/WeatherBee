import React, { useEffect, useRef, useState } from "react";
import searchIcon from "../assets/search.svg";
import WeatherData from "./WeatherData";
import linkIcon from "../assets/external-link.svg";
const WeatherCard = () => {
  const inputValue = useRef();
  const [cityName, setCityName] = useState("Los Angeles");
  const [error, setError] = useState(true);
  const [myData, setMyData] = useState([]);
  const [cityDetails, setCityDetails] = useState([]);
  const [dataWeather, setDataWeather] = useState([]);
  const [windData, setWindData] = useState([]);
  const APP_KEY = "1c237133e99ec58f807a43d3be1e2dc4";
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APP_KEY}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setCityDetails(data.city);
        setMyData(data.list[0].main);
        setDataWeather(data.list[0].weather[0]);
        setWindData(data.list[0].wind);
        setError(true);
      } else {
        setError(false);
      }
    })();
  });

  const onkeydownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setCityName(inputValue.current.value);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setCityName(inputValue.current.value);
  };

  return (
    <div className="box">
      <div className="cityName">
        {error ? (
          <p>
            {cityDetails.name}, {cityDetails.country}
            <a
              href={`https://en.wikipedia.org/wiki/${cityDetails.name}`}
              target="_ "
            >
              <img src={linkIcon} alt="link" />
            </a>
          </p>
        ) : (
          <p className="invalid">{"Invalid City Name"}</p>
        )}
        <div className="search">
          <input
            type="text"
            ref={inputValue}
            onKeyDown={onkeydownHandler}
            placeholder="City Name"
          />
          <img
            style={{ cursor: "pointer" }}
            onClick={onSubmitHandler}
            src={searchIcon}
            alt="searchIcon"
          />
        </div>
      </div>
      <WeatherData
        weatherData={myData}
        weather={dataWeather}
        city={cityDetails}
        windData={windData}
      />
    </div>
  );
};

export default WeatherCard;
