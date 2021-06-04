import React from "react";
import ArrowButton from "../GlobalComponents/ArrowButton";
import "./ListingsOneRow.css";

const ListingsOneRow = () => {
  const btnVerticalAlign = "vertical-aligned-btn";
  return (
    <div className="container listings-wrapper boxed-item">
        <ArrowButton style= {btnVerticalAlign} styleButtonColor="btn-white"/>
    </div>
  );
};

export default ListingsOneRow;
