import mainPage from "@public/portfolio/software/main-page.jpg";
import indpol from "@public/portfolio/software/indpol.jpg";
import { SoftwarePortfolioItem } from "@components/software-portfolio-list/utils";

export const portfolioList: SoftwarePortfolioItem[] = [
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
    previewUrl: "https://michalskirobert.github.io",
    repoUrl: "https://github.com/michalskirobert/michalskirobert.github.io",
  },
  {
    src: indpol,
    technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "Vercel", "Sass"],
    title: "Indpol - sklep indonezyjski",
    previewUrl: "https://indpol.pl",
    repoUrl: "https://github.com/michalskirobert/indpol-store",
  },
];
