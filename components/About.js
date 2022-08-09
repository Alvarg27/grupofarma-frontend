import React from "react";
import useTemplate from "../hooks/useTemplate";
import AboutCard from "./AboutCard";
import Button from "./Button";

export default function About({ about }) {
  const { template } = useTemplate();
  const title = about[0].title;
  return (
    <div
      className="py-10 px-4"
      style={{
        background: `linear-gradient(180deg,${template.secondaryColor},#fff)`,
      }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="m-auto">
          <h1
            style={{ color: template.textColor }}
            className="text-4xl font-bold lg:text-6xl"
          >
            {title}
          </h1>
          <Button>Contacto</Button>
        </div>
        <div className="flex flex-col">
          <AboutCard title="Misión" data={about[0].mision} />
          <AboutCard title="Visión" data={about[0].vision} />
        </div>
        <AboutCard title="Valores" data={about[0].valores} />
      </div>
    </div>
  );
}
