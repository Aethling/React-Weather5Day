import React from 'react';

//renders the data into table
const WeatherTable = props => (
  <tr>
        {props.data.list.map((item, index) => {
          return ([
              <td key={"temp" + index}>{props.data.list[2].main.temp}</td>,
              <td key={'desc' + index}>{item.weather[0].description}</td>
            ]);
        })}
  </tr>
)

export default WeatherTable;