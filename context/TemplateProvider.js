import { createContext, useState } from "react";

const TemplateContext = createContext({});

export const TemplateProvider = ({ children }) => {
  const [template, setTemplate] = useState({
    mainColor: "#71d7ff",
    hoverMainColor: "#56bbe3",
    secondaryColor: "#bcecff",
    gradient:
      "linear-gradient(0deg,rgba(188,236,255,.7),hsla(0,0%,100%,.7) 50%)",
    textColor: "black",
    secondaryTextColor: "gray",
  });

  return (
    <TemplateContext.Provider value={{ template, setTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};

export default TemplateContext;
