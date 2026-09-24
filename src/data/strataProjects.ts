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

// thumb used to point at WordPress's pre-cropped 150x150 variant, which
// looks soft/upscaled once stretched to fill a much larger grid cell
// (especially on retina displays). Using the same full-resolution source
// for both lets Next.js's image optimizer generate a properly-sized,
// sharp crop for the thumbnail instead of upscaling a 150px source.
export const STRATA_PROJECTS: GalleryImage[] = FILES.map((name) => ({
  thumb: `${BASE}/${name}.jpg`,
  full: `${BASE}/${name}.jpg`,
  alt: name.replace(/-/g, " "),
}));
