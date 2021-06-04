import React from "react";
import "./MainDescription.css";
import ArrowButton from "../GlobalComponents/ArrowButton";
import OverlineHeader from "../GlobalComponents/OverlineHeader";

type Props = {
  styleBackgroundColor?: string,
  title: string,
  headingFontColor?: string,
  fontColor: string,
  styleButtonColor: string
}

const MainDescription = ({styleBackgroundColor, title, headingFontColor, fontColor, styleButtonColor}: Props) => {
  return (
    <div className={styleBackgroundColor + " " + "align-items-center" + " " + "main-description-box"}>
      <OverlineHeader title={title} style={headingFontColor}/>
      <p className={fontColor}>
        Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne
        ferae quidem se repellere, idque instituit docere sic: omne animal,
        simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri,
        altera occulta quaedam et voluptatem accusantium doloremque.
      </p>
      <ArrowButton styleButtonColor={styleButtonColor}/>
    </div>
  );
};

export default MainDescription;
