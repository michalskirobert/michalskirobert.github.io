import { CustomPage } from "@shared/page";
import { PortfolioList } from "@src/components/portfolio-list";

import logo from "@public/logo.png";

export const generateMetadata = async () => {
  return {
    title: "NurByte | My portfolio",
    description: "",
  };
};

export default function portfolioPage() {
  return (
    <CustomPage
      title="Portfolio"
      subtitle="list"
      imageUrl={logo}
      fullScreen
      showNav
    >
      <PortfolioList />
    </CustomPage>
  );
}
