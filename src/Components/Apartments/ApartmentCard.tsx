import React from "react";
import "./ApartmentCard.css";
// import os from 'os';
// import { type } from "node:os";
import iconBeds from '../../Images/Apartments/Icons/Bed.png';
import iconBaths from '../../Images/Apartments/Icons/Shape.png';
import iconTables from '../../Images/Apartments/Icons/Size.jpg';

// const iconBeds = require('../../Images/Apartments/Icons/Bed.png');
// const iconBaths = require('../../Images/Apartments/Icons/Shape.png');
// const iconTables = require('../../Images/Apartments/Icons/Size.jpg');

type Props = {      
  image: string;
  title: string;
  beds: number;
  baths: number;
  tables: number;
}

const ApartmentCard = ({image, title, beds, baths, tables}: Props) => {
  return (
    <div className="apartmentCard col-4">
      <img src={image}></img>
      <h2>{title}</h2>
      <div className="row">
        <div className="col-4">
          <div className="row border-top border-right">
            <div className="col-6">
              <img className="iconFilter " src={iconBeds} />
            </div>
            <div className="col-6">
              <p className="black-font">{beds}</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row border-top border-right">
            <div className="col-6">
              <img className="iconFilter" src={iconBaths} />
            </div>
            <div className="col-6">
              <p className="black-font">{baths}</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row border-top">
            <div className="col-6">
                <img className="iconFilter" src={iconTables}/>
            </div>
            <div className="col-6">
                <p className="black-font">{tables}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard
