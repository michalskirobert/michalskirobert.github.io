import { CustomPage } from "@shared/page";

import contactImg from "@public/contact_img.jpg";
import ContactForm from "@src/components/contact-form/wrapper";

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
      imageUrl={contactImg}
      fullScreen
      showNav
    >
      <ContactForm />
    </CustomPage>
  );
}
