import React from "react";
import classes from "./Title.module.css";
import HorizontalDivider from "../../../../UI/HorizontalDivider";

function Title({ firstName, familyName }) {
  return (
    <section>
      <span className={classes.name}>{firstName.toUpperCase()}</span>
      <span className={`${classes.name} ${classes["family-name"]}`}>
        {familyName.toUpperCase()}
      </span>
      <HorizontalDivider type="dark" verticalShift={"-2rem"} />
    </section>
  );
}

export default Title;
