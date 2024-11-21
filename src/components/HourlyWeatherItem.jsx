import { weatherCodes } from "../constants";

const HourlyWeatherItem = ({ hourlyWeather }) => {
  // Extract and format temperature and time
  const temperature = Math.floor(hourlyWeather.temp_c);
  let time = hourlyWeather.time.split(" ")[1].substring(0, 5);

  // Find the appropriate weather icon
  const weatherIcon = Object.keys(weatherCodes).find((icon) => weatherCodes[icon].includes(hourlyWeather.condition.code));

  return (
    <li className="weather-item">
      <p className="time">{time}</p>
      <img src={`icons/${weatherIcon}.svg`} className="weather-icon" />
      <p className="temperature">{temperature}°</p>
    </li>
  );
};

export default HourlyWeatherItem;
