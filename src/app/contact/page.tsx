import { CustomPage } from "@shared/page";

import test from "@public/logo.png";

export const generateMetadata = async () => {
  return {
    title: "Contact me",
    description: "",
  };
};

export default function ContactPage() {
  return (
    <CustomPage
      title="test"
      subtitle="test2"
      imageUrl={test}
      fullScreen
      showNav
    >
      test3
    </CustomPage>
  );
}
