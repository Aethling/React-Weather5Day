import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Title from './Title';
import Form from './Form';
import TableContainer from './TableContainer';
import DayContainer from './DayContainer';

const api_key = "6ef165ed56956a797f5b3a45375e1ad7";

class App extends Component {
	state = {
		data: undefined
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
				data: data
		}) 
		} else {
			console.log("error");
			this.setState({
				data: undefined
			})
		}
		console.log(this.state.data)
	} 
	checkForData() {
	   const isLoading = typeof this.state.data === 'undefined';
		if (isLoading) {
			return (<span>loading...</span>);
		} else {
			return (
				<div>
		           	<DayContainer />
		            <TableContainer data={this.state.data}/>
	            </div>
			);
		}
		}	 
  render() {
    return (
      <div>
        <Title/>
        <Form getWeather={this.getWeather}/>
        {this.checkForData()}
      </div>
    );
  }
}

export default App;
