import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLinkedin,
  faGithub,
  faInstagram,
  faMedium,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="text-center my-5 contact-container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me on any of these platforms:</p>
      <div>
        {[
          // {
          //   href: "mailto:kdiesenb@gmail.com",
          //   icon: faEnvelope,
          // },
          {
            href: "https://www.linkedin.com/in/kevindiesenberg",
            icon: faLinkedin,
          },
          {
            href: "https://github.com/kevdies",
            icon: faGithub,
          },
          {
            href: "https://instagram.com/kevdies?igshid=YmMyMTA2M2Y=",
            icon: faInstagram,
          },
          {
            href: "https://kevindiesenberg.medium.com/",
            icon: faMedium,
          },
          {
            href: "https://www.facebook.com/kevin.diesenberg?mibextid=LQQJ4d",
            icon: faFacebook,
          },
        ].map(({ href, icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FontAwesomeIcon
              icon={icon}
              size="3x"
              className="mx-3 contact-icon"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
