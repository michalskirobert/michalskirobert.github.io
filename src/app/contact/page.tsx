import { CustomPage } from "@shared/page";

import test from "@public/robert.jpg";
import { ContactForm } from "@src/components/contact-form";

export const generateMetadata = async () => {
  return {
    title: "NurByte | Contact me",
    description: "",
  };
};

export default function ContactPage() {
  return (
    <CustomPage
      title="Contact me"
      subtitle="Let’s work together!"
      imageUrl={test}
      fullScreen
      showNav
    >
      <ContactForm />
    </CustomPage>
  );
}
