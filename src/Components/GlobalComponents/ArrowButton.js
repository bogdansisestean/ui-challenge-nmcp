import React from "react";
import "./ArrowButton.css";

const ArrowButton = (props) => {
  return (
    <button
      type="button"
      class={"listings-button btn btn-light" + " " + props.styleButtonColor + " " + props.style}
    >
      See all listings
    </button>
  )
};

export default ArrowButton;
