import React from "react";
import classes from "./Skills.module.css";

import HorizontalDivider from "../../../../UI/HorizontalDivider";

function Skills({ skillsData }) {
  const skills = skillsData.map((skill, idx) => {
    return <li key={idx}>{skill}</li>;
  });
  return (
    <section className={classes["skills-section"]}>
      <h2>SKILLS</h2>
      <HorizontalDivider type={"light"} />
      <ul>{skills}</ul>
    </section>
  );
}

export default Skills;
