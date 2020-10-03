import React from "react";
import "./Slider.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import facebookImg from "../../../assets/images/facebook.png";
import airbnbImg from "../../../assets/images/airbnb.png";
import whatsappImg from "../../../assets/images/whatsapp.png";
import huluImg from "../../../assets/images/hulu.png";

const Slider = ({ images }) => {
  return (
    <div className="slider">
      <Carousel infiniteLoop>
        <div>
          <img src={facebookImg} alt="Facebook" />
          <p className="legend">Facebook</p>
        </div>
        <div>
          <img src={whatsappImg} alt="Whatsapp" />
          <p className="legend">Whatsapp</p>
        </div>
        <div>
          <img src={airbnbImg} alt="airbnb" />
          <p className="legend">Airbnb</p>
        </div>
        <div>
          <img src={huluImg} alt="hulu" />
          <p className="legend">Hulu</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
