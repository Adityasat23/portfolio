const { createClient } = require('@sanity/client');
const fs = require('fs');

// Parse .env.local manually
const envFile = fs.readFileSync('.env.local', 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) env[match[1].trim()] = match[2].trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '');
});

// Setup client
const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: env.SANITY_API_TOKEN, 
  apiVersion: '2024-03-12',
});

const projects = [
  {
    _type: 'project',
    id: 'gemini',
    titleEn: 'Google Gemini - Student Promo',
    titleId: 'Google Gemini - Student Promo',
    showInHome: true,
    category: 'Video & Motion',
    role: 'Video Editor',
    client: 'Google Indonesia (via Angkasa)',
    platform: 'TikTok & Instagram Reels',
    period: '2024',
    metricsTitle: '21.7M+ Views',
    overviewEn: "Edited promotional content for Google Gemini, adapting the brand's global visual guidelines into short-form content made for TikTok and Instagram. The edit focused on keeping the message clear, dynamic, and engaging while staying consistent with Google's brand standards.",
    overviewId: "Mengedit konten promosi untuk Google Gemini, mengadaptasi panduan visual global brand ke dalam format video pendek untuk TikTok dan Instagram. Editing berfokus pada menjaga pesan tetap jelas, dinamis, dan menarik namun tetap konsisten dengan standar brand Google.",
    metricsDetail: [
      { _key: 'm1', labelEn: 'Total Views', labelId: 'Total Views', value: '21.7M+' },
      { _key: 'm2', labelEn: 'Brand Compliance', labelId: 'Brand Compliance', value: '100%' },
    ],
    execution: [
      { _key: 'e1', titleEn: 'Build the Opening', titleId: 'Build the Opening', descEn: 'Tightened the first few seconds of the edit so the main message and visual hook landed quickly without making the video feel rushed.', descId: 'Tightened the first few seconds of the edit so the main message and visual hook landed quickly without making the video feel rushed.' },
      { _key: 'e2', titleEn: 'Keep the Brand Consistent', titleId: 'Keep the Brand Consistent', descEn: "Adjusted typography, graphics, transitions, and pacing to follow Google's visual guidelines while keeping the edit suitable for short-form content.", descId: "Adjusted typography, graphics, transitions, and pacing to follow Google's visual guidelines while keeping the edit suitable for short-form content." },
      { _key: 'e3', titleEn: 'Final Polish', titleId: 'Final Polish', descEn: 'Refined the cuts, timing, sound, and on-screen elements to make the final video feel clean and easy to follow.', descId: 'Refined the cuts, timing, sound, and on-screen elements to make the final video feel clean and easy to follow.' },
    ]
  },
  {
    _type: 'project',
    id: 'ob-herbal',
    titleEn: 'Dr. Grace × OB Herbal Campaign',
    titleId: 'Dr. Grace × OB Herbal Campaign',
    showInHome: true,
    category: 'Video & Motion',
    role: 'Video Editor',
    client: 'OB Herbal (via Angkasa)',
    platform: 'TikTok & Instagram',
    metricsTitle: 'Health Campaign',
    overviewEn: 'Edited campaign videos for OB Herbal featuring Dr. Grace. The work focused on turning health-related information into short-form content that felt clear, approachable, and easy to follow without losing the credibility of the message.',
    overviewId: 'Edited campaign videos for OB Herbal featuring Dr. Grace. The work focused on turning health-related information into short-form content that felt clear, approachable, and easy to follow without losing the credibility of the message.',
    execution: [
      { _key: 'e1', titleEn: 'Shape the Story', titleId: 'Shape the Story', descEn: "Structured the footage around Dr. Grace's key points, removing unnecessary pauses and keeping the information easy to follow.", descId: "Structured the footage around Dr. Grace's key points, removing unnecessary pauses and keeping the information easy to follow." },
      { _key: 'e2', titleEn: 'Support the Message', titleId: 'Support the Message', descEn: 'Used cuts, text, and supporting visuals to make the information easier to understand without making the video feel overly edited.', descId: 'Used cuts, text, and supporting visuals to make the information easier to understand without making the video feel overly edited.' },
      { _key: 'e3', titleEn: 'Final Review', titleId: 'Final Review', descEn: 'Checked the final edit for pacing, clarity, and visual consistency before delivery.', descId: 'Checked the final edit for pacing, clarity, and visual consistency before delivery.' }
    ]
  },
  {
    _type: 'project',
    id: 'gracia-campaigns',
    titleEn: 'Gracia Caroline - Commercial Campaigns',
    titleId: 'Gracia Caroline - Commercial Campaigns',
    showInHome: false,
    category: 'Video & Motion',
    role: 'Video Editor',
    client: 'SilverQueen · Runable · Gooday (via Angkasa)',
    platform: 'TikTok & Instagram',
    period: '2024 - Present',
    metricsTitle: 'Ongoing Commercial Work',
    overviewEn: 'Edited a range of commercial short-form videos featuring KOL Gracia Caroline for brands including SilverQueen, Runable, and Gooday. Each campaign came with its own direction, requiring the edit to adapt to both the creator and the brand.',
    overviewId: 'Edited a range of commercial short-form videos featuring KOL Gracia Caroline for brands including SilverQueen, Runable, and Gooday. Each campaign came with its own direction, requiring the edit to adapt to both the creator and the brand.',
    execution: [
      { _key: 'e1', titleEn: 'Adapt to the Creator', titleId: 'Adapt to the Creator', descEn: "Kept the edit natural to Gracia's delivery and personality instead of forcing the same editing style across every campaign.", descId: "Kept the edit natural to Gracia's delivery and personality instead of forcing the same editing style across every campaign." },
      { _key: 'e2', titleEn: 'Match the Brand', titleId: 'Match the Brand', descEn: 'Adjusted pacing, graphics, music, and product moments based on the direction and character of each brand.', descId: 'Adjusted pacing, graphics, music, and product moments based on the direction and character of each brand.' },
      { _key: 'e3', titleEn: 'Handle Different Campaigns', titleId: 'Handle Different Campaigns', descEn: "Worked across different briefs and content formats while keeping the creator's presence and the brand message consistent.", descId: "Worked across different briefs and content formats while keeping the creator's presence and the brand message consistent." }
    ]
  },
  {
    _type: 'project',
    id: 'skintific-content',
    titleEn: 'Skintific - TikTok Content & Ads',
    titleId: 'Skintific - TikTok Content & Ads',
    showInHome: true,
    category: 'Video & Motion',
    role: 'Video Editor / Content Specialist',
    client: '', // Intentionally left blank or can add a Brand field instead if schema allowed
    platform: 'TikTok & Instagram',
    metricsTitle: 'Beauty Content',
    overviewEn: 'Edited short-form content and TikTok ads for Skintific, working across UGC, product-focused videos, and social content. The work focused on keeping the content natural and platform-friendly while making sure the products and key messages came through clearly.',
    overviewId: 'Edited short-form content and TikTok ads for Skintific, working across UGC, product-focused videos, and social content. The work focused on keeping the content natural and platform-friendly while making sure the products and key messages came through clearly.',
    execution: [
      { _key: 'e1', titleEn: 'Adapt the Content', titleId: 'Adapt the Content', descEn: "Turned raw footage and creative briefs into short-form edits that fit the brand's social content style and the way beauty content is consumed on TikTok.", descId: "Turned raw footage and creative briefs into short-form edits that fit the brand's social content style and the way beauty content is consumed on TikTok." },
      { _key: 'e2', titleEn: 'Keep the Product Clear', titleId: 'Keep the Product Clear', descEn: 'Kept the product and key selling points clear through cuts, text, and supporting visuals without making the content feel overly commercial.', descId: 'Kept the product and key selling points clear through cuts, text, and supporting visuals without making the content feel overly commercial.' },
      { _key: 'e3', titleEn: 'UGC & Social Formats', titleId: 'UGC & Social Formats', descEn: 'Edited different formats, from creator-led UGC to more polished product videos, while keeping the delivery natural for social media.', descId: 'Edited different formats, from creator-led UGC to more polished product videos, while keeping the delivery natural for social media.' }
    ]
  },
  {
    _type: 'project',
    id: 'timephoria-ads',
    titleEn: 'TimePhoria - TikTok Ads',
    titleId: 'TimePhoria - TikTok Ads',
    showInHome: false,
    category: 'Video & Motion',
    role: 'TikTok Ads Editor',
    client: 'TimePhoria',
    platform: 'TikTok',
    period: 'Dec 2025 - Present',
    metricsTitle: 'Performance Creative',
    overviewEn: 'Produced and edited TikTok ads for TimePhoria across different creative formats - from UGC and product-focused content to branded videos and AI-assisted visuals. The work involved developing fresh creative variations for different campaign needs.',
    overviewId: 'Produced and edited TikTok ads for TimePhoria across different creative formats - from UGC and product-focused content to branded videos and AI-assisted visuals. The work involved developing fresh creative variations for different campaign needs.',
    execution: [
      { _key: 'e1', titleEn: 'UGC Editing', titleId: 'UGC Editing', descEn: 'Edited UGC footage to keep the delivery natural while tightening the opening and product moments for the TikTok format.', descId: 'Edited UGC footage to keep the delivery natural while tightening the opening and product moments for the TikTok format.' },
      { _key: 'e2', titleEn: 'Build Creative Variations', titleId: 'Build Creative Variations', descEn: 'Explored different hooks, structures, visuals, and product presentations to create variations from the same campaign idea.', descId: 'Explored different hooks, structures, visuals, and product presentations to create variations from the same campaign idea.' },
      { _key: 'e3', titleEn: 'AI-Assisted Production', titleId: 'AI-Assisted Production', descEn: 'Used AI tools to explore product visuals and creative concepts that could be developed into new advertising assets.', descId: 'Used AI tools to explore product visuals and creative concepts that could be developed into new advertising assets.' },
      { _key: 'e4', titleEn: 'Refine from Performance', titleId: 'Refine from Performance', descEn: 'Used performance feedback to understand which creative approaches were worth developing into new variations.', descId: 'Used performance feedback to understand which creative approaches were worth developing into new variations.' }
    ]
  },
  {
    _type: 'project',
    id: 'timephoria-web',
    titleEn: 'TimePhoria - Internal Web Dashboard',
    titleId: 'TimePhoria - Internal Web Dashboard',
    showInHome: false,
    category: 'UI/UX & Web',
    role: 'UI Designer & Developer',
    client: 'TimePhoria',
    metricsTitle: 'Internal Product',
    overviewEn: "Designed and developed an internal web dashboard to make the team's asset and editing workflow easier to manage. The system brought key production tasks and assets into one place, making the day-to-day workflow more organized and easier to handle.",
    overviewId: "Designed and developed an internal web dashboard to make the team's asset and editing workflow easier to manage. The system brought key production tasks and assets into one place, making the day-to-day workflow more organized and easier to handle.",
    execution: [
      { _key: 'e1', titleEn: 'Map the Workflow', titleId: 'Map the Workflow', descEn: 'Started by looking at how the team handled assets and editing tasks, then mapped the parts of the workflow that could be brought into one system.', descId: 'Started by looking at how the team handled assets and editing tasks, then mapped the parts of the workflow that could be brought into one system.' },
      { _key: 'e2', titleEn: 'Design the Interface', titleId: 'Design the Interface', descEn: "Designed the interface around the team's day-to-day needs, keeping important information easy to find and actions straightforward.", descId: "Designed the interface around the team's day-to-day needs, keeping important information easy to find and actions straightforward." },
      { _key: 'e3', titleEn: 'Build & Refine', titleId: 'Build & Refine', descEn: 'Developed the dashboard and refined the interface through actual use, focusing on making repetitive tasks easier to manage.', descId: 'Developed the dashboard and refined the interface through actual use, focusing on making repetitive tasks easier to manage.' }
    ]
  }
];

async function seed() {
  if (!env.SANITY_API_TOKEN) {
    console.error("Missing SANITY_API_TOKEN in environment!");
    process.exit(1);
  }
  
  console.log("Starting Sanity seed...");
  try {
    for (const project of projects) {
      console.log(`Uploading: ${project.id}...`);
      await client.createOrReplace({
        _id: `drafts.project-${project.id}`, // Create as draft so you can review first, or just `project-${project.id}`
        ...project
      });
    }
    console.log("Seeding complete! Refresh your Sanity Studio.");
  } catch (error) {
    console.error("Error seeding:", error);
  }
}

seed();
