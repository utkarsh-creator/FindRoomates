import React from "react";
import Pref1 from "../images/Pref1.svg";
import BunkBed from "../images/bunk_bed.png";
import Roommate from "../images/roomate.png";
import Pref1Path from "../images/Pref1Path.svg";
import "../styles/pref1.css";

const Prefrence1 = () => {
  return (
    <div className="pref1main">
      <div className="main">
        {/* <img src={Pref1Path} alt="" className="path" /> */}
        <div>
          <img src={Pref1} alt="" className="board" />
          <div className="box1">
            <img src={BunkBed} alt="" className="bed" />
            <p>Room</p>
          </div>
          <div className="box2">
            <img src={Roommate} alt="" className="person" />
            <p>Roommate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prefrence1;
