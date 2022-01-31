import React from "react";
const defaultCVData = {
  professionalSummary: [],
  personalInfo: {
    firstName: "Eduard",
    familyName: "Gavrila",
    email: "edygavrila@gmail.com",
    phoneNumber: "07440769349",
    webLinks: {
      twitter: "https://twitter.com/eduard_gavrila",
      linkedIn: "https://www.linkedin.com/in/eduard-gavrila-129951136/",
      personalPortfolio: "https://edy-gavrila.github.io/Portfolio/",
      facebook: "https://www.facebook.com/eduard.gavrila/",
      github: "https://github.com/edy-gavrila",
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

// " Self Self-taught Web Developer with a excellent communication skills and focus on Frontend technologies - JavaScript, React, HTML & CSS. Working with VS Code and Git. Working with CSS libraries like Bootstrap and Tailwind Passionate about solving problems, software architecture and programming patterns.",
// "Ready to join a dynamic company and help create value for clients. Always ready to learn.",