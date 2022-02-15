import React, { useState } from "react";
import FormButton from "../../../UI/FormButton";
import SectionTitle from "../../../UI/SectionTitle";
import FormInput from "../../../UI/FormInput";
import FormPeriodSelect from "../../../UI/FormPeriodSelect";
import classes from "./EducationAndTrainingItemForm.module.css";

function EducationAndTrainingItemForm({
  itemNumber,
  educationAndTrainingData,
  onCancelEditing,
  onSaveEducationAndTrainingData,
}) {
  const [educationData, setEducationData] = useState({
    ...educationAndTrainingData,
  });

  const inputChangedHandler = (id, value) => {
    setEducationData((prevState) => {
      const updatedState = { ...prevState };
      switch (id) {
        case "studyStartDate":
          updatedState.studyPeriod.from = value;
          break;
        case "studyEndDate":
          updatedState.studyPeriod.until = value;
          break;
        default:
          updatedState[id] = value;
      }

      return updatedState;
    });
  };

  const saveEducationAndTrainingDataHandler = (e) => {
    e.preventDefault();
    onSaveEducationAndTrainingData({ newData: educationData, itemNumber });
    onCancelEditing();
  };

  return (
    <form
      onSubmit={saveEducationAndTrainingDataHandler}
      className={classes["education-form"]}
    >
      <SectionTitle text={`Education #${itemNumber}:`} />
      <FormInput
        type="text"
        id="schoolName"
        placeholder="School Name..."
        value={educationData.schoolName}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
        required
      />
      <FormInput
        type="text"
        id="titleOfStudy"
        placeholder="Title of Study..."
        value={educationData.titleOfStudy}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
        required
      />
      <FormPeriodSelect
        values={{
          from: educationData.studyPeriod.from,
          until: educationData.studyPeriod.until,
        }}
        ids={{ from: "studyStartDate", until: "studyEndDate" }}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
        required
      />
      <FormButton type="submit" role="submit" value="SAVE" />
      <FormButton
        type="button"
        role="cancel"
        value="CANCEL"
        onClick={onCancelEditing}
      />
    </form>
  );
}

export default EducationAndTrainingItemForm;
