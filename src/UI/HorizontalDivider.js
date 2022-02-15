import React from "react";
import classes from "./HorizontalDivider.module.css";

function HorizontalDivider({ type, verticalShift }) {
  let appliedClasses = [classes["divider"]];
  if (type === "dark") {
    appliedClasses.push(classes["divider-dark"]);
  }
  if (type === "light") {
    appliedClasses.push(classes["divider-light"]);
  }
  return (
    <hr
      className={appliedClasses.join(" ")}
      style={{ top: verticalShift }}
    ></hr>
  );
}

export default HorizontalDivider;
