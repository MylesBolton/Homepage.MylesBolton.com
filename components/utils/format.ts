export const formatWeatherData = (weatherData: any) => {
  const temperature = weatherData.current.temp_c;
  const humidity = weatherData.current.humidity;
  const windSpeed = weatherData.current.wind_kph;

  const formattedWeatherData = {
    temperature: `${temperature}°C`,
    humidity: `${humidity}%`,
    windSpeed: `${windSpeed} km/h`,
  };

  return formattedWeatherData;
};