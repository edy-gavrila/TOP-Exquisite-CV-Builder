import React from "react";
import classes from "./FormTextList.module.css";

function FormTextList({
  onChange,
  value = "",
  required = false,
  placeholder,
  id,
  rows = 5,
}) {
  return (
    <textarea
      id={id}
      className={classes["text-list"]}
      rows={rows}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    ></textarea>
  );
}

export default FormTextList;
