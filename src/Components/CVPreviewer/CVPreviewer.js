import React from "react";
import { CVDataContext } from "../../Contexts/CVDataContext.js";
import Format1 from "./Format1/Format1.js";

function CVPreviewer() {
  return (
    <React.Fragment>
      <CVDataContext.Consumer>
        {(value) => <Format1 cvData={value} />}
      </CVDataContext.Consumer>
    </React.Fragment>
  );
}

export default CVPreviewer;
