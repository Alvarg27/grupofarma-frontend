import "../styles/globals.css";
import { TemplateProvider } from "../context/TemplateProvider";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

function MyApp({ Component, pageProps }) {
  return (
    <TemplateProvider>
      <Component {...pageProps} />
    </TemplateProvider>
  );
}

export default MyApp;
