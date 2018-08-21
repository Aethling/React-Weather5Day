import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Title from './Title';
import Form from './Form';
import DayContainer from './DayContainer';
import TableContainer from './TableContainer';


const api_key = "6ef165ed56956a797f5b3a45375e1ad7";

class App extends Component {
	
	state = {
		data: undefined,
		data5Day: undefined,
		tableIndex: undefined,
		error: ""
	}
	getWeather = async (e) => {
		this.resetError();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		e.preventDefault();
		try {
			const call_api = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&APPID=${api_key}`);
			const data = await call_api.json();
			if (data) {
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
		}
		} catch(err) {
			this.setState({
				error: true
			})
			console.log("this is an error")
			console.log(err);;
		}
	};

	changeTableAt = index => {
		this.setState({
			tableIndex: index
		})
		console.log(index);
	}
	resetError = () => {
		this.setState({
			error: false
		})
	}
  render() {
	   const isLoading = typeof this.state.data === 'undefined';
	   if (this.state.error) {
	   	return (
		        <div>
		        	<Title/>
		        	<Form getWeather={this.getWeather}/>
			   			<h1 className="has-text-danger">City and state not found</h1>
			   		</div>
			 )
	   } else {
		    return (
		      <div>
		        <Title/>
		        <Form getWeather={this.getWeather}/>
		         { isLoading
		           ? <h1 className="has-text-danger">Enter a city and state or city and country.</h1>
		           : [
					        <p className="cityName has-text-danger">Daily weather for: {this.state.data.city.name}</p>,
					       	<DayContainer data5Day={this.state.data5Day}
					       								list={this.state.data.list}
					       								changeTableAt={this.changeTableAt} />,
					        <TableContainer list={this.state.data.list}
				        									tableIndex={this.state.tableIndex}/>
		            ]
		         }
		        
		      </div>
		    );
		  }
		}
}

export default App;
