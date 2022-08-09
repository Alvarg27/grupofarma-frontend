import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
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
  return (
    <div className="overflow-x-hidden">
      <Header siteSettings={siteSettings} />
      <Hero hero={hero} />
      <Services services={services} />
      <About about={about} />
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
