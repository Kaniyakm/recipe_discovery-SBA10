import React from "react";

export default function Contact() {
  return (
    <div className="contactPage">
      <main className="contactContainer">
        <h1>Contact Us</h1>
        <p>Have a question or want to reach out? Send us a message below.</p>

        <form id="contactForm">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Your email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Write your message here"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
}