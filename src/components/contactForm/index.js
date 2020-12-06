import React from "react";

const ContactForm = () => {
  return (
    <form
      name="contact"
      className="contactForm"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
    >
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Phone Number
        <input type="text" name="phone" />
      </label>
      <label>
        Message
        <textarea name="message" rows="5"></textarea>
      </label>
      <div data-netlify-recaptcha="true"></div>
      <button type="submit" value="Submit" className="btn">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
