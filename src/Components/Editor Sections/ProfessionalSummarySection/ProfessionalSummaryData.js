import React from "react";
import SectionEditButton from "../../../UI/SectionEditButton";

function ProfessionalSummary({ profSumData, onSetEditingMode }) {
  const textContent = profSumData.map((para, idx) => (
    <p className="text" key={idx}>
      {para}
    </p>
  ));
  return (
    <React.Fragment>
      <SectionEditButton onClick={onSetEditingMode} />
      {textContent}
    </React.Fragment>
  );
}

export default ProfessionalSummary;
