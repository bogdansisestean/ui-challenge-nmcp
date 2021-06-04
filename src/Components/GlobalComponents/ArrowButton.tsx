import React from "react";
import "./ArrowButton.css";

type Props ={
  styleButtonColor: string
  style?: string
}

const ArrowButton = ({styleButtonColor, style}: Props) => {
  return (
    <button
      type="button"
      className={"listings-button btn btn-light" + " " + styleButtonColor + " " + style}
    >
      See all listings
    </button>
  )
};

export default ArrowButton;
