import PortfolioList from "@src/components/portfolio-list/wrapper";
import { CustomPage } from "@src/components/shared/page";

import { portfolioList } from "./utils";

export const generateMetadata = async () => {
  return {
    title: "NurByte | My portfolio - Photography",
    description: "",
  };
};

export default function photographyPortfolioPage() {
  return (
    <CustomPage title="Portfolio" subtitle="list" fullScreen showNav>
      <PortfolioList {...{ portfolioList }} />
    </CustomPage>
  );
}
