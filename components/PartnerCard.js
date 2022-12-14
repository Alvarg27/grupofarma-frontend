import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../lib/client";
import Image from "next/image";

export default function PartnerCard({ item, image }) {
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <div className="w-1/3">
      <div className="m-2 backdrop-blur-lg bg-[rgb(255,255,255,0.5)] rounded-lg shadow-lg flex h-[100px] lg:h-[120px]">
        <div className="m-auto">
          <div>
            <Image
              src={urlFor(image).width(200).url()}
              layout="fixed"
              objectFit="contain"
              height={70}
              width={70}
              placeholder="blur"
              className="transition duration-300"
              blurDataURL={urlFor(image).width(10).url()}
              alt={item.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
