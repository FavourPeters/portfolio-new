import React from "react";
import "./hire.css";

const Hire = () => {
  return (
    <div>
      <section className="hire-me">
        <p className="hire">Hire Me</p>
        <p className="hire-text">
          Feel free to contact me with the above informations or send us a
          message by filling the fields below:
        </p>

        <div className="info">
          <div>
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <br />
              <input type="text" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <br />
              <input type="tel" name="" id="" />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea name="message" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hire;
