import React from 'react';
import rain from './wi-day-rain.svg';
import sunny from './wi-day-sunny.svg';
import snow from './wi-day-snow.svg';
import windy from './wi-day-windy.svg';
import showers from './wi-day-showers.svg';
import cloudy from './wi-day-cloudy.svg';

const DayBox = props => (
     <div className="box">
        <h1>{props.main}</h1>
        <img alt="" src={windy}/>
        <div className="tempContainer">
          <h2 className="temps">{props.max}</h2>
          <h2 className="temps">{props.min}</h2>
        </div>
      </div>
)
   

export default DayBox;