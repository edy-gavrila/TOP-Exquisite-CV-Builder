import React from "react";
import classes from "./EducationAndTraining.module.css";

import HorizontalDivider from "../../../../UI/HorizontalDivider";

function EducationAndTraining({ edAndTrainData }) {
  const educationAndTraining = edAndTrainData.map((edItem, idx) => {
    const formatedStartDate = new Date(
      edItem.studyPeriod.from
    ).toLocaleDateString("en-UK");
    const formatedEndDate = new Date(
      edItem.studyPeriod.until
    ).toLocaleDateString("en-UK");

    return (
      <div key={idx} className={classes["school-group"]}>
        <small className={classes["school-name"]}>{edItem.schoolName}</small>
        <small className={classes["school-title"]}>{` - ${edItem.titleOfStudy}, `}</small>
        <small>{`${formatedStartDate} - ${formatedEndDate}`}</small>
      </div>
    );
  });
  
  return (
    <section>
      <h2>EDUCATION AND TRAINING</h2>
      <HorizontalDivider type="dark" />
      {educationAndTraining}
    </section>
  );
}

export default EducationAndTraining;
