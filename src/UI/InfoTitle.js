import React from "react";
import classes from "./InfoTitle.module.css";

function InfoTitle({ text }) {
  return <h4 className={classes["info-title"]}>{text}</h4>;
}

export default InfoTitle;
