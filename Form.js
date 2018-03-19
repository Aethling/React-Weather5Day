import React from "react";
import PropTypes from 'prop-types';

const Form = props => (
	<form onSubmit={this.props.getWeather}>
		<input type="text" name="city" placeholder="Enter City..."/>
		<input type="text" name="country" placeholder="Country Code..."/>
		<button type="submit">Enter</button>
	</form>
);
export default Form;