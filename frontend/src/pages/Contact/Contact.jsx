import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <form className="contact-form">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          type="message"
          placeholder="Saisissez votre message ici"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
