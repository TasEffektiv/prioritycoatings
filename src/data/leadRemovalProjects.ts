import type { GalleryImage } from "@/components/GalleryLightbox";

const BASE = "/images";

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

// thumb used to point at WordPress's pre-cropped 150x150 variant, which
// looks soft/upscaled once stretched to fill a much larger grid cell
// (especially on retina displays). Using the same full-resolution source
// for both lets Next.js's image optimizer generate a properly-sized,
// sharp crop for the thumbnail instead of upscaling a 150px source.
export const LEAD_REMOVAL_PROJECTS: GalleryImage[] = FILES.map((name) => ({
  thumb: `${BASE}/${name}.jpg`,
  full: `${BASE}/${name}.jpg`,
  alt: name.replace(/-/g, " "),
}));
