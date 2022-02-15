import React from "react";
import classes from "./ProfessionalSummary.module.css";

import HorizontalDivider from "../../../../UI/HorizontalDivider";

function ProfessionalSummary({ professionalSummaryData }) {
  const professionalSummary = professionalSummaryData.map((para, idx) => (
    <p className={classes["text-paragraph"]} key={idx}>
      {para}
    </p>
  ));
  return (
    <section className={classes["ps-section"]}>
      <h2>PROFESSIONAL SUMMARY</h2>
      <HorizontalDivider type="dark" />
      {professionalSummary}
    </section>
  );
}

export default ProfessionalSummary;
