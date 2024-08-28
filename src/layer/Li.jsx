import React from "react";
import { Link } from "react-router-dom";

function Li({ litext, className ,to}) {
  return (
    <li>
      <Link to={to} className={`${className}`}>{litext}</Link>
    </li>
  );
}

export default Li;
