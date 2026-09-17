import { client } from "@/sanity/lib/client";
import GalleryClient from "./GalleryClient";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function GalleryPage() {
  const queryStandalone = `*[_type == "gallery" && defined(image.asset)] | order(_createdAt desc) {
    "id": _id,
    title,
    category,
    "src": image.asset->url,
    "relatedProjectUrl": relatedProject->id,
    "_createdAt": _createdAt
  }`;
  
  const queryProjects = `*[_type == "project" && defined(gallery)] {
    "projectId": id,
    "projectTitle": coalesce(titleEn, titleId, "Project"),
    "projectCategory": category,
    "gallery": gallery[] {
      "src": image.asset->url,
      link,
      category
    },
    "_createdAt": _createdAt
  }`;
  
  const [standaloneItems, projectDocs] = await Promise.all([
    client.fetch(queryStandalone),
    client.fetch(queryProjects)
  ]);
  
  // Transform standalone items
  const formattedStandalone = standaloneItems.map((item: any) => ({
    ...item,
    relatedProjectUrl: item.relatedProjectUrl ? `/work/${item.relatedProjectUrl}` : null
  }));

  // Extract array of images from projects and format them
  const projectGalleryItems: any[] = [];
  projectDocs.forEach((doc: any) => {
    if (doc.gallery && Array.isArray(doc.gallery)) {
      doc.gallery.forEach((img: any, index: number) => {
        if (img.src) {
          projectGalleryItems.push({
            id: `${doc.projectId}-gallery-${index}`,
            title: `${doc.projectTitle} (Archive)`,
            category: img.category || doc.projectCategory || "Social Content",
            src: img.src,
            relatedProjectUrl: `/work/${doc.projectId}`,
            _createdAt: doc._createdAt
          });
        }
      });
    }
  });

  // Combine and sort by date descending
  const allGalleryItems = [...formattedStandalone, ...projectGalleryItems].sort((a, b) => {
    return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
  });

  return <GalleryClient galleryItems={allGalleryItems} />;
}