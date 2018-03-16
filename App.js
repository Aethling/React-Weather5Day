import React, { Component } from 'react';
import Title from './Title';
import Form from './Form';
import WeatherTable from './WeatherTable';

const api_key = "6ef165ed56956a797f5b3a45375e1ad7";

class App extends Component {
	state = {
		city: undefined,
		day1: undefined,
		day2: undefined,
		day3: undefined
	}

	getWeather = async (e) => {
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		e.preventDefault();
		const call_api = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&APPID=${api_key}`);
		const data = await call_api.json();
		console.log(data);
		if (city && country) {
			console.log("setting state");
			this.setState({
				city: data.city.name,
				day1: {early: data.list[0].weather[0].main,
						mid: data.list[3].weather[0].main,
						late: data.list[5].weather[0].main
					},
				day2: {early: data.list[6].weather[0].main,
						mid: data.list[9].weather[0].main,
						late: data.list[10].weather[0].main
					},
				day3: {early: data.list[12].weather[0].main,
						mid: data.list[14].weather[0].main,
						late: data.list[16].weather[0].main
					},
		}) 
		} else {
			console.log("error");
			this.setState({
				city: undefined,	
				day1: undefined,
				day2: undefined,
				day3: undefined,
			})

		}
	} 
  render() {
    return (
      <div>
        <Title/>
        <Form getWeather={this.getWeather}/>
        <WeatherTable city={this.state.city}
        				day1early={this.state.day1.early.list[0].weather[0].main}
        				day1mid={this.state.day1.mid.list[3].weather[0].main}
        				day1late={this.state.day1.late.list[5].weather[0].main}
        				day2early={this.state.day2.early.list[6].weather[0].main}
        				day2mid={this.state.day2.mid.list[9].weather[0].main}
        				day2late={this.state.day2.late.list[10].weather[0].main}
        				day3early={this.state.day3.early.list[12].weather[0].main}
        				day3mid={this.state.day3.mid.list[14].weather[0].main}
        				day3late={this.state.day3.late.list[16].weather[0].main}
        				/>
      </div>
    );
  }
}

export default App;
