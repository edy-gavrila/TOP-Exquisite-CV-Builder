import React from "react";
const defaultCVData = {
  professionalSummary: "",
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
  setProfessionalSummary: () => {},
  setPersonalInfo: () => {},
  setEducationAndTraining: () => {},
  setSkills: () => {},
  setWorkExperience: () => {},
};

const CVDataContext = React.createContext(defaultCVData);

export { defaultCVData, CVDataContext };
