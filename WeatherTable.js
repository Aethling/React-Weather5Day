import React from 'react';
import PropTypes from 'prop-types';

//gets data as prop or state?
//renders the data into table
const WeatherTable = props => 
    // console.log(this.props.data.list);
    // const dataObj = this.props.data;
    // const dataArr = dataObj.list[0];
    // console.log(props);
  
      <table>
      <tbody>City: 
      {props.data.list[0].main.temp}
        {/*props.data.map((item) => {
          return (
            <tr>
              <td></td>
            </tr>
            
            );
        })*/}
        </tbody>
      </table>

    //    WeatherTable.propTypes = {
    //   data: propTypes.array.isRequired
    // } 

export default WeatherTable;