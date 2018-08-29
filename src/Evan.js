const splitListIntoDays = function(list) => list split into days 

const calcMinTemp = (list) => {
	let minValue;
	list.forEach(x => {
		if (!minValue || x.main.temp_min < minValue) minValue = x;
	});
	return minValue;
}


formatData(apiList) {
	const listByDay = splitListIntoDays(apiList);

	return listByDay.map((dayReadings, index) => {
		return {
			min: calcMinTemp(dayReadings),
			max: calcMaxTemp(dayReadings),
			day: getDayByIndex(startDay, index),
			weather: getWeatherForDay(dayReadings),
		}
	})
	//[[...day1], [...day2]]
// for each day
//    calc max, min
//		add weather, day name
}

function calcMax(list) // returns max temp given any list of things
function calcMin(list) // returns min temp given any list of things

[
{
	day: 'Monday',
	high: 80,
	low: 60,
	weather: 'cloudy',
},{
	day: 'Tuesday',
	high: 80,
	low: 60,
	weather: 'cloudy',
},{
	day: 'Monday',
	high: 80,
	low: 60,
	weather: 'cloudy',
},{
	day: 'Monday',
	high: 80,
	low: 60,
	weather: 'cloudy',
},
//saved this here
	const getDayTable = (tableIndex) => {
		switch (tableIndex) {
			case 0:
	 			<WeatherTable list={props.list.slice(0, 8)}/>;
	 			break;	
			case 1:
				<WeatherTable list={props.list.slice(8, 16)}/>;
				break;
			case 2:
				<WeatherTable list={props.list.slice(16, 24)}/>;
				break;
			case 3:
				<WeatherTable list={props.list.slice(24, 32)}/>;
				break;
			case 4:
				<WeatherTable list={props.list.slice(32, 40)}/>
				break;
			default:
				<h3>Click on a Day<h3>
		}
	}