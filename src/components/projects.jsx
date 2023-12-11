import "./projects.css"
import { useState } from "react";

function Project(props) {
  const [enlarge, setEnlarge] = useState(false);

  return (
    <div
      className={enlarge ? "proj bgimg added-height" : "proj bgimg"}
      id={props.index}
      onMouseEnter={() => setEnlarge(true)}
      onMouseLeave={() => setEnlarge(false)}
    >
      <div className="details">
        <span className={enlarge?"textEnlarged":null}>${props.price}</span>
        <br/>
        {/* <hr className={enlarge?"lineEnlarged":null} /> */}
        <div className="bottomText">
          <span  >{props.duration}</span>
        </div>
      </div>
    </div>
  );  
}

export default Project;
