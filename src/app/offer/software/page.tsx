import { CustomPage } from "@src/components/shared/page";
import { ROUTER_PATHS } from "@src/utils/constants";
import Link from "next/link";
import React from "react";

import softwareImage from "@public/software_offer_grid.jpg";

export default function SoftwareOffer() {
  return (
    <CustomPage
      title="Offer"
      subtitle="Robert Michalski - NurByte"
      imageUrl={softwareImage}
      fullScreen
      showNav
    >
      <article className="!flex flex-col gap-4">
        <p>
          Welcome to my offer page! I&apos;m a passionate software engineer
          dedicated to building high-quality, scalable, and efficient
          applications tailored to your needs.
        </p>
        <p>
          I provide a wide range of services in both web and mobile development,
          including:
        </p>
        <ul className="list-disc pl-5">
          <li>Full-stack web development with React and Node.js</li>
          <li>Mobile app development using React Native</li>
          <li>Backend development with Express.js and TypeScript</li>
          <li>Database design and management (MongoDB, PostgreSQL)</li>
          <li>Responsive design and user experience optimization</li>
        </ul>
        <p>
          My standard rate is <strong>150 zł brutto per hour</strong> (VAT
          included). For more specific pricing or detailed project discussions,
          I prefer to talk directly via email or through my{" "}
          <Link href={ROUTER_PATHS.CONTACT}>contact page</Link>. I always aim to
          respond as quickly as possible!
        </p>
        <p>
          Curious about my past work? Check out my{" "}
          <Link href={ROUTER_PATHS.OFFER_SOFTWARE}>portfolio</Link> to see some
          of my recent projects.
        </p>
        <p>
          Occasionally, I&apos;m also available in Singapore, Malaysia, and
          Indonesia (Batam), where I spend a few months each year. Feel free to
          reach out if you&apos;re in the region!
        </p>
      </article>
    </CustomPage>
  );
}
