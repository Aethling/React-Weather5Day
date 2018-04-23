import React from 'react';

//renders the data into table
const WeatherTable = props => 
	<tbody>
    {props.list.map((item, index) => 
		  <tr className="tableRow" key={index}>
        <td>Current temp: {item.main.temp} </td>
        <td>Description: {item.weather[0].main} </td>
        <td>High: {item.main.temp_max} </td>
        <td>Low: {item.main.temp_min} </td>
		  </tr>
     
    )}
  </tbody>

export default WeatherTable;