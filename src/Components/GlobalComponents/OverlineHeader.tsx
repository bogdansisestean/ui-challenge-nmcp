import React from "react";
import './OverlineHeader.scss'
type Props ={
  style?: string,
  title: string
}
const OverlineHeader = ({style, title}: Props) => {

  return (
    <div className={"overline-header" + " " + style}>
      <h2>{title}</h2>
    </div>
  );
};

export default OverlineHeader;