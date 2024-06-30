import React from "react";
import Picture from "../images/testimonials.png";
import "./about.css";

const About = () => {
  return (
    <div>
      <section className="about">
        <p>About</p>
        <div className="about-cont">
          <div>
            <img src={Picture} alt="" width="300px" />
            <div className="about-dp_text">
              <h4>Favour Peters</h4>
              <p style={{ color: "white", fontStyle: "italic" }}>
                Web Developer
              </p>
            </div>
          </div>

          <p className="about-text">
            I am a Web Developer with over three years of experience
            specializing in the MERN stack, proficient in HTML, CSS, JavaScript,
            UI/UX design, Git, GitHub, and graphic design. I have taught web
            development and am a certified ALX Software Engineer. Currently in
            my final year of a B.Sc in Computer Science at the University of
            Port Harcourt, I am a creative team player dedicated to excellence
            and innovation, aiming to deliver impactful digital solutions.
          </p>
        </div>
        <ul>
          <li style={{ marginRight: "8rem" }}>Phone: +2347013491807</li>
          <li>City: Port Harcourt, NG</li>
          <li style={{ marginRight: "8rem" }}>
            Availability: On-Site and Remote
          </li>
          <li>Freelance: Available</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
