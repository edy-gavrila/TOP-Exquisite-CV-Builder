import React, { useState } from "react";
import FormButton from "../../../UI/FormButton";

import classes from "./PersonalInfoForm.module.css";

function PersonalInfoForm({
  onCancelEditing,
  persInfoData,
  onSavePersonalInfoData,
}) {
  const [updatedData, setUpdatedData] = useState(persInfoData);

  const inputChangedHandler = (field, data) => {
    setUpdatedData((prevState) => {
      const updatedState = { ...prevState };
      switch (field) {
        case "twitter":
        case "linkedIn":
        case "github":
        case "facebook":
        case "personalPortfolio":
          updatedState.webLinks[field] = data;
          break;
        default:
          updatedState[field] = data;
      }
      return updatedState;
    });
  };

  const savePersonalInfoDataHandler = (e) => {
    e.preventDefault();
    onSavePersonalInfoData(updatedData);
    onCancelEditing();
  };

  return (
    <form onSubmit={savePersonalInfoDataHandler}>
      <input
        className={classes["form-input"]}
        type="text"
        id="firstName"
        placeholder="First Name..."
        value={updatedData.firstName}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
        required
      />
      <input
        className={classes["form-input"]}
        type="text"
        id="familyName"
        placeholder="Family Name..."
        value={updatedData.familyName}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
        required
      />
      <input
        className={classes["form-input"]}
        type="email"
        id="email"
        placeholder="Your Email..."
        value={updatedData.email}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
        required
      />
      <input
        className={classes["form-input"]}
        type="number"
        id="phoneNumber"
        placeholder="Your Phone Number..."
        value={updatedData.phoneNumber}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
        required
      />
      <input
        className={classes["form-input"]}
        type="url"
        id="twitter"
        placeholder="Your Twitter Profile..."
        value={updatedData.webLinks.twitter}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
      />
      <input
        className={classes["form-input"]}
        type="url"
        id="linkedIn"
        placeholder="Your LinkedIn Profile..."
        value={updatedData.webLinks.linkedIn}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
      />
      <input
        className={classes["form-input"]}
        type="url"
        id="github"
        placeholder="Your Github Profile..."
        value={updatedData.webLinks.github}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
      />
      <input
        className={classes["form-input"]}
        type="url"
        id="facebook"
        placeholder="Your Facebook Profile..."
        value={updatedData.webLinks.facebook}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
      />
      <input
        className={classes["form-input"]}
        type="url"
        id="personalPortfolio"
        placeholder="Your Personal Porftolio..."
        value={updatedData.webLinks.personalPortfolio}
        onChange={(e) => inputChangedHandler(e.target.id, e.target.value)}
      />

      <FormButton type="submit" role="submit" value="SAVE" />
      <FormButton
        type="button"
        role="cancel"
        value="CANCEL"
        onClick={onCancelEditing}
      />
    </form>
  );
}

export default PersonalInfoForm;

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
