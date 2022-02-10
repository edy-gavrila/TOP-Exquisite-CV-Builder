import React from "react";
import InfoField from "../../../UI/InfoField";
import WebLink from "../../../UI/WebLink";
import SectionEditButton from "../../../UI/SectionEditButton";
import classes from "./PersonalInfoData.module.css";

function PersonalInfoData({ persInfoData, onSetEditingMode }) {
  const { firstName, familyName, email, phoneNumber } = persInfoData;
  const { twitter, linkedIn, personalPortfolio, facebook, github } =
    persInfoData.webLinks;
  return (
    <React.Fragment>
      <SectionEditButton onClick={onSetEditingMode} />
      <InfoField label={"First Name"} text={firstName} />
      <InfoField label={"Family Name"} text={familyName} />
      <InfoField label={"Email"} text={email} />
      <InfoField label={"Phone Number"} text={phoneNumber} />
      <div className={classes["web-links-container"]}>
        {twitter && (
          <WebLink iconType="twitter" address={twitter} label="Twitter" />
        )}
        {linkedIn && (
          <WebLink iconType="linkedIn" address={linkedIn} label="LinkedIn" />
        )}
        {github && (
          <WebLink iconType="github" address={github} label="Github" />
        )}
        {facebook && (
          <WebLink iconType="facebook" address={facebook} label="Facebook" />
        )}
        {personalPortfolio && (
          <WebLink
            iconType="portfolio"
            address={personalPortfolio}
            label="Personal Portfolio"
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default PersonalInfoData;
