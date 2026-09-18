import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import HomeClient from "./HomeClient";

export const revalidate = 60; // Revalidate setiap 60 detik

export default async function Home() {
  // Query untuk mengambil project yang ditandai 'showInHome'
  const query = `*[_type == "project" && showInHome == true] | order(orderRank asc, _createdAt desc)[0...3] {
    id,
    "title": { "en": titleEn, "id": titleId },
    category,
    role,
    "thumb": thumb
  }`;

  const rawProjects = await client.fetch(query);
  const featuredProjects = rawProjects.map((proj: any) => ({
    ...proj,
    thumb: proj.thumb ? urlForImage(proj.thumb).url() : null
  }));

  return <HomeClient featuredProjects={featuredProjects} />;
}
