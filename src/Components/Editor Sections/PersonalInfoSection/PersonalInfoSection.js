import React, { useState } from "react";
import { CVDataContext } from "../../../Contexts/CVDataContext";
import SectionContainer from "../../../UI/SectionContainer";
import SectionTitle from "../../../UI/SectionTitle";
import PersonalInfoData from "./PersonalInfoData";
import PersonalInfoForm from "./PersonalInfoForm";

function PersonalInfoSection() {
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
  return (
    <CVDataContext.Consumer>
      {(value) => {
        return (
          <SectionContainer>
            <SectionTitle text="Personal Info" />
            {!isEditingPersonalInfo && (
              <PersonalInfoData
                persInfoData={value.personalInfo}
                onSetEditingMode={() => setIsEditingPersonalInfo(true)}
              />
            )}
            {isEditingPersonalInfo && (
              <PersonalInfoForm
                onCancelEditing={() => setIsEditingPersonalInfo(false)}
                persInfoData={value.personalInfo}
                onSavePersonalInfoData={value.onSavePersonalInfoData}
              />
            )}
          </SectionContainer>
        );
      }}
    </CVDataContext.Consumer>
  );
}

export default PersonalInfoSection;
