import React, { useState } from "react";

import { CVDataContext } from "../../../Contexts/CVDataContext";
import FormButton from "../../../UI/FormButton";
import SectionContainer from "../../../UI/SectionContainer";
import SectionTitle from "../../../UI/SectionTitle";
import EducationAndTrainingData from "./EducationAndTrainingData";
import EducationAndTrainingItemForm from "./EducationAndTrainingItemForm";

const emptyEducationAndDataItem = {
  schoolName: "",
  titleOfStudy: "",
  studyPeriod: { from: "", until: "" },
};

function EducationAndTrainingSection() {
  const [isAddingNewItem, setIsAddingNewItem] = useState(false);

  return (
    <CVDataContext.Consumer>
      {(value) => {
        return (
          <SectionContainer>
            <SectionTitle text="Education &amp; Training" />
            <EducationAndTrainingData
              edAndTrainData={value.educationAndTraining}
              onSaveEditedItem={value.onUpdateEducationAndTrainingData}
              onDeleteItem={value.onDeleteEducationAndTrainingData}
            />
            {isAddingNewItem && (
              <EducationAndTrainingItemForm
                itemNumber={value.educationAndTraining.length + 1}
                onCancelEditing={() => setIsAddingNewItem(false)}
                educationAndTrainingData={emptyEducationAndDataItem}
                onSaveEducationAndTrainingData={
                  value.onUpdateEducationAndTrainingData
                }
              />
            )}
            {!isAddingNewItem && (
              <FormButton
                role="add"
                value="Add Education"
                onClick={() => setIsAddingNewItem(true)}
              />
            )}
          </SectionContainer>
        );
      }}
    </CVDataContext.Consumer>
  );
}

export default EducationAndTrainingSection;
