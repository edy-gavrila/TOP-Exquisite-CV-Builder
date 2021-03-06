import React from "react";
const defaultCVData = {
  professionalSummary: [],
  personalInfo: {
    firstName: "",
    familyName: "",
    email: "",
    phoneNumber: "",
    webLinks: {
      twitter: "",
      linkedIn: "",
      personalPortfolio: "",
      facebook: "",
      github: "",
    },
  },
  educationAndTraining: [],
  skills: [],
  workExperience: [],
  onSaveProfessionalSummaryData: () => {},
  onSavePersonalInfoData: () => {},
  onUpdateEducationAndTrainingData: () => {},
  onDeleteEducationAndTrainingData: () => {},
  onUpdateExperience: () => {},
  onDeleteExperience: () => {},
  onSaveSkillsData: () => {},
  onSaveWorkExperienceData: () => {},
};

const CVDataContext = React.createContext(defaultCVData);

export { defaultCVData, CVDataContext };
