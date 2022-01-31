import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaGlobeEurope,
} from "react-icons/fa";
import { IoFolder } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

import classes from "./WebLink.module.css";

function WebLink({ iconType, address, label }) {
  const iconTypeData = [
    { type: "twitter", icon: <FaTwitter /> },
    { type: "facebook", icon: <FaFacebook /> },
    { type: "linkedIn", icon: <FaLinkedin /> },
    { type: "github", icon: <FaGithub /> },
    { type: "portfolio", icon: <IoFolder /> },
    { type: "default", icon: <FaGlobeEurope /> },
  ];

  let currentIcon = iconTypeData.find((icon) => {
    return icon.type === iconType;
  });
  if (!currentIcon) {
    currentIcon = iconTypeData[iconTypeData.length - 1];
  }
  return (
    <a
      className={classes["web-link"]}
      href={address}
      target={"_blank"}
      rel="noreferrer"
    >
      <IconContext.Provider
        value={{ size: "1.5rem", className: classes["icons"] }}
      >
        {currentIcon.icon}
      </IconContext.Provider>
      {label}
    </a>
  );
}

export default WebLink;
