import React from "react";
import useTemplate from "../hooks/useTemplate";

export default function Button({ children }) {
  const { template } = useTemplate();
  return (
    <button
      style={{ background: template.mainColor }}
      className="text-white py-2 px-8 rounded-lg my-2 "
    >
      {children}
    </button>
  );
}
