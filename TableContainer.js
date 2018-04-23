import React from 'react';
import WeatherTable from './WeatherTable';

const TableContainer = props => (
      <div className="tableContainer">
      	<p className="weatherTableTitle">Hourly Weather</p>
        <table>
            <WeatherTable list={props.list}/>
        </table>
      </div>
)

export default TableContainer;