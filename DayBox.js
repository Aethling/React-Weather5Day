import React from 'react';
import DayImage from './DayImage';



const DayBox = props => {
  return (
     <div className="box">
        <h1>{props.main }</h1>
        <DayImage weatherImg={props.images}
                  main={props.main}/>
        <div className="tempContainer">
          <h2 className="temps">{props.max}</h2>
          <h2 className="temps">{props.min}</h2>
        </div>
      </div>
      )
}
   

export default DayBox;