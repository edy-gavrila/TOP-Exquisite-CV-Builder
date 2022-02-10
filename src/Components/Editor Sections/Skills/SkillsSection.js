import React, { useState } from "react";
import { CVDataContext } from "../../../Contexts/CVDataContext";
import SectionContainer from "../../../UI/SectionContainer";
import SectionTitle from "../../../UI/SectionTitle";
import SkillsData from "./SkillsData";
import SkillsForm from "./SkillsForm";

function SkillsSection() {
  const [isEdtitingSkillsSection, setIsEditingSkillsSection] = useState(false);
  return (
    <CVDataContext.Consumer>
      {(value) => {
        return (
          <SectionContainer>
            <SectionTitle text="Skills" />
            {!isEdtitingSkillsSection && (
              <SkillsData
                skillsData={value.skills}
                onSetEditingMode={() => setIsEditingSkillsSection(true)}
              />
            )}
            {isEdtitingSkillsSection && (
              <SkillsForm
                skillsData={value.skills}
                saveSkillsDataHandler={value.onSaveSkillsData}
                onCancelEditing={() => setIsEditingSkillsSection(false)}
              />
            )}
          </SectionContainer>
        );
      }}
    </CVDataContext.Consumer>
  );
}

export default SkillsSection;
