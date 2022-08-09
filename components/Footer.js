import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../lib/client";
import Image from "next/image";
import useTemplate from "../hooks/useTemplate";
import Icon from "./Icon";
import Link from "next/link";

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
      className="flex flex-col mt-[100px]"
    >
      <div className="lg:flex lg:justify-between lg:px-24">
        <div className="-mt-[100px] w-[70%] mx-auto lg:w-[400px] lg:mx-0">
          <Image
            src={urlFor(contact[0].footerImage).width(850).url()}
            objectFit="contain"
            layout="responsive"
            height={100}
            width={100}
            placeholder="blur"
            className="transition duration-300"
            blurDataURL={urlFor(contact[0].footerImage).width(10).url()}
            alt=""
          />
        </div>
        <div className="flex flex-col mt-8">
          <div className="mx-auto lg:mx-0">
            <Image
              src={urlFor(logoImage).width(400).url()}
              layout="fixed"
              objectFit="contain"
              height={30}
              width={180}
              priority={true}
              alt="Grupo Farma"
            />
          </div>
          <h1
            style={{ color: template.textColor }}
            className="text-4xl font-bold text-center mx-auto lg:mx-0 lg:text-left lg:text-6xl"
          >
            {title}
          </h1>
          <div className="flex m-auto my-4 lg:mx-0">
            {contact[0].socialMedia.map((item) => (
              <div key={item._key}>
                <Link href={item.socialLink}>
                  <a target="_blank">
                    <Icon name={item.icon.name} className="m-2 text-4xl" />
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <h3 className="font-semibold text-center mx-auto lg:mx-0 lg:text-left">
            {contact[0].mainEmail}
          </h3>
          <div>
            {contact[0].phoneNumbers.map((item) => (
              <h3
                key={item}
                className=" text-center mx-auto lg:mx-0 lg:text-left"
              >
                {item}
              </h3>
            ))}
          </div>
        </div>
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
