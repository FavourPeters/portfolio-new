import React from "react";
import ScrollAnimation from "../ScrollAnimation";
import { fadeInUp } from "../animationVariants";
import Picture from "../images/Ellipse 1.png";
import "./testimonial.css";

const Testimonials = () => {
  return (
    <ScrollAnimation animationVariants={fadeInUp}>
      <section className="testimonials">
        <p>Testimonials</p>
        <img src={Picture} alt="" width="200px" />

        <div className="text">
          <h4>Onward Woruka</h4>
          <p>Web developer</p>
        </div>

        <div className="testimony">
          <p>
            Started my tech journey with Favour's class and he has been helpful
            up till now.
          </p>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Testimonials;
