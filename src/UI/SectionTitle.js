import React from "react";
import classes from "./SectionTitle.module.css";

function SectionTitle({ text }) {
  return <h3 className={classes["section-title"]}>{text}</h3>;
}

export default SectionTitle;
