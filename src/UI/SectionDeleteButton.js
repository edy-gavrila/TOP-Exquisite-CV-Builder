import React from "react";
import { IconContext } from "react-icons";
import classes from "./SectionDeleteButton.module.css";
import { VscTrash } from "react-icons/vsc";
function SectionDeleteButton({ onClick, isItemButton }) {
  return (
    <button className={classes["section-delete-button"]} onClick={onClick}>
      <IconContext.Provider value={{ color: "#355a58", size: "2.25rem" }}>
        <VscTrash />
      </IconContext.Provider>
    </button>
  );
}

export default SectionDeleteButton;
