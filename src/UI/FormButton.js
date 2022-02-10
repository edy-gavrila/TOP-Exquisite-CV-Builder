import React from "react";
import classes from "./FormButton.module.css";

const FormButton = ({ type = "button", role, value, onClick }) => {
  let appliedClasses = [classes["form-button"]];
  switch (role) {
    case "submit":
      appliedClasses.push(classes["submit-button"]);
      break;
    case "cancel":
      appliedClasses.push(classes["cancel-button"]);
      break;
    case "add":
      appliedClasses.push(classes["add-button"]);
      break;
    default:
  }
  appliedClasses = appliedClasses.join(" ");
  return (
    <input
      className={appliedClasses}
      type={type}
      onClick={onClick}
      value={value}
    />
  );
};

export default FormButton;
