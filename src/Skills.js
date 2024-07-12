import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";
import { fadeInUp } from "./animationVariants";
import Mongo from "./images/mongo.png";
import Node from "./images/node.png";
import JS from "./images/JavaScript-logo.png";
import react from "./images/react-logo.png";

const Skills = () => {
  return (
    <ScrollAnimation animationVariants={fadeInUp}>
      <section className="skills">
        <p>Skills</p>
        <section className="texts">
          <p>Software Engineer/Web Developer</p>
          <p>ALX Certified Software Engineer</p>
          <Link
            to="https://intranet.alxswe.com/certificates/6BGZhEfRxe"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Credentials
          </Link>
        </section>
        <div className="skills-images">
          <img src={JS} alt="" width="150px" />
          <img src={react} alt="" width="150px" />
          <img src={Mongo} alt="" width="150px" />
          <img src={Node} alt="" width="150px" />
        </div>
        <div className="other-skills">
          <p className="others">Others</p>
          <p className="theSkills">
            HTML CSS UI/UX TailwindCss Git Github Graphics Design
          </p>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Skills;
