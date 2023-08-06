import React from 'react';
import WeatherWidget from './WeatherWidget';

const WeatherWidgetContainer = () => {
  const locations = ['London', 'Edinburgh', 'Alicante'];

  return (
    <div>
      {locations.map((location) => (
        <WeatherWidget key={location} location={location} />
      ))}
    </div>
  );
};

export default WeatherWidgetContainer;