import React from "react";
import Picture from "./images/testimonials.png";

const Testimonials = () => {
  return (
    <div>
      <section className="testimonials">
        <p>Testimonials</p>
        <img src={Picture} alt="" width="300px" />

        <div className="text">
          <h4>Favour Peters</h4>
          <p>Frontend Tutor</p>
        </div>

        <div className="testimony">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            dolorum velit quos!"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
