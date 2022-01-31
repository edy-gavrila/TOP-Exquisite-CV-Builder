import React, { useState } from "react";
import classes from "./ProfessionalSummaryForm.module.css";

function ProfessionalSummaryForm({
  profSumData,
  onCancelEditing,
  onSaveProfessionalSummaryData,
}) {
  const [formData, setFormData] = useState(profSumData.join("\n"));

  const saveProfessionalSummaryData = (e) => {
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
    <form onSubmit={saveProfessionalSummaryData}>
      {/* <label htmlFor="profesionalSummary" className={classes.label}>
        Professional Summary
      </label> */}
      <textarea
        name="summary"
        className={classes.textarea}
        rows={10}
        value={formData}
        onChange={editProfessionalSummaryHandler}
        required
      ></textarea>
      <input type="submit" className="section-button save-btn" value={"SAVE"} />
      <input
        type="button"
        onClick={onCancelEditing}
        className="section-button cancel-btn"
        value={"CANCEL"}
      />
    </form>
  );
}

export default ProfessionalSummaryForm;
