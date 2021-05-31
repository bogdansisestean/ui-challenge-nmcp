import React from "react";
import './OverlineHeader.css'

const OverlineHeader = (props) => {

  return (
    <div className="overline-header">
      <h2>{props.title}</h2>
    </div>
  );
};

export default OverlineHeader;