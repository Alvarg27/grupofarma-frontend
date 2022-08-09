import Head from "next/head";
import About from "../components/About";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Suppliers from "../components/Suppliers";
import imageUrlBuilder from "@sanity/image-url";
import client from "../lib/client";

export default function Home({
  siteSettings,
  hero,
  services,
  about,
  clients,
  suppliers,
  contact,
}) {
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>{siteSettings[0].title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={siteSettings[0].description} />
        <link rel="icon" href="/logo-2.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <Header contact={contact} siteSettings={siteSettings} />
      <Hero contact={contact} hero={hero} />
      <Services services={services} />
      <About contact={contact} about={about} />
      <Clients clients={clients} />
      <Suppliers suppliers={suppliers} />
      <Footer contact={contact} siteSettings={siteSettings} />
    </div>
  );
}
export const getServerSideProps = async () => {
  try {
    const siteSettings = await client.fetch(`*[_type == "siteSettings"]`);
    const hero = await client.fetch(`*[_type == "hero"]`);
    const services = await client.fetch(`*[_type == "services"]`);
    const about = await client.fetch(`*[_type == "about"]`);
    const clients = await client.fetch(`*[_type == "clients"]`);
    const suppliers = await client.fetch(`*[_type == "suppliers"]`);
    const contact = await client.fetch(`*[_type == "contact"]`);
    return {
      props: {
        siteSettings,
        hero,
        services,
        about,
        clients,
        suppliers,
        contact,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
