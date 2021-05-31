import React from "react";
import Header from "../Header/Header";
import ListingsOneRow from"../ListingsOneRow/ListingsOneRow";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="home-banner ">
      <Header />
      <div className="home-banner__content boxed-item container">
        <div className="row">
          <div className="col-6">
            <h1 className="white-font__home-banner_heading">Beautiful homes made for you</h1>
            <p className ="white-font-opacity home-banner__dec">
              In oculis quidem se esse admonere interesse enim maxime placeat,
              facere possimus, omnis. Et quidem faciunt, ut labore et accurate
              disserendum et harum quidem exercitus quid.
            </p>
          </div>
        </div>
      </div>
      <ListingsOneRow />
    </div>
  );
};

export default HomeBanner;
