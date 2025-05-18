import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { getWeatherCondition } from "./utils/weatherUtils.js";

export default function SearchBox({ updateInfo, emptyInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = import.meta.env.VITE_WEATHER_API;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let [currentWeather, image] = getWeatherCondition(jsonResponse);

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        currentWeather: currentWeather,
        image: image,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
    } catch (err) {
      setError(true);
      emptyInfo();
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit} className="container">
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <>
            <h3 style={{ color: "red" }}>Oops! No such place exists!</h3>
          </>
        )}
      </form>
    </div>
  );
}
