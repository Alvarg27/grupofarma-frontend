import React, { useState } from "react";
import useTemplate from "../hooks/useTemplate";
import Icon from "./Icon";

export default function ServiceCard({ service }) {
  const [hover, setHover] = useState();
  const { template } = useTemplate();
  return (
    <div
      style={{
        background: hover ? template.mainColor : "rgb(255,255,255,0.5)",
        transition: "0.3s",
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="flex flex-col m-4 rounded-lg shadow-lg p-8  backdrop-blur-lg bg-[rgb(255,255,255,0.5)] h-[200px]  lg:w-[400px] lg:h-[250px]"
    >
      <div>
        <Icon
          style={{
            color: hover ? "white" : template.secondaryTextColor,
            transition: "0.3s",
          }}
          className="text-[60px]"
          name={service.icon.name}
        />
        <h3
          style={{
            color: hover ? "white" : template.mainColor,
            transition: "0.3s",
          }}
          className="font-bold text-xl mt-8"
        >
          {service.title}
        </h3>
      </div>
    </div>
  );
}
