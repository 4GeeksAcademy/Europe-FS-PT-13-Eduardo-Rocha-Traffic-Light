import React, { useState } from "react";

const TrafficLight = () => {
  const [redIsActive, setRedIsActive] = useState(false);
  const [yellowIsActive, setYellowIsActive] = useState(false);
  const [greenIsActive, setGreenIsActive] = useState(false);

  return (
    <div className="traffic-light">
      <div className={`red-light` + ` ${isActive ? 'selected' : '' }`} onClick={() => {setRedIsActive(!redIsActive)}}></div>
      <div className={`yellow-light` + ` ${isActive ? 'selected' : '' }`} onClick={() => {setYellowIsActive(!yellowIsActive)}}></div>
      <div className={`green-light` + ` ${isActive ? 'selected' : '' }`} onClick={() => {setGreenIsActive(!redIsActive)}}></div>
    </div>
  );
};

export default TrafficLight;
