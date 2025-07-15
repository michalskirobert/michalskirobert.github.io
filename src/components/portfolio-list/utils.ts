import { StaticImageData } from "next/image";

export type PortfolioItem = {
  title: string;
  src: StaticImageData;
  zoom?: boolean;
  technologies?: string[];
  previewUrl?: string;
  repoUrl?: string;
};
