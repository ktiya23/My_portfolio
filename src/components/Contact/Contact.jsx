import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:kashishagrahari23@email.com">kashishagrahari23@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/kashish-agrahari-0149862a8/">linkedin.com/kashish-agrahari</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/ktiya23">github.com/ktiya23</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/call1.png")} alt="call icon" height="40px" width="40px" style={{borderRadius:"10px"}} />
          <a href="">8707299171</a>
        </li>
      </ul>
    </footer>
  );
};
