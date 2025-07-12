import { CustomPage } from "@shared/page";

export const generateMetadata = async () => {
  return {
    title: "Portfolio",
    description: "",
  };
};

export default function portfolioPage() {
  return (
    <CustomPage title="test" fullScreen showNav>
      test
    </CustomPage>
  );
}
