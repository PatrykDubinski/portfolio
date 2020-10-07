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
                "It is app made as much as possible to look exactly like known to everyone Facebook.",
                "You can check your messages in message menu in top panel. Except that You can pick from your recent chats and start chatting again. Every message is live updated by Firebase at this time, but I'm going to improve it and build it with ExpressJS and MongoDB",
                "You can add a post and put image url in it. Also you can like a post or even comment it and like a comment. In top panel of this app You can use dropdown menu to logout or go to settings, even dark-mode is included there.",
                "Most important is that You can log in to app, there are no anonymous users. Logging is provided by Google Auth through Firebase. For this moment it's the same app for everyone who logs in. I'm planning to include logging and registering through email and filtering posts, and messages per user so You can see only chats You are in.",
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
                "It is app made as much as possible to look exactly like known to everyone Whatsapp.",
                "You can check your chat rooms from menu on the left and create new rooms there. Every message is live updated by Firebase at this time, but I'm going to improve it and build it with ExpressJS and MongoDB",
                "You can chat with anyone live.",
                "Most important is that You can log in to app, there are no anonymous users. Logging is provided by Google Auth through Firebase. For this moment it's the same app for everyone who logs in and except chatting there is no much functionality. I'm planning to include logging and registering through email and filtering chat rooms, and messages per user so You can see only chats You are in. Also I will add more functionality from original Whatsapp",
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
                "It is app made as much as possible to look exactly like known to everyone Airbnb.",
                "You can check available rooms and it's prices for the date You have chosen.",
                "Sadly I didn't provided much functionality here, but build is still in progress and I will add more filtering options and becoming a host option.",
                "I'm planning to include logging and registering through email.",
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
                "It is app made as much as possible to look exactly like known to everyone Hulu.",
                "You can check latest movies. Data about movies is always on time and it's provided from The Movie Database.",
                "You can filter movies through menu on top and find movie You want to watch.",
                "I'm planning to add option to check more info about movie or maybe buy a movie. Also I'm planning to include logging and registering through email.",
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
