import "../styles/globals.css";
import { TemplateProvider } from "../context/TemplateProvider";

function MyApp({ Component, pageProps }) {
  return (
    <TemplateProvider>
      <Component {...pageProps} />
    </TemplateProvider>
  );
}

export default MyApp;
