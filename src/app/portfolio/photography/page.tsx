import Portfolio from "@src/components/photography-portfolio-list/wrapper";
import { CustomPage } from "@src/components/shared/page";

import { portfolioList } from "./utils";

import photographyImage from "@public/assets/photography_offer_grid.jpg";

export const generateMetadata = async () => {
  return {
    title: "NurByte | My portfolio - Photography",
    description:
      "Browse Robert Michalski’s professional photography portfolio featuring fashion, product, and packshot photography. Discover high-quality images showcasing years of expertise and creativity.",
  };
};

export default function photographyPortfolioPage() {
  return (
    <CustomPage
      title="Portfolio"
      subtitle="Photo gallery"
      imageUrl={photographyImage}
      fullScreen
      showNav
    >
      <Portfolio {...{ portfolioList }} />
    </CustomPage>
  );
}
