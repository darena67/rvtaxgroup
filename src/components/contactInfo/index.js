import React from "react"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import "./contact-info.scss"
const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <span className="contactInfo__primary">
        <PhoneIcon />
        555-555-555
      </span>
      <span className="contactInfo__primary">
        <MailIcon />
        daria@redeyecpa.com
      </span>
      <div className="contactInfo__section">
        <h3>Our Address</h3>
        <p>512, North Rest St</p>
        <p>Bouldward Cl</p>
        <p>Sherwhigh, Sandiego</p>
        <p>SD2434</p>
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
  )
}

export default ContactInfo
