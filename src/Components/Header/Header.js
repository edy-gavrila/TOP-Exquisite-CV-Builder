import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes["header-container"]}>
      <h1>Exquisite CV Builder</h1>
      <MainMenu />
    </header>
  );
}

export default Header;
