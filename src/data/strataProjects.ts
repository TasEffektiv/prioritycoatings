import type { GalleryImage } from "@/components/GalleryLightbox";

const BASE = "/images";

const FILES = [
  "painting-strata",
  "strata-2013",
  "strata-2015",
  "strata-painting-1",
  "strata-painting-sydney-1",
  "strata-work",
];

export const STRATA_PROJECTS: GalleryImage[] = FILES.map((name) => ({
  thumb: `${BASE}/${name}-150x150.jpg`,
  full: `${BASE}/${name}.jpg`,
  alt: name.replace(/-/g, " "),
}));
