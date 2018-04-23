import React from 'react';
import rain from './weatherIcons/wi-day-rain.svg';
import sunny from './weatherIcons/wi-day-sunny.svg';
import snow from './weatherIcons/wi-day-snow.svg';
import windy from './weatherIcons/wi-day-windy.svg';
import showers from './weatherIcons/wi-day-showers.svg';
import cloudy from './weatherIcons/wi-day-cloudy.svg';


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
			case 'rain':
	 			return imgObj.rainyImg;	
			case 'sunny':
				return imgObj.sunnyImg;
			case 'snow':
				return imgObj.snowyImg;
			case 'windy':
				return imgObj.windyImg;
			case 'showers':
				return imgObj.showersImg;
			case 'cloudy':
				return imgObj.cloudyImg;

		}
	}

	return (
		<div>
			<img alt="Img" src={findRightImage(props.main)}/>
		</div>
	);
	}

export default DayImage;