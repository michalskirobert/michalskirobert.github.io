import PortfolioList from "@src/components/portfolio-list";
import { CustomPage } from "@src/components/shared/page";
import { portfolioList } from "./utils";

import softwareImage from "@public/assets/software_offer_grid.jpg";

export const generateMetadata = async () => {
  return {
    title: "NurByte | My portfolio - Software",
    description: "",
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
