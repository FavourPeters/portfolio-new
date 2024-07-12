import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "../ScrollAnimation";
import { fadeInUp } from "../animationVariants";
import Adviceimg from "../images/Advice App.png";
import Hospiyou from "../images/hospiyou.png";
import Game from "../images/game.png";
import "./project.css";

const projects = () => {
  return (
    <ScrollAnimation animationVariants={fadeInUp}>
      <section className="projects headings">
        <p>Projects</p>
        <div className="image-container">
          <div className="image">
            <img src={Hospiyou} alt="" srcset="" />
            <p className="image-headline">Hospiyou Investments</p>
            <p className="paragraph">
              This is not a practice project. This is the hospiyou Investment
              site for their investors. stores investors data and allow payments
              with both Stripe and PayStack
            </p>
            <Link to="https://hospiyou-investors.com/" className="preview">
              Preview site
            </Link>
          </div>
          <div className="image">
            <img src={Game} alt="" srcset="" />
            <p className="image-headline">Rock Paper Scissors</p>
            <p className="paragraph">
              An exciting and popular game. This is one of my practice projects.
              with the use of javaScript OOP.
            </p>
            <Link
              to="https://rocks-papers-scissorrs.netlify.app/"
              className="preview"
            >
              Preview site
            </Link>
          </div>
          <div className="image">
            <img src={Adviceimg} alt="" srcset="" />
            <p className="image-headline">Advice Generator</p>
            <p className="paragraph">
              This Site generates random advice without reloading the page. Made
              use of Fetch APIs
            </p>
            <Link to="https://advice-a-p-p.netlify.app/" className="preview">
              Preview site
            </Link>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default projects;
