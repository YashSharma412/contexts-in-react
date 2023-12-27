import React, { useContext } from "react";
import CricketContext from "../Contexts/CricketContext";


const Hello = () => {

  let name = useContext(CricketContext)
  // console.log(CricketContext)
  return (
    <div>
      <h5>Hello {name}</h5>
    </div>
  );
};

export default Hello;
