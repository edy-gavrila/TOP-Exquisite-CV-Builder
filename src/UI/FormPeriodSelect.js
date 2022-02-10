import React from "react";
import classes from "./FormPeriodSelect.module.css";

function FormPeriodSelect({ values, onChange, ids, required = false }) {
  return (
    <div className={classes["fieldset-container"]}>
      <fieldset>
        <legend>From</legend>
        <input
          type="date"
          id={ids.from}
          value={values.from}
          onChange={onChange}
          required={required}
        />
      </fieldset>

      <fieldset>
        <legend>Until</legend>
        <input
          type="date"
          id={ids.until}
          value={values.until}
          onChange={onChange}
          required={required}
        />
      </fieldset>
    </div>
  );
}

export default FormPeriodSelect;
