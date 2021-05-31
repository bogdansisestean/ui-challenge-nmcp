import React from "react";
import ApartmentCard from "../Apartments/ApartmentCard";
import Location1 from "../../Images/Apartments/House Example 1.png";
import ApartmentsFilters from "./ApartmentsFilters";

function Apartments(props) {
  const rentings = [
    {
      image: Location1,
      title: "Malto House",
      beds: 4,
      baths: 3,
      tables: 2,
      location: "Texas",
      propertyType: "apartment",
      Price: 200,
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
      },
  ];
  return (<div>
      <ApartmentsFilters rentings={rentings}/>
    <div className="boxed-item container row justify-content-center">
        {rentings.map( (rentings) => <ApartmentCard title={rentings.title} beds={rentings.beds} baths={rentings.baths} tables={rentings.tables} image={rentings.image}/>)}
      {/* <ApartmentCard
        title={rentings[0].title}
        beds={rentings[0].beds}
        baths={rentings[0].baths}
        tables={rentings[0].tables}
        image={rentings[0].image}
      ></ApartmentCard>
      <ApartmentCard
        title={rentings[1].title}
        beds={rentings[1].beds}
        baths={rentings[1].baths}
        tables={rentings[1].tables}
        image={rentings[1].image}
      ></ApartmentCard> */}
    </div>
    </div>
  );
}

export default Apartments;
