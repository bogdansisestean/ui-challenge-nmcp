import React from "react";
import MainDescription from "./MainDescription";
import "./PicDescriptionBlock.scss";
import pic1 from "../../Images/Content Image large (1).png";

type Props = {
  isRightToLeftAlign: boolean;
  fontColor: string;
  styleButtonColor: string;
  styleBackgroundColor?: string;
};
const PicDescriptionBlock = ({
  isRightToLeftAlign,
  fontColor,
  styleButtonColor,
  styleBackgroundColor,
}: Props) => {
  const isRightToLeft: Boolean = isRightToLeftAlign;
  let PicDescriptionBlockContent;
  if (isRightToLeft === true) {
    PicDescriptionBlockContent = (
      <div className="container pic-desc__block">
        <div className="row align-items-center">
          <div className="col-6">
            <img src={pic1} className="round-img-desc" />
          </div>
          <div className="col-6">
            <MainDescription
              fontColor={fontColor}
              styleButtonColor={styleButtonColor}
              styleBackgroundColor={styleBackgroundColor}
              title={"You are in good hands"}
            />
          </div>
        </div>
      </div>
    );
  } else {
    PicDescriptionBlockContent = (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <MainDescription
              fontColor={fontColor}
              styleButtonColor={styleButtonColor}
              styleBackgroundColor={styleBackgroundColor}
              title={"You are in good hands"}
            />
          </div>
          <div className="col-6">
            <img src={pic1} className="round-img-desc" />
          </div>
        </div>
      </div>
    );
  }
  return PicDescriptionBlockContent;
};

export default PicDescriptionBlock;
