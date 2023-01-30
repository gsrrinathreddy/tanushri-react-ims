import React, { useState } from "react";

function Ibutton(props) {
    let text=props.text;
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <button
        onClick={handleClick}
        style={{ backgroundColor: active ? "#eb15e7" : "white" }}
      >
       {text}
      </button>
    </>
  );
}

export default Ibutton;