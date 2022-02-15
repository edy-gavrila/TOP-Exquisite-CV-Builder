import React from "react";
import classes from "./Format1.module.css";

import ContactDetails from "../PreviewSections/ContactDetailsSection/ContactDetails";
import EducationAndTraining from "../PreviewSections/EducationAndTrainingSection/EducationAndTraining";
import ProfessionalSummary from "../PreviewSections/ProfessionalSummarySection/ProfessionalSummary";
import Title from "../PreviewSections/TitleSection/Title";
import WorkExperience from "../PreviewSections/WorkExperienceSection/WorkExperience";
import Links from "../PreviewSections/LinksSection/Links";
import Skills from "../PreviewSections/SkillsSection/Skills";

function Format1({ cvData }) {
  const { firstName, familyName, email, phoneNumber } = cvData.personalInfo;
  return (
    <div className={classes.page}>
      <div className={classes["left-pane"]}>
        <Title firstName={firstName} familyName={familyName} />
        <ProfessionalSummary
          professionalSummaryData={cvData.professionalSummary}
        />
        <WorkExperience workExperienceData={cvData.workExperience} />
        <EducationAndTraining edAndTrainData={cvData.educationAndTraining} />
      </div>
      <div className={classes["right-pane"]}>
        <ContactDetails contactDetailsData={{ email, phoneNumber }} />
        <Links linksData={cvData.personalInfo.webLinks} />
        <Skills skillsData={cvData.skills} />
      </div>
    </div>
  );
}

export default Format1;
