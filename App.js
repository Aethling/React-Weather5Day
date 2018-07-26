import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Title from './Title';
import Form from './Form';
import TableContainer from './TableContainer';
import DayContainer from './DayContainer';


const api_key = "6ef165ed56956a797f5b3a45375e1ad7";

class App extends Component {
	// state = {
	
	// 	data: {
	// 		city: "Portland",
	// 		list: [
	// 			{
	// 				main: {
	// 					temp: 44.3,
	// 					temp_max: 54,
	// 					temp_min: 40
	// 				},
	// 				weather: [
	// 					{
	// 						main: "rain"
	// 					}
	// 				]
	// 			},
	// 			{
	// 				main: {
	// 					temp: 47,
	// 					temp_max: 58,
	// 					temp_min: 48
	// 				},
	// 				weather: [
	// 					{
	// 						main: "cloudy"
	// 					}
	// 				]
	// 			},
	// 			{
	// 				main: {
	// 					temp: 45.3,
	// 					temp_max: 57,
	// 					temp_min: 44
	// 				},
	// 				weather: [
	// 					{
	// 						main: "rain"
	// 					}
	// 				]
	// 			},
	// 			{
	// 				main: {
	// 					temp: 47.3,
	// 					temp_max: 64,
	// 					temp_min: 30
	// 				},
	// 				weather: [
	// 					{
	// 						main: "sunny"
	// 					}
	// 				]
	// 			},
	// 			{
	// 				main: {
	// 					temp: 54.3,
	// 					temp_max: 74,
	// 					temp_min: 30
	// 				},
	// 				weather: [
	// 					{
	// 						main: "snow"
	// 					}
	// 				]
	// 			}
	// 		]
	// 	}
	// };
	state = {
		data: undefined,
		data5Day: undefined
	}
	getWeather = async (e) => {
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		e.preventDefault();
		const call_api = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&APPID=${api_key}`);
		const data = await call_api.json();
		if (city && country) {
			console.log(data);
			this.setState({
				data: data,
				data5Day: [
					data.list[0],
					data.list[8],
					data.list[16],
					data.list[24],
					data.list[32],
				]
			}) 
			console.log(this.state.data5Day);
		} else {
			console.log("error");
			this.setState({
				data: undefined
			})
		}
	} 


  render() {
	   const isLoading = typeof this.state.data === 'undefined';
    return (
      <div>
        <Title/>
        <Form getWeather={this.getWeather}/>
         { isLoading
           ? <h1 className="has-text-danger">Enter a city and state or city and country.</h1>
           : [
			        <p className="cityName has-text-danger">Daily weather for: {this.state.data.city.name}</p>,
			       	<DayContainer data5Day={this.state.data5Day}
			       								list={this.state.data.list} />,
			        <TableContainer list={this.state.data.list} />
            ]
         }
      </div>
    );
  }
}

export default App;
