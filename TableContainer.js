import React from 'react';
import WeatherTable from './WeatherTable';

const TableContainer = props => (
      <div>
        <table>
          <tbody>
            <WeatherTable data={props.data}/>
          </tbody>
        </table>
      </div>
)

export default TableContainer;