import React from "react";
import InfoField from "../../../UI/InfoField";

function PersonalInfoData({ persInfoData }) {
  const { firstName, familyName, email, phoneNumber } = persInfoData;
  const { twitter, linkedIn, personalPortfolio, facebook, github } =
    persInfoData.webLinks;
  return (
    <React.Fragment>
      <InfoField label={"First Name"} text={firstName} />
      <InfoField label={"Family Name"} text={familyName} />
      <InfoField label={"Email"} text={email} />
      <InfoField label={"Phone Number"} text={phoneNumber} />
    </React.Fragment>
  );
}

export default PersonalInfoData;

// personalInfo: {
//     firstName: "",
//     familyName: "",
//     email: "",
//     phoneNumber: "",
//     webLinks: {
//       twitter: "",
//       linkedIn: "",
//       personalPortfolio: "",
//       facebook: "",
//       github: "",
//     },
