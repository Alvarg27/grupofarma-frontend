import React from "react";
import client from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import useTemplate from "../hooks/useTemplate";
import Button from "./Button";
import Link from "next/link";

export default function Header({ siteSettings, contact }) {
  const builder = imageUrlBuilder(client);
  const logoImage = siteSettings[0].logoImage;
  const { template } = useTemplate();

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div
      style={{ background: template.gradient }}
      className="shadow-md px-4 flex h-[90px] fixed w-full backdrop-blur-md z-40 justify-between"
    >
      <div className="my-auto">
        <Image
          src={urlFor(logoImage).width(400).url()}
          layout="fixed"
          objectFit="contain"
          height={30}
          width={180}
          priority={true}
        />
      </div>
      <div className="my-auto">
        <Link href={"mailto:" + contact[0].mainEmail}>
          <a>
            <Button>Contacto</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
