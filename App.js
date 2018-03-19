import React, { Component } from 'react';
import Title from './Title';
import Form from './Form';
import WeatherTable from './WeatherTable';

const api_key = "6ef165ed56956a797f5b3a45375e1ad7";

class App extends Component {
	state = {
		data: undefined
	};

	getWeather = async (e) => {
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		e.preventDefault();
		const call_api = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&APPID=${api_key}`);
		const data = await call_api.json();
		if (city && country) {
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

  render() {
    return (
      <div>
        <Title/>
        <Form getWeather={this.getWeather}/>
        <WeatherTable data={this.state.data.list[0].main.temp}/>
      </div>
    );
  }
}

export default App;
