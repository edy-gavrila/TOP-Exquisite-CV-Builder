import React, { useState } from "react";
import { CVDataContext } from "../../../Contexts/CVDataContext";
import SectionContainer from "../../../UI/SectionContainer";
import SectionTitle from "../../../UI/SectionTitle";
import ExperienceData from "./ExperienceData";
import ExperienceItemForm from "./ExperienceItemForm";
import FormButton from "../../../UI/FormButton";

const emptyExperienceItem = {
  company: "",
  positionTitle: "",
  mainTasks: [],
  periodInCompany: { from: "", until: "" },
};

function ExperienceSection() {
  const [isAddingNewItem, setIsAddingNewItem] = useState(false);

  return (
    <CVDataContext.Consumer>
      {(value) => {
        return (
          <SectionContainer>
            <SectionTitle text="Experience" />
            <ExperienceData
              workExpData={value.workExperience}
              onSaveEditedItem={value.onUpdateExperience}
              onDeleteItem={value.onDeleteExperience}
            />
            {isAddingNewItem && (
              <ExperienceItemForm
                itemNumber={value.workExperience.length + 1}
                experienceData={emptyExperienceItem}
                onCancelEditing={() => setIsAddingNewItem(false)}
                onSaveExperienceData={value.onUpdateExperience}
              />
            )}
            {!isAddingNewItem && (
              <FormButton
                role="add"
                value="Add Experience"
                onClick={() => setIsAddingNewItem(true)}
              />
            )}
          </SectionContainer>
        );
      }}
    </CVDataContext.Consumer>
  );
}

export default ExperienceSection;
