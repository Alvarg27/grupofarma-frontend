import Image from "next/image";
import React from "react";
import icon from "../public/icon-gf.svg";

export default function LoadingScreen() {
  return (
    <div className="absolute bg-white w-full h-screen z-50 flex ">
      <div className="m-auto animate-pulse drop-shadow-lg">
        <Image src={icon} layout="fixed" height={80} />
      </div>
    </div>
  );
}
