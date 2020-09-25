import React, { useState } from "react";
import emailjs from "emailjs-com";

import classes from "./ContactMe.module.css";

function ContactMe() {
  const [showThankYou, setShowThankYou] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_YOUR_USER_ID
      )
      .then(
        (result) => {
          setShowThankYou(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const showThankYouMessageAccordingly = () => {
    if (showThankYou) {
      return (
        <div
          className={classes.backdrop}
          onClick={() => setShowThankYou(false)}
        >
          <div className={classes.thanksGiving}>
            <h3>
              Thank you for your interest. I will reach out to you as soon as
              possible.
            </h3>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={classes.ContactMe}>
      {showThankYouMessageAccordingly()}
      <div className={classes.header}>
        <h2>Contact Me</h2>
      </div>

      <div className={classes.container}>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className={classes.formControl}>
            <label>Name</label>
            <input type="text" name="name" required />
          </div>

          <div className={classes.formControl}>
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className={classes.formControl}>
            <label>Message</label>
            <textarea name="message" rows="5" required />
          </div>

          <div className={classes.sendButton}>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
