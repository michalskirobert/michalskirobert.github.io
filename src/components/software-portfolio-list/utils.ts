import { StaticImageData } from "next/image";

export type SoftwarePortfolioItem = {
  title: string;
  src: StaticImageData;
  technologies: string[];
  previewUrl?: string;
  repoUrl?: string;
};
