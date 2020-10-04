import React from "react";
import "./Slider.css";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import facebookImg from "../../../assets/images/facebook.png";
import airbnbImg from "../../../assets/images/airbnb.png";
import whatsappImg from "../../../assets/images/whatsapp.png";
import huluImg from "../../../assets/images/hulu.png";

const Slider = () => {
  const fbImages = [facebookImg, airbnbImg, whatsappImg, huluImg];
  const huluImages = [huluImg, airbnbImg, whatsappImg, facebookImg];
  const whatsappImages = [whatsappImg, facebookImg, airbnbImg, huluImg];
  const airbnbImages = [airbnbImg, facebookImg, whatsappImg, huluImg];
  return (
    <div className="slider">
      <Carousel infiniteLoop>
        <Link
          to={{
            pathname: "/projects/facebook",
            state: {
              images: fbImages,
              title: "Facebook App Clone",
              photo_1_desc: "Test description 1",
              photo_2_desc: "Test description 2",
              photo_3_desc: "Test description 3",
              photo_4_desc: "Test description 4",
            },
          }}
        >
          <div>
            <img src={facebookImg} alt="Facebook" />
            <p className="legend">Facebook</p>
          </div>
        </Link>
        <Link
          to={{
            pathname: "/projects/whatsapp",
            state: {
              images: whatsappImages,
              title: "Whatsapp Clone",
              photo_1_desc: "Test description 1",
              photo_2_desc: "Test description 2",
              photo_3_desc: "Test description 3",
              photo_4_desc: "Test description 4",
            },
          }}
        >
          <div>
            <img src={whatsappImg} alt="Whatsapp" />
            <p className="legend">Whatsapp</p>
          </div>
        </Link>
        <Link
          to={{
            pathname: "/projects/airbnb",
            state: {
              images: airbnbImages,
              title: "Airbnb App Clone",
              photo_1_desc: "Test description 1",
              photo_2_desc: "Test description 2",
              photo_3_desc: "Test description 3",
              photo_4_desc: "Test description 4",
            },
          }}
        >
          <div>
            <img src={airbnbImg} alt="airbnb" />
            <p className="legend">Airbnb</p>
          </div>
        </Link>
        <Link
          to={{
            pathname: "/projects/hulu",
            state: {
              images: huluImages,
              title: "Hulu App Clone",
              photo_1_desc: "Test description 1",
              photo_2_desc: "Test description 2",
              photo_3_desc: "Test description 3",
              photo_4_desc: "Test description 4",
            },
          }}
        >
          <div>
            <img src={huluImg} alt="hulu" />
            <p className="legend">Hulu</p>
          </div>
        </Link>
      </Carousel>
    </div>
  );
};

export default Slider;
