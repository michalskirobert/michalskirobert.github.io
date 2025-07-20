import PortfolioList from "@components/software-portfolio-list";
import { CustomPage } from "@components/shared/page";
import { portfolioList } from "./utils";

import softwareImage from "@public/assets/software_offer_grid.jpg";
import Link from "next/link";
import { ROUTER_PATHS } from "@src/utils/constants";

export const generateMetadata = async () => {
  return {
    title: "NurByte | My portfolio - Software",
    description:
      "Explore software projects by Robert Michalski, full-stack JavaScript developer specializing in React, Next.js, Node.js, and TypeScript. See real-world apps built with clean, scalable code.",
  };
};

export default function PortfolioSoftwarePage() {
  return (
    <CustomPage
      title="Portfolio"
      subtitle="Software projects"
      imageUrl={softwareImage}
      fullScreen
      showNav
    >
      <PortfolioList {...{ portfolioList }} />
    </CustomPage>
  );
}
