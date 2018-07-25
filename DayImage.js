import React from 'react';
import rain from './weatherIcons/wi-day-rain.svg';
import sunny from './weatherIcons/wi-day-sunny.svg';
import snow from './weatherIcons/wi-day-snow.svg';
import windy from './weatherIcons/wi-day-windy.svg';
import showers from './weatherIcons/wi-day-showers.svg';
import cloudy from './weatherIcons/wi-day-cloudy.svg';
import Sunnysvg from './Sunnysvg';
import Cloudysvg from './SVGcomponents/Cloudysvg';


const DayImage = props => {
	const imgObj = {
			rainyImg: rain,
			sunnyImg: sunny,
			snowyImg: snow,
			windyImg: windy,
			showeryImg: showers,
			cloudyImg: cloudy
		}
	const findRightImage = (main) => {
		switch (main) {
			case 'Rain':
	 			return imgObj.rainyImg;	
			case 'Clear':
				return <Sunnysvg/>;
			case 'Snow':
				return imgObj.snowyImg;
			case 'Windy':
				return imgObj.windyImg;
			case 'Showers':
				return imgObj.showersImg;
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