import React from 'react';
import DayBox from './DayBox';

//receiving array. getting 5 components. passing them each 3 props from array.
const DayContainer = props => {
		const weekArr = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed",];
		let d = new Date();
		let dayNum = d.getDay();

	//these 5 functions extract the high and low temps for 8 3-hour segments for 5 days and puts them into arrays
	//to be able to display the accurate high and low temps in the dayboxes.	
  let maxArray = [];
  let minArray = [];
  const findHighLow = () => {
      props.list.map((item) => 
        maxArray.push(item.main.temp_max) && minArray.push(item.main.temp_min)
      )
    }
  const getHighs = (index1, index2) => {
    return maxArray.slice(index1, index2).sort((a, b)=> a-b).pop();
  }
  const getLows = (index1, index2) => {
    return minArray.slice(index1, index2).sort((a, b)=> a-b).reverse().pop();
  }
  const highArray = () => {
  	let highs = [];
  	for (var i = 0; i < 40; i=i+8) {
	  	highs.push(getHighs(i, i+8));
  		}
  	return highs
  }
  const lowArray = () => {
  	let lows = [];
  	for (var i = 0; i < 40; i=i+8) {
	  	lows.push(getLows(i, i+8));
  		}
  	return lows
  }
  findHighLow();
  let low = lowArray();
  let high = highArray();

	return (
     <div className="box-container">
     	{props.data5Day.map((item, index) => 
     		<DayBox key={index}
     				weekday={weekArr[dayNum + index]}
     				main={item.weather[0].main}
     				max={Math.round(high[index])}
     				min={Math.round(low[index])}
     				list={props.list}
						handleChangeTable={()=> props.changeTableAt(index)}

                         />
     		)}
      </div>
   )
}

   

export default DayContainer;