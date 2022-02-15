import React from "react";
import classes from "./Links.module.css";
import HorizontalDivider from "../../../../UI/HorizontalDivider";

function Links({ linksData }) {
  const links = Object.keys(linksData).map((key, idx) => {
    if (linksData[key].length > 0)
      return (
        <li key={idx}>
          <a href={linksData[key]} target="_blank" rel="noreferrer">
            {linksData[key]}
          </a>
        </li>
      );
  });

  return (
    <section className={classes["links-section"]}>
      <h2>WEBSITES, PORTFOLIOS, PROFILES</h2>
      <HorizontalDivider type={"light"} />
      <ul>{links}</ul>
    </section>
  );
}

export default Links;
