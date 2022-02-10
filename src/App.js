import { useState, useReducer, useEffect } from "react";
import "./App.css";

import { logErrorWithLocation } from "./API/errorManagement";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "./API/localStorageOperations";

import Header from "./Components/Header/Header";
import WorkArea from "./Components/WorkArea/WorkArea";
import { CVDataContext, defaultCVData } from "./Contexts/CVDataContext";
import {
  DisplayModeContext,
  defaultDisplayMode,
  editMode,
  previewMode,
} from "./Contexts/DisplayModeContext";

import {
  CVDataReducer,
  SAVE_PROFESSIONAL_SUMMARY,
  SAVE_PERSONAL_INFO,
  SAVE_SKILLS,
  LOAD_FROM_LS,
  UPDATE_EDUCATION_AND_TRAINING,
  DELETE_EDUCATION_AND_TRAINING_ITEM,
  UPDATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  validDataKeys,
} from "./Reducers/CVDataReducer";

function App() {
  const [displayMode, setDisplayMode] = useState(editMode);

  const [CVData, dispatch] = useReducer(CVDataReducer, defaultCVData);
  const [readyToSave, setReadyToSave] = useState(false);

  useEffect(() => {
    let dataLoadedFromLocalStorage;
    try {
      dataLoadedFromLocalStorage = getDataFromLocalStorage(validDataKeys);
      dispatch({ type: LOAD_FROM_LS, payload: dataLoadedFromLocalStorage });
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

  const saveCVDataHandler = (type, data) => {
    dispatch({ type, payload: data });
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
            onSaveProfessionalSummaryData: (data) =>
              saveCVDataHandler(SAVE_PROFESSIONAL_SUMMARY, data),
            onSavePersonalInfoData: (data) =>
              saveCVDataHandler(SAVE_PERSONAL_INFO, data),
            onSaveSkillsData: (data) => saveCVDataHandler(SAVE_SKILLS, data),
            onUpdateEducationAndTrainingData: (data) =>
              saveCVDataHandler(UPDATE_EDUCATION_AND_TRAINING, data),
            onDeleteEducationAndTrainingData: (itemNumber) =>
              saveCVDataHandler(DELETE_EDUCATION_AND_TRAINING_ITEM, {
                itemToDeleteIndex: itemNumber,
              }),
            onUpdateExperience: (data) =>
              saveCVDataHandler(UPDATE_EXPERIENCE, data),
            onDeleteExperience: (itemNumber) =>
              saveCVDataHandler(DELETE_EXPERIENCE, {
                itemToDeleteIndex: itemNumber,
              }),
          }}
        >
          <WorkArea />
        </CVDataContext.Provider>
      </DisplayModeContext.Provider>
    </div>
  );
}

export default App;
