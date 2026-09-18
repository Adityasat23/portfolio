import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import WorkClient from "./WorkClient";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function WorkPage() {
  const query = `*[_type == "project"] | order(orderRank asc, _createdAt desc) {
    id,
    "title": { "en": titleEn, "id": titleId },
    category,
    role,
    "metrics": metricsTitle,
    "thumb": thumb,
    badges
  }`;
  
  const rawProjects = await client.fetch(query);
  const projects = rawProjects.map((proj: any) => ({
    ...proj,
    thumb: proj.thumb ? urlForImage(proj.thumb).url() : null
  }));

  return <WorkClient projects={projects} />;
}