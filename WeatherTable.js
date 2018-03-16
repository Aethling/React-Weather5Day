import React, { Component } from 'react';
//gets data as prop or state?
//renders the data into table
class WeatherTable extends Component {
  render(props){

    return(
      <table>
      <tbody>
        <tr>
          <td>City: {this.props.city}</td>
          <td>day1: {this.props.day1.early.list[0].weather[0].main}</td>
          <td>day1: {this.props.day1.mid.list[3].weather[0].main}</td>
          <td>day1: {this.props.day1.late.list[5].weather[0].main}</td>
          <td>day2: {this.props.day2.early.list[6].weather[0].main}</td>
          <td>day2: {this.props.day2.mid.list[9].weather[0].main}</td>
          <td>day2: {this.props.day2.late.list[10].weather[0].main}</td>
          <td>day3: {this.props.day3.early.list[12].weather[0].main}</td>
          <td>day3: {this.props.day3.mid.list[14].weather[0].main}</td>
          <td>day3: {this.props.day3.late.list[16].weather[0].main}</td>
        </tr>
        </tbody>
      </table>
      );
  }
};

export default WeatherTable;