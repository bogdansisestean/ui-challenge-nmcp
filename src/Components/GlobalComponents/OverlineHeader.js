import React from "react";
import './OverlineHeader.css'

const OverlineHeader = (props) => {

  return (
    <div className={"overline-header" + " " + props.style}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default OverlineHeader;