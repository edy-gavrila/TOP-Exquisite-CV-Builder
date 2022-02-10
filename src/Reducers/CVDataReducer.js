import { logErrorWithLocation } from "../API/errorManagement";

const SAVE_PROFESSIONAL_SUMMARY = "saveProfessionalSummary";
const SAVE_PERSONAL_INFO = "savePersonalInfo";
const UPDATE_EDUCATION_AND_TRAINING = "updateEducationAndTraining";
const DELETE_EDUCATION_AND_TRAINING_ITEM = "deleteEducationAndTrainingItem";
const UPDATE_EXPERIENCE = "updateExperience";
const DELETE_EXPERIENCE = "deleteExperience";
const SAVE_SKILLS = "saveSkills";
const SAVE_WORK_EXPERIENCE = "saveWorkExperience";
const LOAD_FROM_LS = "loadFromLS";
const EXPERIENCE = "experience";
const EDUCATION_AND_TRAINING = "educationAndTraining";

const validDataKeys = [
  "professionalSummary",
  "personalInfo",
  "skills",
  "educationAndTraining",
  "workExperience",
];

const isTypeValid = (type) => {
  if (!type) {
    return false;
  }
  switch (type) {
    case SAVE_PROFESSIONAL_SUMMARY:
    case SAVE_PERSONAL_INFO:
    case UPDATE_EDUCATION_AND_TRAINING:
    case UPDATE_EXPERIENCE:
    case SAVE_SKILLS:
    case SAVE_WORK_EXPERIENCE:
    case LOAD_FROM_LS:
    case DELETE_EDUCATION_AND_TRAINING_ITEM:
    case DELETE_EXPERIENCE:
      return true;
    default:
      return false;
  }
};

const updateArrayFieldInContext = (
  dataToBeUpdated,
  fieldToBeUpdated,
  payload
) => {
  const { newData, itemNumber } = payload;
  try {
    if (
      itemNumber === undefined ||
      itemNumber < 1 ||
      itemNumber > dataToBeUpdated.length + 1
    ) {
      throw new Error("Invalid item number!");
    }

    let updatedArrayField = [];

    if (fieldToBeUpdated === EDUCATION_AND_TRAINING) {
      updatedArrayField = [...dataToBeUpdated.educationAndTraining];
    } else if (fieldToBeUpdated === EXPERIENCE) {
      updatedArrayField = [...dataToBeUpdated.workExperience];
    }

    if (itemNumber === updatedArrayField.length + 1) {
      updatedArrayField.push(newData);
    } else {
      updatedArrayField[itemNumber - 1] = {
        ...newData,
      };
    }

    if (fieldToBeUpdated === EDUCATION_AND_TRAINING) {
      return {
        ...dataToBeUpdated,
        educationAndTraining: updatedArrayField,
      };
    } else if (fieldToBeUpdated === EXPERIENCE) {
      return {
        ...dataToBeUpdated,
        workExperience: updatedArrayField,
      };
    } else {
      throw new Error("Invalid fieldToBeUpdated");
    }
  } catch (e) {
    logErrorWithLocation("editOrAddEducationAndTrainingItem", e);
    return dataToBeUpdated;
  }
};

const CVDataReducer = (currentCVData, action) => {
  const { type, payload } = action;
  try {
    if (!isTypeValid(type)) {
      throw new Error("Type passed to reducer is invalid!");
    }
    switch (type) {
      case SAVE_PROFESSIONAL_SUMMARY:
        return { ...currentCVData, professionalSummary: payload };
      case SAVE_PERSONAL_INFO:
        return { ...currentCVData, personalInfo: payload };
      case UPDATE_EDUCATION_AND_TRAINING: {
        const updatedData = updateArrayFieldInContext(
          { ...currentCVData },
          EDUCATION_AND_TRAINING,
          payload
        );
        return { ...updatedData };
      }
      case UPDATE_EXPERIENCE: {
        const updatedData = updateArrayFieldInContext(
          { ...currentCVData },
          EXPERIENCE,
          payload
        );
        return { ...updatedData };
      }

      case DELETE_EDUCATION_AND_TRAINING_ITEM: {
        const updatedData = currentCVData.educationAndTraining.filter(
          (_, idx) => idx !== payload.itemToDeleteIndex
        );
        return { ...currentCVData, educationAndTraining: updatedData };
      }
      case DELETE_EXPERIENCE: {
        const updatedData = currentCVData.workExperience.filter(
          (_, idx) => idx !== payload.itemToDeleteIndex
        );
        return { ...currentCVData, workExperience: updatedData };
      }

      case SAVE_SKILLS:
        return { ...currentCVData, skills: payload };
      case SAVE_WORK_EXPERIENCE:
        return { ...currentCVData, workExperiance: payload };
      case LOAD_FROM_LS:
        return { ...payload };
      default:
        return { ...currentCVData };
    }
  } catch (e) {
    logErrorWithLocation("CVDataReducer", e);
    return { ...currentCVData };
  }
};

export {
  CVDataReducer,
  SAVE_PROFESSIONAL_SUMMARY,
  SAVE_PERSONAL_INFO,
  UPDATE_EDUCATION_AND_TRAINING,
  DELETE_EDUCATION_AND_TRAINING_ITEM,
  UPDATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  SAVE_SKILLS,
  SAVE_WORK_EXPERIENCE,
  LOAD_FROM_LS,
  isTypeValid,
  validDataKeys,
};
