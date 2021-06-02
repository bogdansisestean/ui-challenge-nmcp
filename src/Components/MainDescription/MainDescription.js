import React from "react";
import "./MainDescription.css";
import ArrowButton from "../GlobalComponents/ArrowButton";
import OverlineHeader from "../GlobalComponents/OverlineHeader";

const MainDescription = (props) => {
  return (
    <div className={props.styleBackgroundColor + " " + "align-items-center" + " " + "main-description-box"}>
      <OverlineHeader title={props.title} style={props.headingFontColor}/>
      <p className={props.fontColor}>
        Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne
        ferae quidem se repellere, idque instituit docere sic: omne animal,
        simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri,
        altera occulta quaedam et voluptatem accusantium doloremque.
      </p>
      <ArrowButton styleButtonColor={props.styleButtonColor}/>
    </div>
  );
};

export default MainDescription;
