import axios from 'axios';

const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeatherData = async (location: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        key: 'YOUR_API_KEY',
        q: location,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};