import React from "react";
import {
  DisplayModeContext,
  editMode,
  previewMode,
} from "../../Contexts/DisplayModeContext";
import CVEditor from "../CVEditor/CVEditor";
import CVPreviewer from "../CVPreviewer/CVPreviewer";
import classes from "./WorkArea.module.css";

function WorkArea() {
  return (
    <main className={classes["work-area-container"]}>
      <DisplayModeContext.Consumer>
        {(value) => {
          if (value.mode === editMode) {
            return <CVEditor />;
          }
          if (value.mode === previewMode) {
            return <CVPreviewer />;
          }
          return null;
        }}
      </DisplayModeContext.Consumer>
    </main>
  );
}

export default WorkArea;
