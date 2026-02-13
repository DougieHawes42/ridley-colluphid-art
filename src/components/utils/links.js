import { useState } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

export const Link1 = ({ darkmode, to, text }) => {
  return (
    <Link
      className={`link link1 ${darkmode ? "link1-darkmode" : "link1-lightmode"}`}
      to={to}
    >
      {text}
    </Link>
  );
};
