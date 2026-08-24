import type { GalleryImage } from "@/components/GalleryLightbox";

const BASE = "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09";

const FILES = [
  "house-painting",
  "house-painting-2013-1",
  "house-painting-sydney-1",
  "house-repaint",
  "wall-repaint",
];

export const RESIDENTIAL_PROJECTS: GalleryImage[] = FILES.map((name) => ({
  thumb: `${BASE}/${name}-150x150.jpg`,
  full: `${BASE}/${name}.jpg`,
  alt: name.replace(/-/g, " "),
}));
