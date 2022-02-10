import React from "react";
import EducationAndTrainingSection from "../Editor Sections/EducationAndTraining/EducationAndTrainingSection";
import ExperienceSection from "../Editor Sections/Experience/ExperienceSection";
import PersonalInfoSection from "../Editor Sections/PersonalInfoSection/PersonalInfoSection";

import ProfessionalSummarySection from "../Editor Sections/ProfessionalSummarySection/ProfessionalSummarySection";
import SkillsSection from "../Editor Sections/Skills/SkillsSection";

function CVEditor() {
  return (
    <React.Fragment>
      <ProfessionalSummarySection />
      <PersonalInfoSection />
      <SkillsSection />
      <EducationAndTrainingSection />
      <ExperienceSection />
    </React.Fragment>
  );
}

export default CVEditor;
