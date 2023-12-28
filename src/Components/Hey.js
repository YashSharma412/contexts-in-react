import React from "react";
import CricketContext from "../Contexts/CricketContext";

const Hey = () => {
  console.log("refreshed cricketer")
  return (
    <div>
        <CricketContext.Consumer>
            {
                (value)=>(
                    <>
                        <h5>Name: {value.cricketer.name}</h5>
                        <p>Age: {value.cricketer.age}</p>
                        <p>Runs: {value.cricketer.runs}</p>
                        <p>Wickets: {value.cricketer.wickets}</p>
                        <button onClick={()=>value.setCricketer({...value.cricketer, wickets: value.cricketer.wickets+1})}>Increase wickets</button>
                    </>
                )
            }
        </CricketContext.Consumer>
    </div>
  );
};

export default Hey;
