import mainPage from "@public/portfolio/software/main-page.jpg";
import indpol from "@public/portfolio/software/indpol.jpg";
import quranTime from "@public/portfolio/software/quran_time_react_native.png";

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
  {
    src: quranTime,
    technologies: [
      "react-native.js",
      "i18n",
      "Quran API",
      "react-native-paper",
    ],
    title: "Quran time",
    repoUrl: "https://github.com/michalskirobert/quran-time/tree/master",
  },
];
