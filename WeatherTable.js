import React from 'react';
import PropTypes from 'prop-types';

//gets data as prop or state?
//renders the data into table
const WeatherTable = props => (
  <tr>
      {props.data.list[2].main.temp}
        {props.data.list.map((item, index) => {
          return (
              <td>{item.weather[0].description}</td>
            );
        })}
  </tr>
)

export default WeatherTable;