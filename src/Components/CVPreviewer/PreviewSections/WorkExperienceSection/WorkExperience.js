import React from "react";
import classes from "./WorkExperience.module.css";
import HorizontalDivider from "../../../../UI/HorizontalDivider";

function WorkExperience({ workExperienceData }) {
  const workExperience = workExperienceData.map((work, idx) => {
    const formatedStartDate = new Date(
      work.periodInCompany.from
    ).toLocaleDateString("en-UK");
    const formatedEndDate = new Date(
      work.periodInCompany.until
    ).toLocaleDateString("en-UK");
    return (
      <div key={idx} className={classes["info-item-container"]}>
        <span className={classes["position-title"]}>{work.positionTitle}</span>
        <span>{`, ${formatedStartDate} - ${formatedEndDate}`}</span>
        <div>
          <span>at</span>
          <span className={classes["company-name"]}> {work.company}</span>
        </div>
        <ul className={classes["tasks-list"]}>
          {work.mainTasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <section>
      <h2>WORK EXPERIENCE</h2>
      <HorizontalDivider type="dark" />
      {workExperience}
    </section>
  );
}

export default WorkExperience;
