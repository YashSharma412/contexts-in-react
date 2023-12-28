import React, { useContext } from "react";
import CricketContext from "../Contexts/CricketContext";


const Hello = () => {
  let {cricketer, setCricketer} = useContext(CricketContext);
  console.log("refreshed cricketer")
  return (
    <div>
      <h5>Name: {cricketer.name}</h5>
      <p>Age: {cricketer.age}</p>
      <p>Runs: {cricketer.runs}</p>
      <p>Wickets: {cricketer.wickets}</p>
      <button onClick={()=>setCricketer({...cricketer, wickets: cricketer.wickets+1})}>Increase wickets</button>
    </div>
  );
};

export default Hello;
