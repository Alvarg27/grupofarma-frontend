import "../styles/globals.css";
import { TemplateProvider } from "../context/TemplateProvider";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log(
      "%cPowered by %ctectify",
      "color: lightgrey; font-family:helvetica; font-size: 18px ;",
      "color: rgb(29,78,216); font-family:helvetica; font-size: 38px ; font-weight: bold;"
    );
  }, []);

  return (
    <TemplateProvider>
      <Component {...pageProps} />
    </TemplateProvider>
  );
}

export default MyApp;
