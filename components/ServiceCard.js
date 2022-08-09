import React from "react";
import useTemplate from "../hooks/useTemplate";
import Icon from "./Icon";

export default function ServiceCard({ service }) {
  const { template } = useTemplate();
  return (
    <div className="flex flex-col m-4 rounded-lg shadow-lg p-8  backdrop-blur-lg bg-[rgb(255,255,255,0.5)] h-[200px]  lg:w-[400px] lg:h-[250px]">
      <div>
        <Icon className="text-[60px] text-gray-500" name={service.icon.name} />
        <h3
          style={{ color: template.mainColor }}
          className="font-bold text-xl mt-8"
        >
          {service.title}
        </h3>
      </div>
    </div>
  );
}
