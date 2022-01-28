import React from "react";
import classes from "./SectionContainer.module.css";

function SectionContainer(props) {
  return (
    <section className={classes["section-container"]}>{props.children}</section>
  );
}

export default SectionContainer;
