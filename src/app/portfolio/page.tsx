import { CustomPage } from "@shared/page";

import logo from "@public/logo.png";
import PortfolioList from "@components/portfolio-list/wrapper";

export const generateMetadata = async () => {
  return {
    title: "NurByte | My portfolio",
    description: "",
  };
};

export default async function portfolioPage() {
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
