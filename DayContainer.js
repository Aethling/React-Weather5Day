import React from 'react';
import DayBox from './DayBox';

//receiving array. getting 5 components. passing them each 3 props from array.
const DayContainer = props => {
		const weekArr = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed",];
		let d = new Date();
	return (
     <div className="box-container">
     	{props.data5Day.map((item, index) => 
     		<DayBox key={index}
     				weekday={weekArr[dayNum + index]}
     				main={item.weather[0].main}
     				max={Math.round(item.main.temp_max)}
     				min={Math.round(item.main.temp_min)}
                         />
     		)}
      </div>
   )
}

   

export default DayContainer;