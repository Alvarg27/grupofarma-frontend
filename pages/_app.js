import "../styles/globals.css";
import { TemplateProvider } from "../context/TemplateProvider";
import Router from "next/router";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [loading]);
  return (
    <TemplateProvider>
      {loading ? <LoadingScreen /> : ""}
      <Component {...pageProps} />
    </TemplateProvider>
  );
}

export default MyApp;
