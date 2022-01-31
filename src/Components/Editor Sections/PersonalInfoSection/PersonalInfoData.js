import React from "react";
import InfoField from "../../../UI/InfoField";
import WebLink from "../../../UI/WebLink";

import classes from "./PersonalInfoData.module.css"

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
      <div className={classes["web-links-container"]}>
        <WebLink iconType="twitter" address={twitter} label="Twitter" />
        <WebLink iconType="linkedIn" address={linkedIn} label="LinkedIn" />
        <WebLink iconType="github" address={github} label="Github" />
        <WebLink iconType="facebook" address={facebook} label="Facebook" />
        <WebLink
          iconType="portfolio"
          address={personalPortfolio}
          label="Personal Portfolio"
        />
      </div>
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
