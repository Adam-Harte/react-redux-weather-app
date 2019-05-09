import * as React from 'react';

import './WeatherInfo.css';

interface Props {
  description: string;
  humidity: string;
  temp: string;
  wind: string;
}

const WeatherInfo: React.FC<Props> = props => {
  return (
    <div className="WeatherInfo">
      <h1 className="description">{props.description}</h1>
      <p className="temp">{props.temp}</p>
      <p className="wind">{props.wind}</p>
      <p className="humidity">{props.humidity}</p>
    </div>
  );
};

export default WeatherInfo;
