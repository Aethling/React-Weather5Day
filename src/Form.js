import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<div className="field has-addons">
			<div className="control">
				<input className="input is-danger has-text-grey-darker" type="text" name="city" placeholder="Enter City..."/>
				<input className="input is-danger has-text-grey" type="text" name="country" placeholder="Country Code..."/>
			</div>
			<div className="control">
				<button type="submit" className="button is-danger is-outlined">Enter</button>
			</div>
		</div>
	</form>
);
export default Form;