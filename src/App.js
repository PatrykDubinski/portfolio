import React, { useEffect, useState } from "react";
import "./App.css";

import About from "./components/About/About";
import BackToTop from "./components/BackToTop/BackToTop";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Socials from "./components/Socials/Socials";
import Tech from "./components/Tech/Tech";

function App() {
  const [scroll, setScroll] = useState(null);
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });

  useEffect(() => {
    if (scroll > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [scroll]);

  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Tech />
      <Contact />
      <Socials />
      <BackToTop visible={visible} />
    </div>
  );
}

export default App;
