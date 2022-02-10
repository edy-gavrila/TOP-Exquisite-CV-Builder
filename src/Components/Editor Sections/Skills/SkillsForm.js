import React, { useState } from "react";
import FormButton from "../../../UI/FormButton";
import FormTextList from "../../../UI/FormTextList";

function SkillsForm({ onCancelEditing, skillsData, saveSkillsDataHandler }) {
  const [currentSkillsData, setCurrentSkillsData] = useState(
    skillsData.join("\n")
  );

  const editSkillsHandler = (e) => {
    setCurrentSkillsData(e.target.value);
  };

  const onSaveSkillsData = (e) => {
    e.preventDefault();
    let skills = currentSkillsData.split("\n");
    skills = skills.filter((skill) => skill.trim().length !== 0);
    saveSkillsDataHandler(skills);
    onCancelEditing();
  };
  return (
    <form onSubmit={onSaveSkillsData}>
      <FormTextList
        value={currentSkillsData}
        onChange={editSkillsHandler}
        rows={10}
        placeholder={"List your skills here..."}
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

export default SkillsForm;
