import { PortfolioItem } from "@src/components/portfolio-list/utils";

import mainPage from "@public/main-page.jpg";
import indpol from "@public/indpol.jpg";

export const portfolioList: PortfolioItem[] = [
  {
    src: mainPage,
    technologies: [
      "Next.js",
      "Node.js",
      "Nodemailer",
      "TypeScript",
      "Tailwind CSS",
      "Sass",
    ],
    title: "Portfolio page",
    url: "https://michalskirobert.github.io",
    repoUrl: "",
  },
  {
    src: indpol,
    technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "Vercel", "Sass"],
    title: "Indpol - sklep indonezyjski",
    url: "https://indpol.pl",
    repoUrl: "https://indpol.pl",
  },
];
