import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../lib/client";
import Image from "next/image";
import useTemplate from "../hooks/useTemplate";

export default function AboutCard({ title, data }) {
  const { template } = useTemplate();
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className="m-auto">
      <div className="flex flex-col m-4 rounded-lg shadow-lg p-8  backdrop-blur-lg bg-[rgb(255,255,255,0.5)]  mt-[150px]  lg:w-[400px] ">
        <div className="-mt-[150px] w-[80%] mx-auto">
          <Image
            src={urlFor(data.aboutImage).width(600).url()}
            layout="responsive"
            objectFit="contain"
            height={100}
            width={100}
            priority={true}
            placeholder="blur"
            blurDataURL={urlFor(data.aboutImage).width(10).url()}
          />
        </div>
        <h3
          style={{ color: template.mainColor }}
          className="font-bold text-xl mt-8"
        >
          {title}
        </h3>
        <p
          style={{ color: template.secondaryTextColor }}
          className="text-sm my-4"
        >
          {data.description}
        </p>
      </div>
    </div>
  );
}
