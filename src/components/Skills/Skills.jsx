import React from "react";
import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <div className={styles.skills}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
