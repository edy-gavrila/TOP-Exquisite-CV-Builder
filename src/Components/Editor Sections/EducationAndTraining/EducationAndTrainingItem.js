import React from "react";
import SectionTitle from "../../../UI/SectionTitle";
import InfoField from "../../../UI/InfoField";
import classes from "./EducationAndTrainingItem.module.css";
import SectionEditButton from "../../../UI/SectionEditButton";
import SectionDeleteButton from "../../../UI/SectionDeleteButton";

function EducationAndTrainingItem({
  edAndTrainData,
  itemNumber,
  onSetEditing,
  onDeleteItem,
}) {
  const formatedStartDate = new Date(
    edAndTrainData.studyPeriod.from
  ).toLocaleDateString("en-UK");
  const formatedEndDate = new Date(
    edAndTrainData.studyPeriod.until
  ).toLocaleDateString("en-UK");
  return (
    <div className={classes["ed-item-container"]}>
      <SectionTitle text={`Education #${itemNumber}:`} />
      <SectionEditButton
        isItemButton={true}
        onClick={() => onSetEditing(itemNumber - 1)}
      />
      <SectionDeleteButton isItemButton={true} onClick={onDeleteItem} />
      <InfoField label={"School Name: "} text={edAndTrainData.schoolName} />
      <InfoField
        label={"Title of Study: "}
        text={edAndTrainData.titleOfStudy}
      />
      <InfoField label={"Date Started: "} text={formatedStartDate} />
      <InfoField label={"Date Finished: "} text={formatedEndDate} />
    </div>
  );
}

export default EducationAndTrainingItem;
