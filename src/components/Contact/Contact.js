import React, { useRef, useState } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { BiMessageAltCheck } from "react-icons/bi";
import emailjs from "emailjs-com";
function Contact() {
  const [confirmMail, setConfirmail] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_nppe2qm",
      "template_0ays3nq",
      form.current,
      "LScQDDSMgZq9dVbA7"
    );
    e.target.reset();
    setConfirmail(true);
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>emilianobareamonetti8@gmail.com</h5>
            <a href="mailto:emilianobareamonetti8@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Emiliano Barea monetti</h5>
            <a
              href="https://www.linkedin.com/in/emiliano-barea-monetti-781a00231/"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>instagram</h4>
            <h5>bareaemiliano</h5>
            <a href="https://www.instagram.com/bareaemiliano/" target="_blank">
              Know me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onClick={() => setConfirmail(false)}
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <div className="confirm__container">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {confirmMail && <BiMessageAltCheck className="icon__message" />}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
