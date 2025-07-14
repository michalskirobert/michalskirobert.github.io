import { StaticImageData } from "next/image";

export type PortfolioItem = {
  title: string;
  src: StaticImageData;
  url: string;
  technologies: string[];
  repoUrl?: string;
};
