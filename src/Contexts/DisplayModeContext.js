import React from "react";
const editMode = "edit";
const previewMode = "preview";

const defaultDisplayMode = {
  mode: editMode,
  toggleDisplayMode: () => {},
};

const DisplayModeContext = React.createContext({
  ...defaultDisplayMode,
});

export { editMode, previewMode, defaultDisplayMode, DisplayModeContext };
