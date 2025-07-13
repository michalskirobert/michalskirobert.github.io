"use client";

import dynamic from "next/dynamic";
import { ContactFormSkeleton } from "./loading";

const ContactForm = dynamic(() => import("@components/contact-form"), {
  ssr: false,
  loading: () => <ContactFormSkeleton />,
});

export default ContactForm;
