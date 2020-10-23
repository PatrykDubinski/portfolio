import React from "react";
import "./About.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div className="about" id="about">
      <svg
        className="aboutWaves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#48dbdf"
          fillOpacity="1"
          d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <h2>About me</h2>
      <ScrollAnimation animateIn="animate__backInLeft" duration={2}>
        <div className="about__left">
          <div className="about__left-image">
            <img
              src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/119450619_3206112859516762_8802595867538379198_o.jpg?_nc_cat=110&_nc_sid=5b7eaf&_nc_ohc=aqLjKaqQNRIAX-bvp9j&_nc_ht=scontent-frx5-1.xx&oh=406119c8dd4e6b85c2bec4903dbc3380&oe=5F92B3B2"
              alt="Me"
            />
          </div>
          <p>Country: Poland</p>
          <p>Age: 21 years old</p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__backInRight">
        <div className="about__right">
          <p>
            Hello, my name is Patryk and I'm 21 years old IT student in Toruń,
            Poland. I've also finished technical school and received IT
            technicial diploma. I've finished a lot of programming courses from
            FreeCodeCamp or other YouTube coders and some from courses websites
            like:
          </p>
          <ul>
            <li>The Complete JavaScript Course 2020 (Udemy)</li>
            <li>React - The Complete Guide (Udemy)</li>
          </ul>
          <p>
            Now I'm still developing my JavaScript and ReactJS skills through
            making clones of popular websites. You can check my projects in work
            section below, or get my code from my GitHub profile. I know how to
            work as a team, I'm learning fast and also I'm looking for a
            Frontend Developer job, mostly in React.
          </p>
        </div>
      </ScrollAnimation>
      <svg
        className="aboutWavesBottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#48dbdf"
          fillOpacity="1"
          d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default About;
