// import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import { Contact } from "../components/Contact";
import { FoodFeatch } from "../components/FoodFeatch";

export const HomePage = () => {
  return (
    <div>
      <Hero isHome={true} />
      <FoodFeatch isHome ={true}/>
      <About />
      <Contact />
    </div>
  );
};
