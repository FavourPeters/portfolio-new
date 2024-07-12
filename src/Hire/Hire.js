import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import ScrollAnimation from "../ScrollAnimation";
import { fadeInUp } from "../animationVariants";
import "./hire.css";

const Hire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_s617es9", // Replace with your EmailJS service ID
        "template_qbspz5a", // Replace with your EmailJS template ID
        formData,
        "ETL-khoewOrly233G" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!", {
          position: "top-right",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setLoading(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast.error("Failed to send the message. Please try again.", {
          position: "top-right",
        });
        setLoading(false);
      });
  };

  return (
    <ScrollAnimation animationVariants={fadeInUp}>
      <section className="hire-me">
        <p className="hire">Hire Me</p>
        <p className="hire-text">
          Feel free to contact me with the above informations or send us a
          message by filling the fields below:
        </p>

        <form className="info" onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <br />
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" disabled={loading} className="hire_link">
            {loading ? (
              <ThreeDots type="ThreeDots" color="#fff" height={10} width={30} />
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </section>
      <ToastContainer />
    </ScrollAnimation>
  );
};

export default Hire;
