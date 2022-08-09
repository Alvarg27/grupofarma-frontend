import "../styles/globals.css";
import { TemplateProvider } from "../context/TemplateProvider";
import Router from "next/router";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <TemplateProvider>
      {loading ? <LoadingScreen /> : <Component {...pageProps} />}
    </TemplateProvider>
  );
}

export default MyApp;
