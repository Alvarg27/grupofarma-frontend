import React, { useState } from "react";
import useTemplate from "../hooks/useTemplate";

export default function Button({ children }) {
  const [hover, setHover] = useState();
  const { template } = useTemplate();
  return (
    <button
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={{
        background: hover ? template.hoverMainColor : template.mainColor,
        transition: "0.3s",
      }}
      className="text-white py-2 px-6 rounded-lg my-2 "
    >
      {children}
    </button>
  );
}
