import React from 'react';

import Sunnysvg from './SVGcomponents/Sunnysvg';
import Cloudysvg from './SVGcomponents/Cloudysvg';
import Rainsvg from './SVGcomponents/Rainsvg';
import Snowysvg from './SVGcomponents/Snowysvg';
import Windysvg from './SVGcomponents/Windysvg';
import Showerssvg from './SVGcomponents/Showerssvg';



const DayImage = props => {

	const findRightImage = (main) => {
		switch (main) {
			case 'Rain':
	 			return <Rainsvg/>;	
			case 'Clear':
				return <Sunnysvg/>;
			case 'Snow':
				return <Snowysvg/>;
			case 'Windy':
				return <Windysvg/>;
			case 'Showers':
				return <Showerssvg/>;
			case 'Clouds':
				return <Cloudysvg/>;
			default:
				return "no image";
		}
	}

	return (
		<div>
			{findRightImage(props.main)}
		</div>
	);
	}

export default DayImage;