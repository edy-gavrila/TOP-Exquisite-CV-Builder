import React from "react";
import {
  DisplayModeContext,
  editMode,
} from "../../Contexts/DisplayModeContext";
import classes from "./MainMenu.module.css";

function MainMenu() {
  return (
    <DisplayModeContext.Consumer>
      {(value) => {
        let appliedClassToMovingBackground =
          value.mode === editMode
            ? classes["moving-background-placement-left"]
            : classes["moving-background-placement-right"];
            
        let movingButtonBackgroundCSSStyle = `${classes["moving-background"]} ${appliedClassToMovingBackground}`;
     
        return (
          <nav className={classes["main-menu-nav"]}>
            <ul>
              <li>
                <button onClick={value.toggleDisplayMode}>Edit</button>
              </li>
              <li>
                <button onClick={value.toggleDisplayMode}>Preview</button>
              </li>
              <div className={movingButtonBackgroundCSSStyle}></div>
            </ul>
          </nav>
        );
      }}
    </DisplayModeContext.Consumer>
  );
}

export default MainMenu;
