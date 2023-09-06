import React, { useState, useEffect } from "react";

const lightDurations = [3000, 2000, 1000];

const TrafficLight = () => {
  const [color, setColor] = useState('');
  const [toggle, setToggle] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 3);
    }, lightDurations[colorIndex]);
    return () => {
      clearTimeout(timer);
    };
  })

  const purplelight = () => {
      setToggle(prevState => !prevState)
  }

  return (
    <>
    <div className="traffic-light">
      <div className={`red-light` + ` ${color == "red" ? 'selected' : '' }`} onClick={() => {setColor("red")}} active={colorIndex === 0}></div>
      <div className={`yellow-light` + ` ${color == "yellow" ? 'selected' : '' }`} onClick={() => {setColor("yellow")}} active={colorIndex === 2}></div>
      <div className={`green-light` + ` ${color == "green" ? 'selected' : '' }`} onClick={() => {setColor("green")}} active={colorIndex === 1}></div>
      {toggle ? (<div className={`purple-light` + ` ${color == "purple" ? 'selected' : '' }`} onClick={() => {setColor("purple")}}></div>):null}
    </div>
    <div>
    <button onClick={purplelight}>AddLight</button>
    </div>
    </>
  );
};

export default TrafficLight;
