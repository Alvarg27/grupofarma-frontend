import React from "react";
import * as Icons from "react-icons/fa";

//"Fa" + name[0].toUpperCase() + name.slice(1).toLowerCase().split()

export default function Icon({ name, className }) {
  const iconName =
    "Fa" +
    name
      .split("-")
      .map(
        (item) => item[0].toUpperCase() + item.slice(1).toLowerCase().split()
      )
      .join("");

  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    // Return a default one
    return <Icons.FaBeer className={className} />;
  }
  return <IconComponent className={className} />;
}
