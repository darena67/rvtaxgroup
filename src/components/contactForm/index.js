import React from "react"

const ContactForm = () => {
  return (
    <form className="contactForm">
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
      <button type="submit" value="Submit" className="btn">
        Send
      </button>
    </form>
  )
}

export default ContactForm
