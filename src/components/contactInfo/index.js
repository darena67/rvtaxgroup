import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import "./contact-info.scss";
const ContactInfo = ({ phone, address, email }) => {
  return (
    <div className="contactInfo">
      <span className="contactInfo__primary">
        <PhoneIcon />
        {phone}
      </span>
      <span className="contactInfo__primary">
        <MailIcon />
        <a href={`mailto:${email}`}>{email}</a>
      </span>
      <div className="contactInfo__section">
        <h3>Our Address</h3>
        <div
          className="contact__address"
          dangerouslySetInnerHTML={{ __html: address }}
        ></div>
      </div>
      <div className="contactInfo__section">
        <h3>Hours of operation</h3>
        <table>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>9.00 AM</td>
              <td>5.00 PM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>9.00 AM</td>
              <td>5.00 PM</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>9.00 AM</td>
              <td>5.00 PM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>9.00 AM</td>
              <td>5.00 PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>9.00 AM</td>
              <td>5.00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>Closed</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>Closed</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactInfo;
