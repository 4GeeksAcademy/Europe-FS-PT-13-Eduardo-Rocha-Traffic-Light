import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("");
  
  return (
    <div className="traffic-light">
      <div className={`red-light` + ` ${color == "red" ? 'selected' : '' }`} onClick={() => {setColor("red")}}></div>
      <div className={`yellow-light` + ` ${color == "yellow" ? 'selected' : '' }`} onClick={() => {setColor("yellow")}}></div>
      <div className={`green-light` + ` ${color == "green" ? 'selected' : '' }`} onClick={() => {setColor("green")}}></div>    
    </div>
  );
};

export default TrafficLight;
