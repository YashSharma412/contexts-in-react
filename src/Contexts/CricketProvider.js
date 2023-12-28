import React, { useState } from "react";
import CricketContext from "./CricketContext";

const CricketProvider = (props) => {
    const [cricketer, setCricketer] = useState({
        name: "Yash Sharma",
        age: 24,
        runs: 10080,
        wickets: 200, 
    })

    const [actor, setActor] = useState({
      name: "Hrithik Roshan",
      age: 50, 
      movies: 100,
      awards: 50,
    })
  return (
    <CricketContext.Provider value={
        {
            cricketer, setCricketer , actor, setActor
        }
    }>
      {props.children}
    </CricketContext.Provider>
  );
};

export default CricketProvider;
