import React, { useContext } from "react";
import CricketContext from "../Contexts/CricketContext";
const Hi = () => {

  let {actor, setactor} = useContext(CricketContext)
  console.log("refreshed actor")
  return (
    <div>
      <h5>Hii </h5>
      <p>Name: {actor.name}</p>
      <p>Age: {actor.age}</p>
      <p>Movies: {actor.movies} </p>
      <p>Awards: {actor.awards}</p>
      <button onClick={()=>setactor({...actor, awards: actor.awards+1})}>Increase awards</button>
    </div>
  );
};

export default Hi;
