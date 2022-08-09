import React from "react";
import useTemplate from "../hooks/useTemplate";
import AboutCard from "./AboutCard";
import Button from "./Button";
import Link from "next/link";

export default function About({ about, contact }) {
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
        <div className="m-auto flex flex-col">
          <h1
            style={{ color: template.textColor }}
            className="text-4xl mx-auto text-center font-bold lg:text-6xl lg:mx-0 lg:text-left "
          >
            {title}
          </h1>
          <div className="mx-auto lg:mx-0 my-4">
            <Link href={"mailto:" + contact[0].mainEmail}>
              <a>
                <Button>Contacto</Button>
              </a>
            </Link>
          </div>
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
