import React, { useState } from "react";
import "./contactForm.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: "", email: "", phoneNumber: "", message: "" });

        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact_us_6">
      <div className="responsive-container-block container">
        <form className="form-box" onSubmit={handleSubmit}>
          <div className="container-block form-wrapper">
            <div className="mob-text">
              <p className="text-blk contactus-head">Get in Touch</p>
              <p className="text-blk contactus-subhead">Fill out the form below and we’ll get back to you.</p>
            </div>
            <div className="responsive-container-block">
              <div className="responsive-cell-block">
                <p className="text-blk input-title">FIRST NAME</p>
                <input
                  className="input"
                  name="firstName"
                  placeholder="Enter first name..."
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="responsive-cell-block">
                <p className="text-blk input-title">EMAIL</p>
                <input
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Enter email..."
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="responsive-cell-block">
                <p className="text-blk input-title">PHONE NUMBER</p>
                <input
                  className="input"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter phone number..."
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="responsive-cell-block">
                <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND?</p>
                <textarea
                  className="textinput"
                  name="message"
                  placeholder="Enter query..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
            {submitted && (
              <p className="success-message" style={{ color: "green", marginTop: "10px" }}>
                Form submitted successfully! ✅
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
