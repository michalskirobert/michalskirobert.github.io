import PortfolioList from "@src/components/portfolio-list";
import { CustomPage } from "@src/components/shared/page";
import { portfolioList } from "./utils";

export const generateMetadata = async () => {
  return {
    title: "NurByte | My portfolio - Software",
    description: "",
  };
};

export default function PortfolioSoftwarePage() {
  return (
    <CustomPage title="Portfolio" subtitle="list" fullScreen showNav>
      <PortfolioList {...{ portfolioList }} />
    </CustomPage>
  );
}
