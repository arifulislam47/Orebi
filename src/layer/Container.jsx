import React from "react";

function Container({ children, className }) {
  return (
    <div className={`max-w-[1320px] phone:px-8 mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default Container;
