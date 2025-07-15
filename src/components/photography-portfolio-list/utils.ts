import { StaticImageData } from "next/image";

export const FILTER = {
  portrait: "Potraits",
  landscape: "Landscape",
  packshots: "Packshots",
  nature: "Nature",
} as const;

export type FilterType = (typeof FILTER)[keyof typeof FILTER];

export type PhotographyPortfolioItem = {
  title: string;
  src: StaticImageData;
  category: FilterType;
};
