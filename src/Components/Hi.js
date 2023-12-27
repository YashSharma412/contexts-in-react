import React, { useContext } from "react";
import CricketContext from "../Contexts/CricketContext";
const Hi = () => {

  let name = useContext(CricketContext)

  return (
    <div>
      <h5>Hii {name}</h5>
    </div>
  );
};

export default Hi;
