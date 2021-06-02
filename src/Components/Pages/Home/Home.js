import React from "react";
import ApartmentsFilters from "../../Apartments/ApartmentsFilters";
import Footer from "../../Footer/Footer";
import HomeBanner from "../../HomeBanner/HomeBanner";
import MainDescription from "../../MainDescription/MainDescription";
import PicDescriptionBlock from "../../MainDescription/PicDescriptionBlock";
import Testimonials from "../../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <PicDescriptionBlock
        fontColor={"black-font"}
        styleButtonColor={"btn-black"}
        isRightToLeftAlign={true}
      />
      <ApartmentsFilters />
      <PicDescriptionBlock
        fontColor={"black-font"}
        styleButtonColor={"btn-black"}
        isRightToLeftAlign={false}
      />
      <div class="blackBlock">
        <MainDescription
          title={"You're in good hands"}
          headingFontColor={"white-font"}
          fontColor={"white-font-opacity"}
          styleBackgroundColor={"blackBlock"}
          styleButtonColor={"btn-orange"}
        />
      </div>
      <Testimonials />
      <div class="blackBlock">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
