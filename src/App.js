import { useState, useReducer, useEffect } from "react";
import { logErrorWithLocation } from "./API/errorManagement";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "./API/localStorageOperations";

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
  const [readyToSave, setReadyToSave] = useState(false);

  useEffect(() => {
    try {
      const dataLoadedFromLocalStorage = getDataFromLocalStorage();
      console.log(dataLoadedFromLocalStorage);
      dispatch({ type: "loadFromLS", payload: dataLoadedFromLocalStorage });
    } catch (error) {
      logErrorWithLocation("App.js UseEffect", error);
    }
  }, []);

  useEffect(() => {
    if (readyToSave) {
      setReadyToSave(false);
      saveDataToLocalStorage(CVData);
    }
  }, [CVData, readyToSave]);

  const toggleDisplayMode = () => {
    setDisplayMode((prevState) => {
      const mode = prevState.mode === editMode ? previewMode : editMode;
      return { ...prevState, mode };
    });
  };

  const saveProfessionalSummaryDataHanler = (data) => {
    dispatch({ type: "saveProfessionalSummary", payload: data });
    setReadyToSave(true);
  };
  return (
    <div className="App">
      <DisplayModeContext.Provider
        value={{ ...displayMode, toggleDisplayMode }}
      >
        <Header />
        <CVDataContext.Provider
          value={{
            ...CVData,
            onSaveProfessionalSummaryData: saveProfessionalSummaryDataHanler,
          }}
        >
          <WorkArea />
        </CVDataContext.Provider>
      </DisplayModeContext.Provider>
    </div>
  );
}

export default App;
