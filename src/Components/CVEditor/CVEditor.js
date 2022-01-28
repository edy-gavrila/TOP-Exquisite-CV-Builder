import React from "react";
import { CVDataContext } from "../../Contexts/CVDataContext";

function CVEditor() {
  return (
    <CVDataContext.Consumer>
      {(value) => {
        console.log(value);
        return <h1>CVEditor</h1>;
      }}
    </CVDataContext.Consumer>
  );
}

export default CVEditor;
