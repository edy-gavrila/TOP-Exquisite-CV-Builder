import React from "react";
import PersonalInfoSection from "../Editor Sections/PersonalInfoSection/PersonalInfoSection";

import ProfessionalSummarySection from "../Editor Sections/ProfessionalSummarySection/ProfessionalSummarySection";

function CVEditor() {
  return (
    <React.Fragment>
      <ProfessionalSummarySection />
      <PersonalInfoSection />
    </React.Fragment>
  );
}

export default CVEditor;
