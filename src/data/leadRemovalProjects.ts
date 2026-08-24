import type { GalleryImage } from "@/components/GalleryLightbox";

const BASE = "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09";

const FILES = [
  "lead-paint-removal-1",
  "lead-paint-removal-2015-2",
  "lead-paint-removal-and-repaint-1",
  "lead-paint-removal-repaint-1",
  "lead-paint-removing-1",
  "lead-removal-2",
  "lead-removal-and-repainting-1",
  "lead-removal-repaint-1",
  "lead-removal-repainting-1",
  "lead-removing-and-repainting-1",
  "lead-removing-repainting-4",
];

export const LEAD_REMOVAL_PROJECTS: GalleryImage[] = FILES.map((name) => ({
  thumb: `${BASE}/${name}-150x150.jpg`,
  full: `${BASE}/${name}.jpg`,
  alt: name.replace(/-/g, " "),
}));
