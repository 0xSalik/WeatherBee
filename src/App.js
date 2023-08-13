import WeatherCard from "./components/WeatherCard";
function App() {
  return (
    <>
      <div className="Header">
        WeatherBee &nbsp;
        <img
          alt="bee"
          src="https://uploads-ssl.webflow.com/5f778340ed26b167bd087abe/63fccc46c5784ae167b90edc_buzzing%20bee.svg"
          width={50}
        />
      </div>
      <div className="App">
        <WeatherCard />
      </div>
    </>
  );
}

export default App;
