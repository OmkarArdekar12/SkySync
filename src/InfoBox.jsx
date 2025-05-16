import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WeatherCondition from "./WeatherCondition.jsx";
import { capitalize } from "./utils/captilizeSentence.js";

export default function InfoBox({ info }) {
  if (info && Object.keys(info).length === 0) {
    return <></>;
  }

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 450 }}>
          <CardMedia
            sx={{
              height: 120,
              width: 400,
              objectFit: "contain",
              backgroundColor: "#f5f5f5",
              padding: 3,
            }}
            image={`/${info.image}.png`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h1 style={{ margin: 0, padding: 0 }}>
                {info.city
                  .split(" ")
                  .map((word) => capitalize(word))
                  .join(" ")}
              </h1>
              <WeatherCondition weather={info.image} />
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Temperature = {info.temp}&deg;C &nbsp;&nbsp; Humidity ={" "}
              {info.humidity}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>
                Min Temperature = {info.tempMin}&deg;C &nbsp;&nbsp; Max
                Temperature = {info.tempMax}&deg;C
                <br />
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
