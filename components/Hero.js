import Image from "next/image";
import React from "react";
import useTemplate from "../hooks/useTemplate";
import Button from "./Button";
import imageUrlBuilder from "@sanity/image-url";
import client from "../lib/client";

export default function Hero({ hero }) {
  const { template } = useTemplate();
  const title = hero[0].title;
  const description = hero[0].description;
  const heroImage = hero[0].mainImage;

  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div
      style={{
        background: `linear-gradient(180deg,${template.secondaryColor},#fff)`,
      }}
      className="flex px-4 pt-32 pb-10 relative"
    >
      <div
        style={{
          background: `linear-gradient(180deg,#71d7ff,rgba(113,215,255,.5))`,
        }}
        className="w-[1000px] h-[1000px] absolute rounded-full opacity-50 left-1/2 top-1/2 -translate-y-1/2"
      />
      <div className="w-1/2 flex">
        <div className="m-auto">
          <h1
            style={{ color: template.textColor }}
            className="text-4xl font-bold"
          >
            {title}
          </h1>
          <h3
            style={{ color: template.secondaryTextColor }}
            className="text-sm my-4"
          >
            {description}
          </h3>
          <Button>Contacto</Button>
        </div>
      </div>
      <div className="w-1/2 p-4 flex">
        <div className="w-full m-auto">
          <Image
            src={urlFor(heroImage).url()}
            layout="responsive"
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
}