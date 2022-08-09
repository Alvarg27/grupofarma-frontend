// client.js
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "xoi1tcmx", // you can find this in sanity.json
  apiVersion: "2022-07-20",
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
});

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
