import React, { useState } from "react";
import SectionContainer from "../../../UI/SectionContainer";
import { CVDataContext } from "../../../Contexts/CVDataContext";
import ProfessionalSummaryData from "./ProfessionalSummaryData";
import ProfessionalSummaryForm from "./ProfessionalSummaryForm";
import SectionTitle from "../../../UI/SectionTitle";

function ProfessionalSummarySection() {
  const [isEditingProfessionalSummary, setIsEditingProfessionalSummary] =
    useState(false);
  return (
    <CVDataContext.Consumer>
      {(value) => {
        return (
          <SectionContainer>
            <SectionTitle text="Professional Summary"/>
            {!isEditingProfessionalSummary && (
              <ProfessionalSummaryData
                profSumData={value.professionalSummary}
                onSetEditingMode={() => setIsEditingProfessionalSummary(true)}
              />
            )}
            {isEditingProfessionalSummary && (
              <ProfessionalSummaryForm
                profSumData={value.professionalSummary}
                onSaveProfessionalSummaryData={
                  value.onSaveProfessionalSummaryData
                }
                onCancelEditing={() => setIsEditingProfessionalSummary(false)}
              />
            )}
          </SectionContainer>
        );
      }}
    </CVDataContext.Consumer>
  );
}
export default ProfessionalSummarySection;
