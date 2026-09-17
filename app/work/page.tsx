import { client } from "@/sanity/lib/client";
import WorkClient from "./WorkClient";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function WorkPage() {
  const query = `*[_type == "project"] | order(orderRank asc, _createdAt desc) {
    id,
    "title": { "en": titleEn, "id": titleId },
    category,
    role,
    "metrics": metricsTitle,
    "thumb": thumb.asset->url,
    badges
  }`;
  
  const projects = await client.fetch(query);

  return <WorkClient projects={projects} />;
}