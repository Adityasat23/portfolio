import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import WorkDetailClient from "./WorkDetailClient";

export const revalidate = 60; // Revalidate every 60 seconds

// Di Next.js 15+, params adalah Promise, jadi kita harus menggunakan await
export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const query = `*[_type == "project" && id == $id][0] {
    "title": { "en": titleEn, "id": titleId },
    "meta": {
      role,
      client,
      platform,
      period,
      category
    },
    "heroMedia": heroMedia,
    "metrics": metricsDetail[] {
      "label": { "en": labelEn, "id": labelId },
      value
    },
    "overview": { "en": overviewEn, "id": overviewId },
    "execution": execution[] {
      "title": { "en": titleEn, "id": titleId },
      "desc": { "en": descEn, "id": descId },
      "visual": visual
    },
    "gallery": gallery[] {
      "src": image.asset->url,
      link
    },
    "nextProject": nextProject->{
      id,
      "title": { "en": titleEn, "id": titleId }
    }
  }`;
  
  const project = await client.fetch(query, { id });

  if (project) {
    if (project.heroMedia) {
      project.heroMedia = urlForImage(project.heroMedia).url();
    }
    if (project.execution) {
      project.execution = project.execution.map((step: any) => ({
        ...step,
        visual: step.visual ? urlForImage(step.visual).url() : null
      }));
    }
  }

  return <WorkDetailClient project={project} />;
}