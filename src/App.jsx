import React from "react";
import "./App.css";
import {
  Contact,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  New,
  Partners,
  Properties,
  InteriorSlide,
  Values,
} from "./components";

const App = () => {
  return (
    <div>
      <div className="white-gradient" />
      <Navbar />
      <Hero />
      <Properties />
      <New />
      <InteriorSlide />
      <Values />
      <Contact />
      <Partners />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
