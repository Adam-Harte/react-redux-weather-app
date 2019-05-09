import * as React from 'react';

interface Props {
   alt: string;
   icon: string;
};

const WeatherIcon: React.FC<Props> = (props) => {
   return (
      <div>
         <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt={props.alt} />
      </div>
   )
};

export default WeatherIcon;
