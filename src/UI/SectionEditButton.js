import React from "react";
import { IconContext } from "react-icons";
import { FiEdit } from "react-icons/fi";

import classes from "./SectionEditButton.module.css";

function SectionEditButton({ onClick, isItemButton }) {
  return (
    <button className={classes["section-edit-button"]} onClick={onClick}>
      <IconContext.Provider value={{ color: "#355a58", size: "2rem" }}>
        <FiEdit />
      </IconContext.Provider>
    </button>
  );
}

export default SectionEditButton;
