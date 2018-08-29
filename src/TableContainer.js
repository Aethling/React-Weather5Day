import React from 'react';
import WeatherTable from './WeatherTable';

const TableContainer = props => {
	const getDayTable = () => {
		 if (props.tableIndex === 0) {
			return <WeatherTable list={props.list.slice(0, 7)}/>
		} else if (props.tableIndex === 1) {
			return <WeatherTable list={props.list.slice(8, 16)}/>
		} else if (props.tableIndex === 2) {
			return <WeatherTable list={props.list.slice(16, 24)}/>
		} else if (props.tableIndex === 3) {
			return <WeatherTable list={props.list.slice(24, 32)}/>
		} else if (props.tableIndex === 4) {
			return <WeatherTable list={props.list.slice(32, 40)}/>
		}
	}
	return (
      <div className="tableContainer">
      	<p className="weatherTableTitle has-text-danger">Hourly Weather</p>
       <p>Click on a day</p>
    		<table>
    			{getDayTable()}
        </table> 
      </div> 

  )
}

export default TableContainer;