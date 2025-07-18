import { CustomPage } from "@src/components/shared/page";
import { ROUTER_PATHS } from "@src/utils/constants";
import Link from "next/link";

import photographyImage from "@public/assets/photography_offer_grid.jpg";

export const generateMetadata = async () => {
  return {
    title: "NurByte | My portfolio",
    description:
      "Explore professional photography services by Robert Michalski (NurByte), including portrait, landscape, product, and commercial photography. Flexible packages, competitive pricing, and expert photo editing. Serving clients locally and in Southeast Asia.",
  };
};

export default function PhotographyOffer() {
  return (
    <CustomPage
      title="Photography Offer"
      subtitle="Robert Michalski - NurByte"
      imageUrl={photographyImage}
      fullScreen
      showNav
    >
      <article className="!flex flex-col gap-4">
        <p>
          Welcome to my photography offer page! I&apos;m a passionate
          photographer dedicated to capturing the beauty of the world through my
          lens.
        </p>
        <p>
          I provide a wide range of photography services, tailored to fit
          different needs and budgets. Here&rsquo;s a breakdown of my typical
          offerings and prices (all prices are brutto, including VAT):
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Portrait photography</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>Studio session without MUA: from 400 zł per hour</li>
              <li>Studio session with MUA: from 600 zł per hour</li>
              <li>Outdoor session without MUA: from 350 zł per hour</li>
              <li>Outdoor session with MUA: from 550 zł per hour</li>
            </ul>
          </li>
          <li>
            <strong>Landscape and nature photography</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>Outdoor session: from 400 zł per hour</li>
            </ul>
          </li>
          <li>
            <strong>Product and commercial photography</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>Studio shoot: from 500 zł per hour</li>
              <li>On-location shoot: from 550 zł per hour</li>
            </ul>
          </li>
          <li>
            <strong>Photo editing and retouching services</strong>
            <ul className="list-disc pl-5 mt-1">
              <li>From 100 zł per photo (final price depends on complexity)</li>
            </ul>
          </li>
        </ul>
        <p>
          For more details, package deals, or custom requests, feel free to
          contact me directly via email or through my{" "}
          <a href="/contact" className="text-blue-600 underline">
            contact page
          </a>
          . I&apos;m happy to discuss the best solution for your project!
        </p>
        <p>
          Curious about my past work? Check out my{" "}
          <Link href={ROUTER_PATHS.OFFER_PHOTOGRAPHY}>portfolio</Link> to see
          some of my recent projects.
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
