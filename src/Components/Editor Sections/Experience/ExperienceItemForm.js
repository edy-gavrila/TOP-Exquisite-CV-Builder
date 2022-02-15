import React, { useState } from "react";
import FormButton from "../../../UI/FormButton";
import SectionTitle from "../../../UI/SectionTitle";
import FormInput from "../../../UI/FormInput";
import FormTextList from "../../../UI/FormTextList";
import FormPeriodSelect from "../../../UI/FormPeriodSelect";
import classes from "./ExperienceItemForm.module.css";

function ExperienceItemForm({
  itemNumber,
  experienceData,
  onSaveExperienceData,
  onCancelEditing,
}) {
  const [experienceItemData, setExperienceItemData] = useState({
    ...experienceData,
  });
  const inputChangedHandler = (id, value) => {
    setExperienceItemData((prevState) => {
      const updatedState = { ...prevState };
      switch (id) {
        case "mainTasks":
          updatedState[id] = value.split("\n");
          break;
        case "startInCompanyDate":
          updatedState.periodInCompany.from = value;
          break;
        case "endInCompanyDate":
          updatedState.periodInCompany.until = value;
          break;
        default:
          updatedState[id] = value;
      }
      return updatedState;
    });
  };

  const saveExperienceHandler = (e) => {
    e.preventDefault();
    console.log(experienceItemData);
    onSaveExperienceData({ newData: experienceItemData, itemNumber });
    onCancelEditing();
  };
  return (
    <form
      onSubmit={saveExperienceHandler}
      className={classes["experience-form"]}
    >
      <SectionTitle text={`Experience #${itemNumber}:`} />
      <FormInput
        type="text"
        id="company"
        placeholder="Company Name..."
        value={experienceItemData.company}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
        required
      />
      <FormInput
        type="text"
        id="positionTitle"
        placeholder="Position within Company..."
        value={experienceItemData.positionTitle}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
        required
      />
      <FormTextList
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
        value={experienceItemData.mainTasks.join("\n")}
        id={"mainTasks"}
        placeholder={"List your main tasks within company here..."}
        rows="10"
        required
      />
      <FormPeriodSelect
        values={{
          from: experienceItemData.periodInCompany
            ? experienceItemData.periodInCompany.from
            : "",
          until: experienceItemData.periodInCompany
            ? experienceItemData.periodInCompany.until
            : "",
        }}
        ids={{ from: "startInCompanyDate", until: "endInCompanyDate" }}
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

export default ExperienceItemForm;
