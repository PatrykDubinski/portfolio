import React from "react";
import "./Slider.css";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import fb1 from "../../../assets/images/fb1.png";
import fb4 from "../../../assets/images/fb2.png";
import fb3 from "../../../assets/images/fb3.png";
import fb2 from "../../../assets/images/fb4.png";
import airbnb1 from "../../../assets/images/airbnb1.png";
import airbnb2 from "../../../assets/images/airbnb2.png";
import airbnb3 from "../../../assets/images/airbnb3.png";
import airbnb4 from "../../../assets/images/airbnb4.png";
import whatsapp1 from "../../../assets/images/whatsapp1.png";
import whatsapp2 from "../../../assets/images/whatsapp2.png";
import whatsapp3 from "../../../assets/images/whatsapp3.png";
import whatsapp4 from "../../../assets/images/whatsapp4.png";
import hulu1 from "../../../assets/images/hulu1.png";
import hulu2 from "../../../assets/images/hulu2.png";
import hulu3 from "../../../assets/images/hulu3.png";
import hulu4 from "../../../assets/images/hulu4.png";
import amz1 from "../../../assets/images/amz1.png";
import amz2 from "../../../assets/images/amz2.png";
import amz3 from "../../../assets/images/amz3.png";
import amz4 from "../../../assets/images/amz4.png";

const Slider = () => {
  const fbImages = [fb1, fb2, fb3, fb4];
  const huluImages = [hulu1, hulu2, hulu3, hulu4];
  const whatsappImages = [whatsapp1, whatsapp2, whatsapp3, whatsapp4];
  const airbnbImages = [airbnb1, airbnb2, airbnb3, airbnb4];
  const amazonImages = [amz1, amz2, amz3, amz4];

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
            <img src={fb1} alt="Facebook" />
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
            <img src={whatsapp1} alt="Whatsapp" />
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
            <img src={airbnb1} alt="airbnb" />
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
            <img src={hulu1} alt="hulu" />
            <p className="legend">Hulu</p>
          </div>
        </Link>
        <Link
          to={{
            pathname: "/projects/amazon",
            state: {
              images: amazonImages,
              title: "Amazon Clone App",
              descriptions: [
                "It is app made as much as possible to look exactly like known to everyone Amazon.",
                "You can add items to basket which updates live using React Context API.",
                "You can remove items from basket or proceed to checkout. Also You have total amount of Your items in basket visible. Payment is provided via Stripe. You can see Your orders on Orders page.",
                "Registering and login through email is included via firebase.",
              ],
            },
          }}
        >
          <div>
            <img src={amz1} alt="amazon" />
            <p className="legend">Amazon</p>
          </div>
        </Link>
      </Carousel>
    </div>
  );
};

export default Slider;
