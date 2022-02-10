import React from "react";
import SectionEditButton from "../../../UI/SectionEditButton";
import classes from "./SkillsData.module.css";

function SkillsData({ onSetEditingMode, skillsData }) {
  const skillList = skillsData.map((skill, idx) => <li key={idx}>{skill}</li>);
  return (
    <React.Fragment>
      <SectionEditButton onClick={onSetEditingMode} />
      <ul className={classes["skills-list"]}>{skillList}</ul>
    </React.Fragment>
  );
}

export default SkillsData;
