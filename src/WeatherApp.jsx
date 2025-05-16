import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({});

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  const emptyInfo = () => {
    setWeatherInfo({});
  };

  return (
    <div className="WeatherApp">
      <h1>SkySync - Weather App</h1>
      <SearchBox updateInfo={updateInfo} emptyInfo={emptyInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
