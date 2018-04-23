import React from 'react';
import DayBox from './DayBox';

//receiving array. getting 5 components. passing them each 3 props from array.
const DayContainer = props => 
     <div className="box-container">
     	{props.allData.list.map((item, index) =>
     		<DayBox key={index}
     				main={item.weather[0].main}
     				max={item.main.temp_max}
     				min={item.main.temp_min}
                         weatherImg={props.images}
                         />
     		)}
      </div>

   

export default DayContainer;