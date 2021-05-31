import React from "react";
import "./ApartmentCard.css";
import iconBeds from '../../Images/Apartments/Icons/Bed.png';
import iconBaths from '../../Images/Apartments/Icons/Shape.png';
import iconTables from '../../Images/Apartments/Icons/Size.jpg';

const ApartmentCard = (props) => {
  return (
    <div class="apartmentCard col-4">
      <img src={props.image}></img>
      <h2>{props.title}</h2>
      <div className="row">
        <div className="col-4">
          <div className="row border-top border-right">
            <div className="col-6">
              <img className="iconFilter " src={iconBeds} />
            </div>
            <div className="col-6">
              <p className="black-font">{props.beds}</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row border-top border-right">
            <div className="col-6">
              <img className="iconFilter" src={iconBaths} />
            </div>
            <div className="col-6">
              <p className="black-font">{props.baths}</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row border-top">
            <div className="col-6">
                <img className="iconFilter" src={iconTables}/>
            </div>
            <div className="col-6">
                <p className="black-font">{props.tables}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
