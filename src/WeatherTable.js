import React from 'react';

//renders the data into table
const WeatherTable = props => 
	<tbody>
      <tr className="tableHeading has-text-danger">
        <td>Date and Time</td>
        <td>Description</td>
        <td>High</td>
        <td>Low</td>
        <td>Wind</td>
        <td>Wind Dir</td>
        <td>Humidity</td>
      </tr>
    {props.list.map((item, index) =>  
		  <tr className="tableRow" key={index}>
            <td>{item.dt_txt}</td>
            <td>{item.weather[0].main}</td>
            <td>{item.main.temp_max} F</td>
            <td>{item.main.temp_min} F</td>
            <td>{item.wind.speed} mph</td>
            <td>{Math.round(item.wind.deg)} </td>
            <td>{item.main.humidity} %</td>
		  </tr>
     
    )}
  </tbody>

export default WeatherTable;