import React from "react";
import useTemplate from "../hooks/useTemplate";
import ServiceCard from "./ServiceCard";

export default function Services({ services }) {
  const { template } = useTemplate();
  const title = services[0].title;

  console.log(services);
  return (
    <div
      style={{
        background: `linear-gradient(0deg,${template.secondaryColor},#fff)`,
      }}
    >
      <h1
        style={{ color: template.textColor }}
        className="text-4xl font-bold text-center"
      >
        {title}
      </h1>

      <div className="flex flex-col lg:flex-row">
        {services[0].services.map((service) => (
          <ServiceCard key={service._key} service={service} />
        ))}
      </div>
    </div>
  );
}
