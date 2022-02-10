import React, { useState } from "react";
import FormButton from "../../../UI/FormButton";
import FormTextList from "../../../UI/FormTextList";

function ProfessionalSummaryForm({
  profSumData,
  onCancelEditing,
  onSaveProfessionalSummaryData,
}) {
  const [formData, setFormData] = useState(profSumData.join("\n"));

  const saveProfessionalSummaryDataHandler = (e) => {
    e.preventDefault();
    let paragraphs = formData.split("\n");
    paragraphs = paragraphs.filter((para) => para.length !== 0);
    onSaveProfessionalSummaryData(paragraphs);
    onCancelEditing();
  };

  const editProfessionalSummaryHandler = (e) => {
    setFormData(e.target.value);
  };

  return (
    <form onSubmit={saveProfessionalSummaryDataHandler}>
      <FormTextList
        name="summary"
        rows={10}
        value={formData}
        onChange={editProfessionalSummaryHandler}
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

export default ProfessionalSummaryForm;
