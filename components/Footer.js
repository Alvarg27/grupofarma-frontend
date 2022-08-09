import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../lib/client";
import Image from "next/image";
import useTemplate from "../hooks/useTemplate";
import Icon from "./Icon";

export default function Footer({ contact, siteSettings }) {
  const logoImage = siteSettings[0].logoImage;
  const { template } = useTemplate();
  const title = contact[0].title;
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{ background: template.secondaryColor }}
      className="flex flex-col mt-[150px]"
    >
      <div className="-mt-[150px] w-[70%] mx-auto">
        <Image
          src={urlFor(contact[0].footerImage).width(850).url()}
          objectFit="contain"
          layout="responsive"
          height={100}
          width={100}
          priority={true}
          placeholder="blur"
          blurDataURL={urlFor(contact[0].footerImage).width(10).url()}
        />
      </div>
      <div className="mx-auto">
        <Image
          src={urlFor(logoImage).width(400).url()}
          layout="fixed"
          objectFit="contain"
          height={30}
          width={180}
          priority={true}
        />
      </div>
      <h1
        style={{ color: template.textColor }}
        className="text-4xl font-bold text-center lg:text-6xl"
      >
        {title}
      </h1>
      <div className="flex m-auto my-4">
        {contact[0].socialMedia.map((item) => (
          <div key={item._key}>
            <Icon name={item.icon.name} className="m-2 text-4xl" />
          </div>
        ))}
      </div>
      <h3 className="font-semibold text-center mx-auto">
        {contact[0].mainEmail}
      </h3>
      <div>
        {contact[0].phoneNumbers.map((item) => (
          <h3 key={item._key} className=" text-center mx-auto">
            {item}
          </h3>
        ))}
      </div>
      <p className="my-6 mx-auto text-gray-500">
        powered by <b>tectify</b>
      </p>
      <div style={{ background: template.mainColor }} className="flex h-[50px]">
        <p className="text-xs m-auto">© Copyright {currentYear}, Grupo Farma</p>
      </div>
    </div>
  );
}
