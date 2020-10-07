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
              descriptions: [
                "Facebook description 1",
                "Facebook description 2",
                "Facebook description 3",
                "Facebook description 4",
              ],
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
              descriptions: [
                "Whatsapp description 1",
                "Whatsapp description 2",
                "Whatsapp description 3",
                "Whatsapp description 4",
              ],
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
              descriptions: [
                "Airbnb description 1",
                "Airbnb description 2",
                "Airbnb description 3",
                "Airbnb description 4",
              ],
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
              descriptions: [
                "Hulu description 1",
                "Hulu description 2",
                "Hulu description 3",
                "Hulu description 4",
              ],
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
