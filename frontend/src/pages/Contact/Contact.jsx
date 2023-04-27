import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Contact.scss";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <form>
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
          <input id="message" type="message" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
}
