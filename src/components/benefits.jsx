import "./benefits.css"
import { useState } from "react";

function Benefit(props) {
  const [enlarge, setEnlarge] = useState(false);

  return (
    <div
      className={enlarge ? "proj mx-auto bgimg added-height" : "proj bgimg"}
      id={props.index}
      onMouseEnter={() => setEnlarge(true)}
      onMouseLeave={() => setEnlarge(false)}
    >
      <div className="details ">
        <span className={enlarge?" topText textEnlarged":"topText"}>{props.header}</span>
        <br/>
        {/* <hr className={enlarge?"lineEnlarged":null} /> */}
        <div className="bottomText">
          <span  >{props.benefit}</span>
        </div>
      </div>
    </div>
  );  
}

export default Benefit;
