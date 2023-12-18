import "./benefits.css"
import { useState } from "react";

function Benefit(props) {
  const [enlarge, setEnlarge] = useState(false);

  return (
    <div
      className={enlarge ? "project mx-auto Bgimg Added-height" : "project Bgimg"}
      id={props.index}
      onMouseEnter={() => setEnlarge(true)}
      onMouseLeave={() => setEnlarge(false)}
    >
      <div className="Details ">
        <span className={enlarge?" TopText TextEnlarged":"TopText"}>{props.header}</span>
        <br/>
        {/* <hr className={enlarge?"lineEnlarged":null} /> */}
        <div className="BottomText">
          <span  >{props.benefit}</span>
        </div>
      </div>
    </div>
  );  
}

export default Benefit;
