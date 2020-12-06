import React, { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

  return (
    <form
      name="contact"
      className="contactForm"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formState.name}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formState.email}
        />
      </label>
      <label>
        Phone Number
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={formState.phone}
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows="5"
          onChange={handleChange}
          value={formState.message}
        ></textarea>
      </label>
      <div data-netlify-recaptcha="true"></div>
      <button type="submit" value="Submit" className="btn">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
