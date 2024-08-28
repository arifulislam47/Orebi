import React, { useState } from "react";

function Hover() {
  const [Hover, setHover] = useState(false);

 

  return (
    <div>
      <button
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        Hover over me!
      </button>
      {Hover && <div>I'll appear when you hover over the button.</div>}
    </div>
  );
}

export default Hover;
