import React from "react";

const WeatherData = (props) => {
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  const sideRight = () => {
    var slider = document.getElementById("scrolledItem");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  const sideLeft = () => {
    var slider = document.getElementById("scrolledItem");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  return (
    <div className="weatherData">
      <div className="currtemp">
        <div className="tempAndLogo">
          <div>
            <img
              src={`assets/${props.weather.icon}.svg`}
              width={200}
              alt="icon"
            />
          </div>
          <div>
            {Math.round(props.weatherData.temp)}&deg;C
            <p>{props.weather.description}</p>
          </div>
        </div>
        <div className="windData">
          <p>
            {"Wind: "}
            <span>{props.windData.speed}&nbsp;mph</span>
          </p>
          <p>
            {"Min Temp: "}
            <span>{Math.round(props.weatherData.temp_min)}&deg;C</span>
          </p>
          <p>
            {"Max Temp: "}
            <span>{Math.round(props.weatherData.temp_max)}&deg;C</span>
          </p>
        </div>
      </div>
      <div id="scrolledItem" className="forecastdata">
        <div>
          <p>{"Sunrise"}</p>
          <img
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunrise.svg"
            }
            width={100}
            alt="icon"
          />
          <p>{getTime(props.city.sunrise)}</p>
        </div>
        <div>
          <p>{"Humidity"}</p>
          <img
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg"
            }
            width={100}
            alt="icon"
          />
          <p>{props.weatherData.humidity}&nbsp;mm</p>
        </div>
        <div>
          <p>{"Wind"}</p>
          <img
            src={"https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg"}
            width={100}
            alt="icon"
          />
          <p>{props.windData.speed}&nbsp;mph</p>
        </div>
        <div>
          <p>{"Pressure"}</p>
          <img
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/pressure-low.svg"
            }
            width={100}
            alt="icon"
          />
          <p>{props.weatherData.pressure}&nbsp;mb</p>
        </div>

        <div>
          <p>{"Sunset"}</p>
          <img
            src={
              "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg"
            }
            width={100}
            alt="icon"
          />
          <p>{getTime(props.city.sunset)}</p>
        </div>
      </div>
      <p className="copyright">&copy; Salik Khan 2023</p>
      <span>
        <a
          href="https://github.com/thesalikkhan/WeatherBee"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/salik.k_/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </a>
      </span>
      <p onClick={sideLeft} className="leftarrow">
        &lt;
      </p>
      <p onClick={sideRight} className="rightarrow">
        &gt;
      </p>
    </div>
  );
};

export default WeatherData;
