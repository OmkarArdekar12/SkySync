import UmbrellaIcon from "@mui/icons-material/Umbrella";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

export default function WeatherCondition({ weather }) {
  if (weather === "rain") {
    return (
      <div>
        <UmbrellaIcon sx={{ color: "#2196f3", fontSize: 40 }} /> It is currently
        raining.
      </div>
    );
  }

  if (weather === "cloudy") {
    return (
      <div>
        <ThunderstormIcon sx={{ color: "#673ab7", fontSize: 40 }} /> It is
        cloudy and humid. Rain is likely.
      </div>
    );
  }

  if (weather === "hot") {
    return (
      <div>
        <WbSunnyIcon sx={{ color: "#f44336", fontSize: 40 }} /> It is extremely
        hot.
      </div>
    );
  }

  if (weather === "sunny") {
    return (
      <div>
        <WbSunnyIcon sx={{ color: "#ff9800", fontSize: 40 }} /> It is hot and
        sunny.
      </div>
    );
  }

  if (weather === "cold") {
    return (
      <div>
        <AcUnitIcon sx={{ color: "#03a9f4", fontSize: 40 }} /> It is cold.
      </div>
    );
  }

  if (weather === "clouds") {
    return (
      <div>
        <FilterDramaIcon sx={{ color: "#90a4ae", fontSize: 40 }} /> It is partly
        cloudy.
      </div>
    );
  }

  return (
    <div>
      <CloudQueueIcon sx={{ color: "#4caf50", fontSize: 40 }} /> The weather is
      clear and pleasant.
    </div>
  );
}
