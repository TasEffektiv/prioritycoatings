import type { GalleryImage } from "@/components/GalleryLightbox";

const BASE = "/images";

const FILES = [
  "commercial-2013-1",
  "commercial-building",
  "commercial-building-2013",
  "commercial-building-sydney",
  "commercial-painting",
  "commercial-painting-2013",
  "commercial-property",
  "commercial-property-2018",
  "commercial-property-painting",
  "commercial-property-sydney-1",
  "commercial-scafolding",
  "line-marking",
  "line-marking-2015",
  "line-marking-from-poc",
  "line-marking-from-priority",
  "proper-line-marking",
  "quality-line-marking",
  "quality-line-marking-2015",
];

export const COMMERCIAL_PROJECTS: GalleryImage[] = FILES.map((name) => ({
  thumb: `${BASE}/${name}-150x150.jpg`,
  full: `${BASE}/${name}.jpg`,
  alt: name.replace(/-/g, " "),
}));
