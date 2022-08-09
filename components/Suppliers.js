import React from "react";
import useTemplate from "../hooks/useTemplate";
import PartnerCard from "./PartnerCard";

export default function Suppliers({ suppliers }) {
  const { template } = useTemplate();
  const title = suppliers[0].title;
  const description = suppliers[0].description;
  console.log(suppliers);
  return (
    <div
      className="py-10 flex flex-col w-full"
      style={{
        background: `linear-gradient(180deg,${template.secondaryColor},#fff)`,
      }}
    >
      <h1
        style={{ color: template.textColor }}
        className="text-4xl font-bold text-center lg:text-6xl"
      >
        {title}
      </h1>
      <p
        style={{ color: template.secondaryTextColor }}
        className="text-sm my-4 text-center"
      >
        {description}
      </p>
      <div className="flex flex-wrap  lg:px-32">
        {suppliers[0].suppliers.map((item) => (
          <PartnerCard key={item._key} item={item} image={item.clientImage} />
        ))}
      </div>
    </div>
  );
}
