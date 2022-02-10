import React from "react";
import classes from "./FormInput.module.css";

function FormInput({
  type = "text",
  id,
  value,
  placeholder = "",
  onChange,
  required = false,
}) {
  return (
    <input
      className={classes["form-input"]}
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  );
}

export default FormInput;
