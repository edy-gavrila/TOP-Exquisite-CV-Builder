import { useState, useReducer } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import WorkArea from "./Components/WorkArea/WorkArea";
import { CVDataContext, defaultCVData } from "./Contexts/CVDataContext";
import {
  DisplayModeContext,
  defaultDisplayMode,
  editMode,
  previewMode,
} from "./Contexts/DisplayModeContext";
import { CVDataReducer } from "./Reducers/CVDataReducer";

function App() {
  const [displayMode, setDisplayMode] = useState(defaultDisplayMode);

  const [CVData, dispatch] = useReducer(CVDataReducer, defaultCVData);

  const toggleDisplayMode = () => {
    setDisplayMode((prevState) => {
      const mode = prevState.mode === editMode ? previewMode : editMode;
      return { ...prevState, mode };
    });
  };
  return (
    <div className="App">
      <DisplayModeContext.Provider
        value={{ ...displayMode, toggleDisplayMode }}
      >
        <Header />
        <CVDataContext.Provider value={CVData}>
          <WorkArea />
        </CVDataContext.Provider>
      </DisplayModeContext.Provider>
    </div>
  );
}

export default App;
