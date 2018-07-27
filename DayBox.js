import React from 'react';
import DayImage from './DayImage';
import WeatherTable from './WeatherTable';



const DayBox = props => {
  const handleClick = () => {
    return <WeatherTable/>
  }
  return (
     <div className="box" onClick={()=> this.handleClick}>
        <h2 className="dayboxWeekday">{props.weekday}</h2>
        <h1 className="dayboxMain">{props.main }</h1>
        <DayImage main={props.main}/>
        <div className="tempContainer">
          <h2 className="temps">{props.max}&#8457;</h2>
          <h2 className="temps">{props.min}&#8457;</h2>
        </div>
      </div>
      )
}
   

export default DayBox;