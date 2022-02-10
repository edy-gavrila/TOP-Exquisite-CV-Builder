import React from "react";
import classes from "./ExperienceItem.module.css";

import SectionTitle from "../../../UI/SectionTitle";
import SectionEditButton from "../../../UI/SectionEditButton";
import SectionDeleteButton from "../../../UI/SectionDeleteButton";
import InfoField from "../../../UI/InfoField";
import InfoTitle from "../../../UI/InfoTitle";
import FormPeriodSelect from "../../../UI/FormPeriodSelect";

function ExperienceItem({
  itemNumber,
  workExpData,
  onSetEditing,
  onDeleteItem,
}) {
  const formatedStartDate = new Date(
    workExpData.periodInCompany.from
  ).toLocaleDateString("en-UK");
  const formatedEndDate = new Date(
    workExpData.periodInCompany.until
  ).toLocaleDateString("en-UK");

  const tasksListItems = workExpData.mainTasks.map((item, idx) => (
    <li key={idx}>{item}</li>
  ));
  return (
    <div className={classes["exp-item-container"]}>
      <SectionTitle text={`Experience #${itemNumber}:`} />
      <SectionEditButton
        isItemButton={true}
        onClick={() => onSetEditing(itemNumber - 1)}
      />
      <SectionDeleteButton isItemButton={true} onClick={onDeleteItem} />
      <InfoField label={"Company: "} text={workExpData.company} />
      <InfoField label={"Position held: "} text={workExpData.positionTitle} />
      <div className={classes["tasks-container"]}>
        <InfoTitle text={"Main Tasks: "} />
        <ul className={classes["task-list"]}>{tasksListItems}</ul>
      </div>
      <InfoField label={"Date Started: "} text={formatedStartDate} />
      <InfoField label={"Date Ended: "} text={formatedEndDate} />
    </div>
  );
}

export default ExperienceItem;
