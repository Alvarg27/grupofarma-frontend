import React from "react";
import client from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import useTemplate from "../hooks/useTemplate";

export default function Header({ siteSettings }) {
  const builder = imageUrlBuilder(client);
  const logoImage = siteSettings[0].logoImage;
  const { template } = useTemplate();

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div
      style={{ background: template.gradient }}
      className="shadow-md px-4 flex h-[90px] fixed w-full backdrop-blur-md z-50"
    >
      <div className="my-auto">
        <Image
          src={urlFor(logoImage).url()}
          layout="fixed"
          objectFit="contain"
          height={30}
          width={180}
          priority
        />
      </div>
    </div>
  );
}
