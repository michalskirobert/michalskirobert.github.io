import PortfolioList from "@src/components/portfolio-list/wrapper";
import { CustomPage } from "@src/components/shared/page";

import { portfolioList } from "./utils";

import photographyImage from "@public/photography_offer_grid.jpg";

export const generateMetadata = async () => {
  return {
    title: "NurByte | My portfolio - Photography",
    description: "",
  };
};

export default function photographyPortfolioPage() {
  return (
    <CustomPage
      title="Portfolio"
      subtitle="list"
      imageUrl={photographyImage}
      fullScreen
      showNav
    >
      <PortfolioList {...{ portfolioList }} />
    </CustomPage>
  );
}
