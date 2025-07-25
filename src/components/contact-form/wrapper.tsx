"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "./loading";

const ContactForm = dynamic(() => import("./"), {
  ssr: false,
  loading: () => <Skeleton />,
});

export default ContactForm;
