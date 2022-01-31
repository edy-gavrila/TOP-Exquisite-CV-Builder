const saveProfessionalSummary = "saveProfessionalSummary";
const savePersonalInfo = "savePersonalInfo";
const saveEducationAndTraining = "saveEducationAndTraining";
const saveSkills = "saveSkills";
const saveWorkExperiance = "saveWorkExperience";
const loadFromLS = "loadFromLS";

 const CVDataReducer = (currentCVData, action) => {
  const { type, payload } = action;
  switch (type) {
    case saveProfessionalSummary:
      return { ...currentCVData, professionalSummary: payload };
    case savePersonalInfo:
      return { ...currentCVData, personalInfo: payload };
    case saveEducationAndTraining:
      return { ...currentCVData, educationAndTraining: payload };
    case saveSkills:
      return { ...currentCVData, skills: payload };
    case saveWorkExperiance:
      return { ...currentCVData, workExperiance: payload };
    case loadFromLS:
      return {...payload};
    default:
      throw new Error("Invalid type passed to CVDataReducer");
  }
};

export {CVDataReducer}