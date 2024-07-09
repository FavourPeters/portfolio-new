import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="logo">
        Favour <span>Peters</span>
      </Link>
      <br />
      <div className="SMlinks">
        <Link to="https://github.com/FavourPeters">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#ffffff" }}
            className="icon"
          />
        </Link>
        <Link to="https://x.com/favourlpeters">
          <FontAwesomeIcon
            icon={faXTwitter}
            style={{ color: "#ffffff" }}
            className="icon"
          />
        </Link>

        <Link to="https://www.linkedin.com/in/favour-l-peters-73b1b922b/">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#ffffff" }}
            className="icon"
          />
        </Link>
        <Link to="https://wa.link/rwz2je">
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ color: "#ffffff" }}
            className="icon"
          />
        </Link>
      </div>
      <div className="cp-right">
        <FontAwesomeIcon icon={faCopyright} style={{ color: "#ffffff" }} />
        <p>Copyright FavourPeters. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default footer;
