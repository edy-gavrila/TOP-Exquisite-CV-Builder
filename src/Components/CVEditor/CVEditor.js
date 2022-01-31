import React from "react";
import PersonalInfoSection from "../Editor Sections/Personal InfoSection/PersonalInfoSection";

import ProfessionalSummarySection from "../Editor Sections/Professional SummarySection/ProfessionalSummarySection";

function CVEditor() {
  return (
    <React.Fragment>
      <ProfessionalSummarySection />
      <PersonalInfoSection />
    </React.Fragment>
  );
}

export default CVEditor;
