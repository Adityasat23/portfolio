import { client } from "@/sanity/lib/client";
import HomeClient from "./HomeClient";

export const revalidate = 60; // Revalidate setiap 60 detik

export default async function Home() {
  // Query untuk mengambil project yang ditandai 'showInHome'
  const query = `*[_type == "project" && showInHome == true] | order(orderRank asc, _createdAt desc)[0...3] {
    id,
    "title": { "en": titleEn, "id": titleId },
    category,
    role,
    "thumb": thumb.asset->url
  }`;

  const featuredProjects = await client.fetch(query);

  return <HomeClient featuredProjects={featuredProjects} />;
}
