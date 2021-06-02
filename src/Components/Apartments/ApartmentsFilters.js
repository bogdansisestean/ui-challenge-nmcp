import React, { useState } from "react";
import LocationFilter from "./Filters/LocationFilter";
import LookingForFilter from "./Filters/LookingForFilter";
import Price from "./Filters/Price";
import PropertyType from "./Filters/PropertyType";
import ApartmentCard from "../Apartments/ApartmentCard";
import Location1 from "../../Images/Apartments/House Example 1.png";
import "./ApartmentsFilter.css";

function ApartmentsFilters() {
  const rentings = [
    {
      image: Location1,
      title: "Malto House",
      beds: 4,
      baths: 3,
      tables: 2,
      location: "New York",
      propertyType: "apartment",
      Price: 200,
      lookingType: "Loan"
    },
    {
      image: Location1,
      title: "Malto House",
      beds: 4,
      baths: 2,
      tables: 2,
      location: "Texas",
      propertyType: "apartment",
      Price: 200,
      lookingType: "Renting"
    },
    {
      image: Location1,
      title: "Malto House",
      beds: 4,
      baths: 2,
      tables: 2,
      location: "Pheonix",
      propertyType: "apartment",
      Price: 200,
      lookingType: "Buying"
    },
    {
      image: Location1,
      title: "Malto House",
      beds: 4,
      baths: 2,
      tables: 2,
      location: "New York",
      propertyType: "apartment",
      Price: 200,
      lookingType: "Loan"
    },
    {
      image: Location1,
      title: "Malto House",
      beds: 4,
      baths: 2,
      tables: 2,
      location: "Pheonix",
      propertyType: "apartment",
      Price: 200,
      lookingType: "Renting"
    },
    {
      image: Location1,
      title: "Malto House",
      beds: 4,
      baths: 2,
      tables: 2,
      location: "Texas",
      propertyType: "apartment",
      Price: 200,
      lookingType: "Loan"
    },
    {
      image: Location1,
      title: "Malto House",
      beds: 4,
      baths: 2,
      tables: 2,
      location: "Texas",
      propertyType: "apartment",
      Price: 200,
      lookingType: "Renting"
    },
    {
      image: Location1,
      title: "Malto House",
      beds: 4,
      baths: 2,
      tables: 2,
      location: "Texas",
      propertyType: "apartment",
      Price: 200,
      lookingType: "Buying"
    },
    {
      image: Location1,
      title: "Malto House",
      beds: 4,
      baths: 2,
      tables: 2,
      location: "Texas",
      propertyType: "apartment",
      Price: 200,
      lookingType: "Renting"
    },
  ];
  const [lookingFor, setLookingFor] = useState("Renting");
  const LookingForFilterHandler = (selectedLookingFor) => {
    setLookingFor(selectedLookingFor);
  };
   const [locationSt, setLocationSt] = useState("Texas");
  const LocationHandler = (selectedLocation) =>{
    setLocationSt(selectedLocation);
  };
  let filteredLookingFor = rentings.filter((rentings) => {
    return rentings.lookingType === lookingFor;
  });
 
  // filteredLookingFor = rentings.filter((rentings) => {
  //   return rentings.location === locationSt;
  // })
  
  return (
    <div className="container apartments_filter">
      <div className="row filterProperties boxed-item">
        <div className="col-3 borderRight filterLabelStyle">
          <LookingForFilter
            selected={lookingFor}
            onChangeFilter={LookingForFilterHandler}
          />
        </div>
        <div className="col-3 borderRight filterLabelStyle">
          <LocationFilter 
          selected={locationSt}
          onChangeFilter={LocationHandler}/>
        </div>
        <div className="col-3 borderRight filterLabelStyle">
          <PropertyType />
        </div>
        <div className="col-3 filterLabelStyle">
          <Price />
        </div>
      </div>
      <div className="container row justify-content-center apartments-listed">
        {filteredLookingFor.map((rentings) => (
          <ApartmentCard
            title={rentings.title}
            beds={rentings.beds}
            baths={rentings.baths}
            tables={rentings.tables}
            image={rentings.image}
          />
        ))}
      </div>
    </div>
  );
}
export default ApartmentsFilters;
