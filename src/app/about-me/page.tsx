import { CustomPage } from "@shared/page";

export const generateMetadata = async () => {
  return {
    title: "About me",
    description: "",
  };
};

export default function AboutPage() {
  return (
    <CustomPage title="test" fullScreen showNav>
      test
    </CustomPage>
  );
}
