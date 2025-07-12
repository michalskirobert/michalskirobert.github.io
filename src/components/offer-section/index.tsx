import { CustomPage } from "../shared/page";

import offer from "@public/offer.jpg";

import Link from "next/link";

export const OfferSection = () => (
  <CustomPage title="My offer" subtitle="Software Development" imageUrl={offer}>
    {/* <article className="!mb-2 !mt-2">
      <h3 className="!mb-2">For photography:</h3>
      <p>
        I&apos;m a Polish photographer who specializes in stock photos, fashion,
        clothing, portraits, and family sessions. I often find inspiration
        during my travels, especially in Asia. Every year, I spend time in
        Singapore, Indonesia (Batam), and Malaysia, where I’m sometimes
        personally available for photo sessions and projects.
      </p>
      <p>
        Whether you&apos;re looking for creative fashion shots, professional
        portraits, or family photos, we can tailor the session to your needs.
        Pricing is available after a free consultation, so we can discuss your
        vision and prepare a custom offer that suits you best.
      </p>
    </article> */}
    <article>
      <p>
        Besides photography, I’m passionate about building modern, user-friendly
        applications. I develop mobile apps using React Native, as well as web
        applications with React or Next.js on the frontend and Node.js on the
        backend. I work with databases like MySQL, SQL Server, PostgreSQL,
        MongoDB, and Firebase.
      </p>
      <p>
        My standard rate is around <strong>150 PLN brutto</strong> per hour
        (price including 23% VAT). However, it’s always better to discuss the
        details and prepare a project-based estimate, so you know exactly what
        to expect.
      </p>
      <p>
        While most of my software work can be done remotely, I also travel to
        Singapore, Indonesia (Batam), and Malaysia regularly, so we can
        sometimes meet in person to discuss your project if needed.
      </p>
      <p>
        Combining my technical and creative skills helps me deliver unique and
        inspiring projects, whether it&apos;s a website, a mobile app, or an
        API. I love solving problems and continuously improving my skills to
        provide the best solutions.
      </p>
      <p className="inline">Feel free to contact me via</p>{" "}
      <a href="mailto:rm.software.lab@gmail.com">e-mail</a> or the{" "}
      <Link href="/contact">contact form</Link>
    </article>
  </CustomPage>
);
