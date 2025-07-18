import { CustomPage } from "@shared/page";

import contactImg from "@public/assets/contact_img.jpg";
import ContactForm from "@src/components/contact-form/wrapper";

export const generateMetadata = async () => {
  return {
    title: "NurByte | Contact me",
    description:
      "Contact Robert Michalski — software engineer and full-stack JavaScript developer specializing in React, Next.js, Node.js, and TypeScript. Let’s connect and build something great together.",
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
