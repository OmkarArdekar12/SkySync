export function getWeatherCondition(data) {
  const main = data.weather[0].main.toLowerCase();
  const description = data.weather[0].description.toLowerCase();
  const humidity = data.main.humidity;
  const temp = data.main.temp;
  const clouds = data.clouds.all;

  if (
    main.includes("rain") ||
    description.includes("rain") ||
    description.includes("drizzle")
  ) {
    return ["🌧️ It is currently raining.", "rain"];
  }

  if (clouds > 85 && humidity > 70) {
    return ["🌦️ It is cloudy and humid. Rain is likely.", "cloudy"];
  }

  if (temp >= 35) {
    return ["🔥 It is extremely hot.", "hot"];
  }

  if (temp >= 30) {
    return ["☀️ It is hot and sunny.", "sunny"];
  }

  if (temp <= 10) {
    return ["❄️ It is cold.", "cold"];
  }

  if (clouds >= 50) {
    return ["🌥 It is partly cloudy.", "clouds"];
  }

  return ["🌤️ The weather is clear and pleasant.", "pleasant"];
}
