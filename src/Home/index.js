import React from "react";
import "../index.css";
import Hero from "../Hero-Section/Hero";
import Projects from "../ProjectT/projects";
import Skills from "../Skills";
import Testimonials from "../Testimonial/Testimonials";
import About from "../About/About";
import Hire from "../Hire/Hire";
import Footer from "../Footer/footer";

const index = () => {
  return (
    <div className="wrapper">
      <Hero />
      <Projects />
      <Skills />
      <Testimonials />
      <About />
      <Hire />
      <Footer />
    </div>
  );
};

export default index;
