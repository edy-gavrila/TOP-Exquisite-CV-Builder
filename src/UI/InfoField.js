import React from "react";
import classes from "./InfoField.module.css";

function InfoField({ label, text }) {
  return (
    <div className={classes["field-container"]}>
      <small className={classes.label}>{label}</small>
      <p className={classes.text}>{text}</p>
    </div>
  );
}

export default InfoField;
