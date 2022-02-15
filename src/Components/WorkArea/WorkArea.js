import React from "react";
import classes from "./WorkArea.module.css";

import {
  DisplayModeContext,
  editMode,
  previewMode,
} from "../../Contexts/DisplayModeContext";
import CVEditor from "../CVEditor/CVEditor";
import CVPreviewer from "../CVPreviewer/CVPreviewer";

function WorkArea() {
  return (
    <DisplayModeContext.Consumer>
      {(value) => {
        const appliedContainerClasses = [classes["work-area-container"]];

        let workAreaContent = null;
        if (value.mode === editMode) {
          workAreaContent = <CVEditor />;
        }
        if (value.mode === previewMode) {
          workAreaContent = <CVPreviewer />;
          appliedContainerClasses.push(classes["preview-mode-container"]);
        }

        return (
          <main className={appliedContainerClasses.join(" ")}>
            {workAreaContent}
          </main>
        );
      }}
    </DisplayModeContext.Consumer>
  );
}

export default WorkArea;
