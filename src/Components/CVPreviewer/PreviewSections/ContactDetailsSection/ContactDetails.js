import React from "react";
import classes from "./ContactDetails.module.css";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IconContext } from "react-icons";

function ContactDetails({ contactDetailsData }) {
  const { phoneNumber, email } = contactDetailsData;
  return (
    <section className={classes["contact-details-section"]}>
      <IconContext.Provider
        value={{ size: "1.2rem", className: classes["contact-details-icon"] }}
      >
        <p>
          <AiOutlinePhone />
          {phoneNumber}
        </p>
        <p>
          <AiOutlineMail />
          {email}
        </p>
      </IconContext.Provider>
    </section>
  );
}

export default ContactDetails;
