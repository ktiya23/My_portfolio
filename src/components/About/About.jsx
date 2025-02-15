import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Web Developer</h3>
              <p>
                Motivated Full Stack Web Developer with a solid foundation in
                the MERN stack and a strong grasp of Data Structures and
                Algorithms (DSA) in Java and Python. I am a quick learner with
                hands-on project experience, and a proven ability to adapt to
                new technologies. Strong in problem-solving, collaboration, and
                communication, ready to contribute to building efficient, scalable
                solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
